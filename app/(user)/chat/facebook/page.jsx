"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// ส่วนประกอบ UI ต่างๆ
import ChatList from "@/app/components/Chat/ChatList.jsx";
import ChatMessage from '@/app/components/Chat/ChatMessage.jsx';
import ChatFitter from "@/app/components/Chat/ChatFitter";
import ControlPanel from "@/app/components/Actions/ControlPanel";
import AddTag from "@/app/components/Actions/AddTag";
import ContactDetails from "@/app/components/Chat/ChatContactDetail";
import AddNote from "@/app/components/Actions/AddNote";
import AiSuppBtn from "@/app/components/AI/AiSuppBtn";
import ChangeStatus from "@/app/components/Actions/Changestatus";
import AiAssistantPanel from "@/app/components/AI/AiAssistantPanel";
import ActivityLogPanel from "@/app/components/Actions/ActivityLogPanel";
import SendToBoardModal from "@/app/components/Modals/SendToBoardModal";

import "@/app/assets/css/other.css";

import { DEFAULT_TAGS } from "@/app/data/defaultTags";
import { DEFAULT_AI_PROMPTS } from "@/app/data/defaultPrompts";

const ALL_AVAILABLE_STATUS = ["OPEN", "PENDING", "CLOSED", "RESOLVED"];

const DEFAULT_AI_AGENTS = [
    { id: 'receptionist', name: 'Receptionist', emoji: '🛎️', role: 'Front Desk' },
    { id: 'sales', name: 'Sales Agent', emoji: '😝', role: 'Sales' },
    { id: 'support', name: 'Support Agent', emoji: '❤️', role: 'Support' },
];

function ChatPageContent() {
    const searchParams = useSearchParams();

    const [chats, setChats] = useState([]);
    const [selectedChatId, setSelectedChatId] = useState(null);
    const selectedChat = chats.find(chat => chat.id === selectedChatId);
    
    const [isLoaded, setIsLoaded] = useState(false);

    // State สำหรับ UI Modals
    const [isAddTagModalOpen, setIsAddTagModalOpen] = useState(false);
    const [isContactDetailsOpen, setIsContactDetailsOpen] = useState(false);
    const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
    const [isChangeStatusOpen, setIsChangeStatusOpen] = useState(false);
    const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
    const [isActivityLogOpen, setIsActivityLogOpen] = useState(false);
    const [isSendToBoardOpen, setIsSendToBoardOpen] = useState(false);

    const [activeFilter, setActiveFilter] = useState("All");
    const [activeCompanyFilter, setActiveCompanyFilter] = useState(null);
    
    const [currentUser, setCurrentUser] = useState({ name: "Admin", role: "Admin", avatar: "A" });

    const [activityLogs, setActivityLogs] = useState([]);
    const [activePrompts, setActivePrompts] = useState(DEFAULT_AI_PROMPTS.filter(p => p.active === true));
    const [availableAgents, setAvailableAgents] = useState(DEFAULT_AI_AGENTS);
    const [availableTags, setAvailableTags] = useState(DEFAULT_TAGS);

    // 🟢 Fetch Initial Data from API
    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch('/api/line/chat-sessions');
                if (!res.ok) throw new Error('API Error');
                const data = await res.json();
                setChats(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('❌ Failed to load chats:', error);
                // Fallback: ใช้ข้อมูลว่างๆ เพื่อให้ UI แสดงได้
                setChats([]);
            } finally {
                setIsLoaded(true);
            }
        };
        loadData();
    }, []);

    // 🟢 SSE (Server-Sent Events) - Real-time Updates
    useEffect(() => {
        if (!isLoaded) return;

        let eventSource;
        const connectSSE = () => {
            try {
                eventSource = new EventSource('/api/line/webhook?stream=true');

                eventSource.addEventListener('message', (event) => {
                    try {
                        const data = JSON.parse(event.data);
                        
                        setChats(prev => {
                            const isExistingChat = prev.some(chat => chat.id === data.chatId);

                            if (isExistingChat) {
                                return prev.map(chat => {
                                    if (chat.id === data.chatId) {
                                        return {
                                            ...chat,
                                            messages: [...(chat.messages || []), {
                                                id: Date.now(),
                                                from: data.from,
                                                text: data.text,
                                                time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
                                                timestamp: new Date(data.timestamp)
                                            }],
                                            lastMessage: data.text
                                        };
                                    }
                                    return chat;
                                });
                            } else {
                                const newChat = {
                                    id: data.chatId,
                                    name: data.customerName || "LINE User", 
                                    platform: "LINE",
                                    status: "OPEN",
                                    messages: [{
                                        id: Date.now(),
                                        from: data.from,
                                        text: data.text,
                                        time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
                                        timestamp: new Date(data.timestamp)
                                    }],
                                    lastMessage: data.text
                                };
                                return [newChat, ...prev];
                            }
                        });

                    } catch (error) {
                        console.error('❌ Error parsing SSE data:', error);
                    }
                });

                eventSource.addEventListener('error', (error) => {
                    console.error('❌ SSE Connection Error:', error);
                    eventSource.close();
                    setTimeout(connectSSE, 3000);
                });

            } catch (error) {
                console.error('❌ Failed to connect SSE:', error);
                setTimeout(connectSSE, 3000);
            }
        };

        connectSSE();

        return () => {
            if (eventSource) {
                eventSource.close();
            }
        };
    }, [isLoaded]);

    useEffect(() => {
        const urlId = searchParams.get('id');
        if (urlId) {
            const idNum = parseInt(urlId);
            const targetChat = chats.find(c => c.id === idNum);
            if (targetChat) {
                setSelectedChatId(idNum);
            }
        }
    }, [searchParams, chats]);

    const addLog = (chatId, type, detail) => {
        if (!chatId) return;
        const newLog = {
            id: Date.now() + Math.random(),
            chatId,
            type,
            detail,
            timestamp: new Date().toISOString(),
            by: currentUser.name
        };
        setActivityLogs(prev => [...prev, newLog]);
    };

    const handleToggleTag = async (tagName) => {
        if (!selectedChat) return;
        addLog(selectedChat.id, 'tag', `Changed tag to "${tagName}"`);
    };

    const handleUpdateStatus = async (newStatus) => {
        if (!selectedChat) return;
        addLog(selectedChat.id, 'status', `Changed status from "${selectedChat.status}" to "${newStatus}"`);
        setChats(currentChats =>
            currentChats.map(chat =>
                chat.id === selectedChat.id ? { ...chat, status: newStatus } : chat
            )
        );
    };

    const handleUpdateContactInfo = async (contactId, updatedInfo) => {
        addLog(contactId, 'contact', `Updated information`);
        setChats(currentChats =>
            currentChats.map(chat =>
                chat.id === contactId ? { ...chat, ...updatedInfo } : chat
            )
        );
    };

    const handleAddNote = async (noteData) => {
        if (!selectedChatId) return;
        addLog(selectedChatId, 'note', `Added note: "${noteData.title}"`);
        setChats(currentChats =>
            currentChats.map(chat =>
                chat.id === selectedChatId ? { ...chat, notes: [...(chat.notes || []), noteData] } : chat
            )
        );
    };

    const handleSendMessage = async (chatId, text) => {
        if (!chatId || !text.trim()) return;

        try {
            const response = await fetch('/api/line/messages/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_session_id: chatId,
                    text: text.trim(),
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                alert('Failed to send message: ' + error.error);
                return;
            }

            addLog(chatId, 'message', `Sent message`);

            setChats(currentChats =>
                currentChats.map(chat => {
                    if (chat.id === chatId) {
                        const newMessage = {
                            id: Date.now(),
                            from: "AGENT",
                            text: text,
                            time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
                            timestamp: new Date()
                        };
                        return {
                            ...chat,
                            messages: [...chat.messages, newMessage],
                            lastMessage: text,
                        };
                    }
                    return chat;
                })
            );

        } catch (error) {
            alert('Error sending message: ' + error.message);
        }
    };

    const availableCompanies = useMemo(() => [...new Set(chats.map(c => c.company).filter(Boolean))], [chats]);
    const statusPriority = { "OPEN": 1, "PENDING": 2, "CLOSED": 3, "RESOLVED": 3 };

    const filteredChats = chats
        .filter(chat => {
            const statusMatch = activeFilter === "All" || chat.status === activeFilter;
            const companyMatch = !activeCompanyFilter || chat.company === activeCompanyFilter;
            return statusMatch && companyMatch;
        })
        .sort((a, b) => (statusPriority[a.status] || 2) - (statusPriority[b.status] || 2));

    const closeAllPanels = () => {
        setIsAddTagModalOpen(false);
        setIsContactDetailsOpen(false);
        setIsAddNoteOpen(false);
        setIsChangeStatusOpen(false);
        setIsActivityLogOpen(false);
        setIsSendToBoardOpen(false);
    };

    if (!isLoaded) {
        return (
            <div className="flex-1 flex h-full items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-4 border-[#BE7EC7]/30 border-t-[#BE7EC7] rounded-full animate-spin"></div>
                    <div className="text-[#BE7EC7] text-sm font-medium">Loading Chat Data...</div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 flex flex-col h-full max-h-full overflow-hidden bg-transparent">
            
            <div className="flex-shrink-0 px-7 py-4 border-b border-white/5">
                <ChatFitter 
                    onFilterChange={setActiveFilter} 
                    availableCompanies={availableCompanies} 
                    onCompanyChange={setActiveCompanyFilter} 
                />
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex gap-5 px-7 py-3 overflow-hidden">
                
                {/* 1. Chat List (ซ้าย) */}
                <ChatList 
                    chats={filteredChats} 
                    onSelectChat={(chat) => setSelectedChatId(chat.id)} 
                    selectedId={selectedChatId} 
                    availableTags={availableTags} 
                />

                {/* 2. Chat Message & Panels (ขวา) */}
                <div className="flex-1 flex gap-5 overflow-hidden relative">
                    <ChatMessage 
                        chat={selectedChat} 
                        availableAgents={availableAgents} 
                        onSelectAiAgent={(id, agent) => {
                            setChats(prev => prev.map(c => c.id === id ? { ...c, activeAiAgent: agent, isAiMode: !!agent } : c));
                        }} 
                        aiPrompts={activePrompts} 
                        currentUser={currentUser} 
                        onSendMessage={handleSendMessage} 
                        availableTags={availableTags} 
                    />
                    
                    {/* Right Side Panels */}
                    {isAddTagModalOpen && <AddTag onClose={() => setIsAddTagModalOpen(false)} availableTags={availableTags} currentTargets={selectedChat?.tags || []} onToggleTag={handleToggleTag} />}
                    {isContactDetailsOpen && <ContactDetails onClose={() => setIsContactDetailsOpen(false)} contact={selectedChat} onUpdateContact={handleUpdateContactInfo} />}
                    {isAddNoteOpen && <AddNote onClose={() => setIsAddNoteOpen(false)} onSaveNote={handleAddNote} currentNotes={selectedChat?.notes || []} onDeleteNote={(id) => {
                        setChats(prev => prev.map(c => c.id === selectedChatId ? { ...c, notes: c.notes.filter(n => n.id !== id) } : c));
                    }} />}
                    {isChangeStatusOpen && <ChangeStatus onClose={() => setIsChangeStatusOpen(false)} availableStatus={ALL_AVAILABLE_STATUS} currentTargets={selectedChat?.status ? [selectedChat.status] : []} onToggleStatus={handleUpdateStatus} />}
                    {isActivityLogOpen && <ActivityLogPanel onClose={() => setIsActivityLogOpen(false)} logs={activityLogs.filter(log => log.chatId === selectedChatId)} />}
                    
                    {selectedChatId && (
                        <ControlPanel 
                            onOpenAddTagModal={() => { closeAllPanels(); setIsAddTagModalOpen(true); }}
                            onOpenContactDetails={() => { closeAllPanels(); setIsContactDetailsOpen(true); }}
                            onOpenAddNote={() => { closeAllPanels(); setIsAddNoteOpen(true); }}
                            onOpenChangeStatus={() => { closeAllPanels(); setIsChangeStatusOpen(true); }}
                            onOpenActivityLog={() => { closeAllPanels(); setIsActivityLogOpen(true); }}
                            onOpenSendToBoard={() => { closeAllPanels(); setIsSendToBoardOpen(true); }}
                        />
                    )}
                    
                    {/* AI Button ลอยอยู่มุมขวาล่าง */}
                    <div className="absolute bottom-6 right-6 z-50">
                        <AiSuppBtn onClick={() => setIsAiAssistantOpen(!isAiAssistantOpen)} isOpen={isAiAssistantOpen} />
                    </div>
                    {isAiAssistantOpen && <AiAssistantPanel onClose={() => setIsAiAssistantOpen(false)} availableAgents={availableAgents} />}
                </div>
            </div>

            {isSendToBoardOpen && selectedChat && <SendToBoardModal onClose={() => setIsSendToBoardOpen(false)} chat={selectedChat} />}
        </div>
    );
}

export default function ChatPage() {
    return (
        <Suspense fallback={
            // 🛠️ เปลี่ยน h-screen เป็น h-full
            <div className="flex-1 flex h-full items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                    <div className="w- h-8 border-4 border-[#BE7EC7]/30 border-t-[#BE7EC7] rounded-full animate-spin"></div>
                    <div className="text-[#BE7EC7] text-sm font-medium">Loading Chat Data...</div>
                </div>
            </div>
        }>
            <ChatPageContent />
        </Suspense>
    );
}