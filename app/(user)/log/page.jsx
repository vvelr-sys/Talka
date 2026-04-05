"use client";
import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  RefreshCw,
  ChevronDown,
  MessageCircle,
  Tag,
  UserPlus,
  Activity,
  Clock,
  Shield, // ✅ แก้ไขจาก ShieldInfo เป็น Shield
} from "lucide-react";

export default function ActivityLog() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [filterType, setFilterType] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  const [searchText, setSearchText] = useState("");
  const [activityLogs, setActivityLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        setIsLoading(true);
        const mockData = [
          { id: 1, type: "chat_incoming", actor: "Customer", target: "Support Team", timestamp: "2025-11-26T09:12:30.10", message: "Customer sent a new message", details: { channel: "Facebook", preview: "สวัสดีครับ ขอสอบถาม..." } },
          { id: 2, type: "chat_incoming", actor: "Customer", target: "Support Team", timestamp: "2025-11-26T09:13:02.55", message: "Customer sent a new message", details: { channel: "Line", preview: "รบกวนเช็คสถานะออเดอร์..." } },
          { id: 3, type: "invite_user", actor: "Owner", target: "new_member@test.com", timestamp: "2025-11-26T11:45:22.99", message: "Invited new team member", details: { role: "Employer", method: "Email Invite" } },
          { id: 4, type: "tag_create", actor: "Admin A", target: "Tag: Hot Lead", timestamp: "2025-11-26T10:05:11.42", message: "Created new tag", details: { color: "red", category: "VIP" } },
          { id: 5, type: "chat_incoming", actor: "Customer", target: "Support Team", timestamp: "2025-11-26T11:22:10.11", message: "Customer sent a new message", details: { channel: "Facebook", preview: "ขอบคุณมากครับ" } },
          { id: 6, type: "tag_add", actor: "Admin B", target: "User Somchai", timestamp: "2025-11-26T11:22:10.11", message: "Added tag to user", details: { tag: "VIP", user: "Somchai" } },
        ];
        
        setTimeout(() => {
          setActivityLogs(mockData);
          setIsLoading(false);
        }, 800);
      } catch (error) {
        setIsLoading(false);
      }
    };
    fetchLogs();
  }, []);

  const getTypeConfig = (type) => {
    switch (type) {
      case "chat_incoming": return { label: "Chat", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20", line: "bg-blue-400", icon: MessageCircle };
      case "tag_create": return { label: "Tag System", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20", line: "bg-emerald-400", icon: Tag };
      case "tag_add": return { label: "User Tag", color: "text-amber-400", bg: "bg-amber-400/10", border: "border-amber-400/20", line: "bg-amber-400", icon: Tag };
      case "invite_user": return { label: "Security", color: "text-[#BE7EC7]", bg: "bg-[#BE7EC7]/10", border: "border-[#BE7EC7]/20", line: "bg-[#BE7EC7]", icon: UserPlus };
      default: return { label: "System", color: "text-slate-400", bg: "bg-slate-400/10", border: "border-slate-400/20", line: "bg-slate-400", icon: Activity };
    }
  };

  const filteredLogs = useMemo(() => {
    let logs = [...activityLogs];
    if (filterType !== "all") logs = logs.filter((log) => log.type === filterType);
    if (searchText.trim() !== "") {
      logs = logs.filter((log) => [log.message, log.actor, log.target].join(" ").toLowerCase().includes(searchText.toLowerCase()));
    }
    logs.sort((a, b) => {
      const timeA = new Date(a.timestamp).getTime();
      const timeB = new Date(b.timestamp).getTime();
      return sortOrder === "newest" ? timeB - timeA : timeA - timeB;
    });
    return logs;
  }, [activityLogs, filterType, sortOrder, searchText]);

  return (
    <div className="w-full h-[94vh] p-4 lg:p-6">
      <div className="bg-[#161223] border border-white/5 rounded-[2.5rem] shadow-2xl h-full flex flex-col overflow-hidden">
        
        {/* Header Section */}
        <div className="p-8 pb-6 shrink-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-2xl bg-[#BE7EC7] flex items-center justify-center shadow-[0_0_15px_rgba(190,126,199,0.3)]">
                    {/* ✅ แก้ไขจุดนี้เรียบร้อยแล้ว */}
                    <Shield size={22} className="text-white" /> 
                </div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Activity Logs</h1>
              </div>
              <p className="text-white/30 text-sm font-medium ml-1">Workspace audit trail and system events.</p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input
                placeholder="Search events..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-[#1F192E] border border-white/5 text-white text-sm focus:outline-none focus:border-[#BE7EC7]/50 transition-all shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="px-8 pb-6 flex flex-wrap items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 bg-[#1F192E] p-1.5 rounded-2xl border border-white/5 shadow-sm">
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-transparent text-white/70 text-xs font-bold uppercase tracking-wider px-4 py-1.5 outline-none cursor-pointer"
            >
              <option value="all" className="bg-[#1F192E]">All Events</option>
              <option value="chat_incoming" className="bg-[#1F192E]">Incoming Chats</option>
              <option value="tag_create" className="bg-[#1F192E]">Tag Management</option>
              <option value="invite_user" className="bg-[#1F192E]">Team Invites</option>
            </select>
            <div className="w-px h-4 bg-white/10"></div>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-transparent text-white/70 text-xs font-bold uppercase tracking-wider px-4 py-1.5 outline-none cursor-pointer"
            >
              <option value="newest" className="bg-[#1F192E]">Newest First</option>
              <option value="oldest" className="bg-[#1F192E]">Oldest First</option>
            </select>
          </div>

          <button
            onClick={() => { setSearchText(""); setFilterType("all"); }}
            className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 text-white/40 text-xs font-bold uppercase tracking-widest hover:bg-[#BE7EC7] hover:text-white transition-all duration-300 shadow-sm"
          >
            <RefreshCw size={14} /> Reset
          </button>
        </div>

        {/* Logs List Container */}
        <div className="flex-1 overflow-y-auto px-8 pb-8 custom-scrollbar">
          <div className="space-y-3">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 animate-pulse">
                <RefreshCw className="animate-spin text-[#BE7EC7] mb-4" size={40} />
                <p className="text-white/20 font-bold uppercase tracking-widest text-xs">Syncing audit logs...</p>
              </div>
            ) : filteredLogs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-white/10">
                <Activity size={64} className="mb-4 opacity-10" />
                <p className="text-lg font-bold">No logs found</p>
              </div>
            ) : (
              filteredLogs.map((log) => {
                const config = getTypeConfig(log.type);
                const Icon = config.icon;
                const isExpanded = expandedRow === log.id;

                return (
                  <div key={log.id} 
                    className={`group relative bg-[#1F192E] border rounded-[1.5rem] transition-all duration-300 ${isExpanded ? 'border-[#BE7EC7]/40 shadow-xl' : 'border-white/[0.03] hover:border-white/10 hover:shadow-lg hover:-translate-y-0.5'}`}
                  >
                    {/* Status Accent Line */}
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 rounded-r-full ${config.line} transition-all`}></div>

                    <div onClick={() => setExpandedRow(isExpanded ? null : log.id)} className="flex items-center gap-5 p-4 cursor-pointer">
                      {/* Icon Box */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${config.bg} ${config.color} border border-white/5`}>
                        <Icon size={22} />
                      </div>

                      {/* Main Info */}
                      <div className="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                        <div className="lg:col-span-5">
                          <h4 className="text-white font-bold text-sm truncate">{log.message}</h4>
                          <span className={`text-[10px] font-black uppercase tracking-widest ${config.color} opacity-80`}>{config.label}</span>
                        </div>

                        <div className="lg:col-span-4 flex items-center gap-2 text-xs">
                          <span className="text-white font-bold px-2 py-1 bg-white/5 rounded-lg">{log.actor}</span>
                          <span className="text-white/20">→</span>
                          <span className="text-white/50 truncate font-medium">{log.target}</span>
                        </div>

                        <div className="lg:col-span-3 text-right flex flex-col items-end">
                          <div className="flex items-center gap-2 text-[11px] text-white/30 font-bold">
                            <Clock size={12} />
                            {new Date(log.timestamp).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                          </div>
                          <div className="text-[10px] text-white/20 mt-0.5 font-mono">
                            {new Date(log.timestamp).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })}
                          </div>
                        </div>
                      </div>

                      <div className={`text-white/10 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#BE7EC7]" : ""}`}>
                        <ChevronDown size={20} />
                      </div>
                    </div>

                    {/* Detailed Information (Inside the card) */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-1 animate-in slide-in-from-top-2 duration-300">
                        <div className="bg-[#161223] rounded-2xl p-5 border border-white/5 shadow-inner">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.entries(log.details).map(([key, value]) => (
                              <div key={key} className="flex flex-col border-b border-white/[0.03] pb-2 last:border-0 last:pb-0">
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">{key}</span>
                                <span className="text-sm text-white font-medium">{value}</span>
                              </div>
                            ))}
                            <div className="flex flex-col border-b border-white/[0.03] pb-2 last:border-0 last:pb-0">
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/20 mb-1">Transaction ID</span>
                                <span className="text-xs text-white/40 font-mono italic">log_trace_{log.id}x99</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}