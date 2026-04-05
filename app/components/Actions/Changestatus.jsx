"use client";
import { X, Check } from "lucide-react"; 

export default function ChangeStatus({ onClose, availableStatus, currentTargets, onToggleStatus }) {
    
    // Helper Function สำหรับกำหนดสีและแสงเรือง (Glow) ของแต่ละสถานะ
    const getStatusStyles = (status, isActive) => {
        if (!isActive) return "bg-white/[0.02] text-white/50 hover:bg-white/[0.06] hover:text-white border-white/5 hover:border-white/10 hover:-translate-y-0.5 shadow-sm";
        
        switch(status?.toUpperCase()) {
            case 'OPEN': 
                return "bg-gradient-to-r from-emerald-500/10 to-transparent text-emerald-400 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/20";
            case 'PENDING': 
                return "bg-gradient-to-r from-amber-500/10 to-transparent text-amber-400 border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/20";
            case 'RESOLVED': 
                return "bg-gradient-to-r from-blue-500/10 to-transparent text-blue-400 border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20";
            case 'CLOSED': 
                return "bg-gradient-to-r from-slate-400/10 to-transparent text-slate-300 border-slate-400/30 shadow-[0_0_20px_rgba(148,163,184,0.15)] ring-1 ring-slate-400/20";
            default: 
                return "bg-gradient-to-r from-[#BE7EC7]/10 to-transparent text-[#BE7EC7] border-[#BE7EC7]/30 shadow-[0_0_20px_rgba(190,126,199,0.15)] ring-1 ring-[#BE7EC7]/20";
        }
    };

    // Helper Function สำหรับกำหนดสีจุด Indicator ให้เหมือนไฟ LED
    const getDotColor = (status, isActive) => {
        if (!isActive) return "bg-white/20";
        switch(status?.toUpperCase()) {
            case 'OPEN': return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]";
            case 'PENDING': return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]";
            case 'RESOLVED': return "bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]";
            case 'CLOSED': return "bg-slate-400 shadow-[0_0_8px_rgba(148,163,184,0.8)]";
            default: return "bg-[#BE7EC7] shadow-[0_0_8px_rgba(190,126,199,0.8)]";
        }
    };

    return (
        <div
            className="relative w-[320px] max-h-[85vh] bg-[#1a1423] border border-[#BE7EC7]/15 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.5)] p-6 flex flex-col self-start overflow-hidden shrink-0" 
            onClick={(e) => e.stopPropagation()}
        >
            {/* เส้นแสงตกแต่งด้านบน (Top Accent Line) */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#BE7EC7]/50 to-transparent"></div>

            {/* Header */}
            <div className="flex justify-between items-center mb-6 shrink-0 relative z-10">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 text-xl font-bold tracking-wide">
                    Change Status
                </h2>
                <button 
                    onClick={onClose} 
                    className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-red-500/10 text-white/50 hover:text-red-400 transition-all duration-300 border border-transparent hover:border-red-500/20"
                >
                    <X size={16} />
                </button>
            </div>

            {/* Status List */}
            <div className="flex flex-col gap-3 mb-6 overflow-y-auto custom-scrollbar relative z-10 px-1 pb-1">
                {availableStatus?.map((status) => {
                    const isActive = currentTargets && currentTargets.includes(status);
                    
                    return (
                        <button
                            key={status}
                            onClick={() => onToggleStatus(status)} 
                            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300 border ${getStatusStyles(status, isActive)}`}
                        >
                            <div className="flex items-center gap-3.5">
                                {/* Status Dot Indicator (LED Style) */}
                                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                                    {isActive && (
                                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${getDotColor(status, isActive)}`}></span>
                                    )}
                                    <span className={`relative inline-flex rounded-full h-2 w-2 transition-colors duration-300 ${getDotColor(status, isActive)}`}></span>
                                </span>
                                
                                <span className="uppercase tracking-widest text-[11px] font-bold">{status}</span>
                            </div>
                            
                            {/* Check Icon */}
                            <div className={`transition-all duration-300 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                <Check size={16} strokeWidth={3} />
                            </div>
                        </button>
                    );
                })}
            </div>

            {/* Done Button */}
            <button
                onClick={onClose}
                className="relative group w-full mt-auto shrink-0 bg-white/[0.03] hover:bg-[#BE7EC7]/10 text-white/60 hover:text-white border border-white/10 hover:border-[#BE7EC7]/40 font-semibold py-3 rounded-2xl transition-all duration-300 overflow-hidden"
            >
                <span className="relative z-10 tracking-wide">Done</span>
                {/* แสงพื้นหลังโผล่ขึ้นมาตอน Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#BE7EC7]/0 via-[#BE7EC7]/10 to-[#BE7EC7]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
        </div>
    );
}