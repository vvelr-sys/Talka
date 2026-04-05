"use client";
import React, { useState } from 'react';

export default function AddNote({ onClose, onSaveNote, currentNotes = [], onDeleteNote }) {

    const [title, setTitle] = useState("");
    const [noteText, setNoteText] = useState("");

    // 🟢 สร้าง State สำหรับเก็บ ID ของ Note ที่ถูกกดลบแบบ Soft Delete
    const [deletedNoteIds, setDeletedNoteIds] = useState(new Set());

    const handleSave = () => {
        if (!title || !noteText) return; // ป้องกันการเซฟข้อมูลว่างโดยไม่เด้ง alert กวนใจ
        
        const newNote = {
            id: Date.now(),
            title: title,
            text: noteText,
            timestamp: new Date().toISOString()
        };

        onSaveNote(newNote);
        setTitle("");
        setNoteText("");
    };

    // ฟังก์ชันจัดการสลับสถานะลบ/กู้คืน
    const toggleSoftDelete = (id) => {
        setDeletedNoteIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id); // กู้คืน
            } else {
                newSet.add(id); // ลบแบบจางๆ
                
                // 💡 [NOTE]: หากคุณต้องการลบออกจากฐานข้อมูลจริงๆ ด้วย ให้ปลดคอมเมนต์บรรทัดล่างนี้ 
                // แต่ถ้าทำแบบนั้น Note จะหายไปจาก currentNotes ทันที ไม่ทันได้เห็นแบบจางๆ ครับ
                // onDeleteNote(id); 
            }
            return newSet;
        });
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="w-[320px] max-h-[85vh] bg-[#1E1B29] border border-[#BE7EC7]/10 rounded-3xl shadow-2xl p-6 flex flex-col self-start overflow-hidden">

            <h2 className="text-white text-xl font-bold mb-5 shrink-0">Add Note</h2>

            <div className="flex-1 overflow-y-auto custom-scrollbar pr-1">
                
                {/* INPUT SECTION */}
                <div className="flex flex-col gap-4">
                    <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-wider mb-1.5 block">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-white/5 text-white text-sm rounded-xl px-3.5 py-2.5 outline-none focus:border-[#BE7EC7] focus:ring-1 focus:ring-[#BE7EC7] border border-white/10 transition-all placeholder:text-white/20"
                            placeholder="Topic..."
                        />
                    </div>

                    <div>
                        <label className="text-white/40 text-[10px] uppercase tracking-wider mb-1.5 block">Note</label>
                        <textarea
                            value={noteText}
                            onChange={(e) => setNoteText(e.target.value)}
                            className="w-full h-24 bg-white/5 text-white text-sm rounded-xl px-3.5 py-2.5 outline-none focus:border-[#BE7EC7] focus:ring-1 focus:ring-[#BE7EC7] border border-white/10 transition-all placeholder:text-white/20 resize-none custom-scrollbar"
                            placeholder="Write details..."
                        />
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    disabled={!title || !noteText}
                    className="w-full bg-[#BE7EC7] hover:bg-[#a66bb0] disabled:bg-white/10 disabled:text-white/30 text-white font-semibold py-2.5 rounded-xl transition-all mt-5 mb-6 shadow-lg shadow-[#BE7EC7]/20 disabled:shadow-none"
                >
                    Save Note
                </button>

                {/* LIST SECTION */}
                <div className="border-t border-white/5 pt-5">
                    <h3 className="text-white/60 font-semibold mb-3 text-xs uppercase tracking-widest">
                        History ({currentNotes.length})
                    </h3>

                    <div className="flex flex-col gap-3">
                        {currentNotes.length === 0 ? (
                            <p className="text-white/30 text-xs text-center italic py-4">No notes saved yet.</p>
                        ) : (
                            [...currentNotes].reverse().map((note) => {
                                const isDeleted = deletedNoteIds.has(note.id);
                                
                                return (
                                    <div 
                                        key={note.id} 
                                        className={`bg-white/5 border border-white/5 rounded-xl p-3.5 transition-all relative group ${isDeleted ? 'opacity-40 grayscale' : 'hover:bg-white/10'}`}
                                    >
                                        {/* ส่วนหัวข้อและปุ่มลบ/กู้คืน */}
                                        <div className="flex justify-between items-start mb-1.5">
                                            <h4 className={`text-white font-bold text-sm truncate pr-6 ${isDeleted ? 'line-through text-white/50' : ''}`}>
                                                {note.title}
                                            </h4>
                                            
                                            <button 
                                                onClick={() => toggleSoftDelete(note.id)}
                                                className="w-7 h-7 absolute top-2 right-2 flex items-center justify-center rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-all hover:bg-white/10"
                                                title={isDeleted ? "Restore Note" : "Delete Note"}
                                            >
                                                {isDeleted ? (
                                                    <i className="fa-solid fa-arrow-rotate-left text-[10px] text-green-400"></i>
                                                ) : (
                                                    <i className="fa-solid fa-trash-can text-[10px] text-red-400"></i>
                                                )}
                                            </button>
                                        </div>

                                        {/* เนื้อหา Note */}
                                        <p className={`text-sm line-clamp-3 mb-2 wrap-break-words leading-relaxed ${isDeleted ? 'line-through text-white/30' : 'text-white/70'}`}>
                                            {note.text}
                                        </p>

                                        {/* วันที่ */}
                                        <p className="text-white/30 text-[9px] text-right font-medium tracking-wide">
                                            {formatDate(note.timestamp)}
                                        </p>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

            </div>

            <button
                onClick={onClose}
                className="w-full mt-5 shrink-0 bg-[#BE7EC7]/10 hover:bg-[#BE7EC7]/20 text-[#BE7EC7] border border-[#BE7EC7]/20 hover:border-[#BE7EC7]/40 font-semibold py-2.5 rounded-xl transition-all"
            >
                Done
            </button>
        </div>
    );
}