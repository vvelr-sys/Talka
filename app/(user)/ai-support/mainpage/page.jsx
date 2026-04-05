"use client";
import React from "react";
import {
  SmilePlus,
  BookOpenText,
  MessageCircle,
  Users,
  Database,
  Play,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function AiSupport({ onNext }) {
  const features = [
    {
      icon: MessageCircle,
      title: "24/7 Response",
      desc: "Replies to messages instantly around the clock.",
      color: "border-blue-500/50",
      shadow: "shadow-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Database,
      title: "Auto-Training",
      desc: "Lifecycle stages are automatically updated.",
      color: "border-[#BE7EC7]/50",
      shadow: "shadow-[#BE7EC7]/20",
      iconColor: "text-[#BE7EC7]",
    },
    {
      icon: Users,
      title: "Human Handoff",
      desc: "Smart routing to human agents and teams.",
      color: "border-emerald-500/50",
      shadow: "shadow-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ];

  return (
    <div className="w-full h-[95vh] p-4 lg:p-8 text-white">
      <div className="bg-[#161223] border border-white/[0.05] rounded-[3.5rem] shadow-2xl h-full flex flex-col relative overflow-hidden">
        
        {/* Ambient Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#BE7EC7]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full" />

        {/* 1. Header Navigation */}
        <nav className="flex justify-between items-center px-12 py-8 relative z-20">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 bg-[#BE7EC7] rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12">
              <SmilePlus size={24} />
            </div>
            <span className="font-black text-sm uppercase tracking-[0.3em] opacity-80">Agent</span>
          </div>
          
          <button className="group flex items-center gap-2 text-white/30 hover:text-white transition-all font-bold text-xs uppercase tracking-widest">
            <BookOpenText size={16} className="group-hover:text-[#BE7EC7]" />
            <span>Docs</span>
          </button>
        </nav>

        {/* 2. Hero Content Area */}
        <div className="flex-1 flex flex-col items-center px-16 relative z-10 overflow-y-auto custom-scrollbar pb-12">
          
          {/* Headline Section */}
          <div className="max-w-4xl text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full mb-6">
              <Sparkles size={14} className="text-[#BE7EC7]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#BE7EC7]">Intelligence v3.0</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6">
              Empower your team with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 font-black">
                Autonomous AI
              </span>
            </h1>

            <button
              onClick={onNext}
              className="group relative px-10 py-4 rounded-2xl bg-[#BE7EC7] text-white font-black text-xs uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#BE7EC7]/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started Now <ArrowRight size={18} />
              </span>
            </button>
          </div>

          {/* 3. Feature Cards: "The Highlight Section" */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-4">
            {features.map((item, i) => (
              <div 
                key={i} 
                className={`group relative flex flex-col items-center p-8 rounded-[2.5rem] bg-white/[0.02] border ${item.color} shadow-2xl ${item.shadow} transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.05]`}
              >
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${item.iconColor} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={32} />
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 text-center leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity blur-2xl -z-10 bg-gradient-to-br from-transparent via-white/5 to-transparent`} />
              </div>
            ))}
          </div>

        </div>

        {/* 4. Footer Decor */}
        <div className="px-16 py-8 opacity-20 flex justify-between items-center shrink-0">
          <span className="text-[9px] font-bold tracking-[0.5em] uppercase">Private Alpha Access</span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]" />
            <span className="text-[9px] font-bold tracking-[0.5em] uppercase">System Ready</span>
          </div>
        </div>

      </div>
    </div>
  );
}