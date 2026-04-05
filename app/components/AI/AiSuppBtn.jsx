"use client";
import { Sparkles, X } from "lucide-react";

export default function AiSuppBtn({ onClick, isOpen }) {
    return (
        <button 
            onClick={onClick}
            // ปรับตำแหน่งเป็น bottom-6 right-6 เพื่อให้ชิดมุมพอดิบพอดี
            className={`absolute bottom-[-15px] right-[-15px] z-50 group flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-500 shadow-lg
                ${isOpen 
                    ? "bg-[#1E1B29] text-white border border-white/10 rotate-90" 
                    : "bg-gradient-to-br from-[#BE7EC7] to-[#8a55b5] text-white border border-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(190,126,199,0.5)]"
                }
            `}
            title="AI Assistant"
        >
            {/* เอฟเฟกต์แสงเรืองรอบปุ่ม (Glow) ตอนที่ปิดอยู่ */}
            {!isOpen && (
                <div className="absolute inset-0 rounded-2xl bg-[#BE7EC7] blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            )}

            <div className="relative z-10">
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Sparkles className="w-6 h-6 animate-pulse" />
                )}
            </div>
        </button>
    );
}