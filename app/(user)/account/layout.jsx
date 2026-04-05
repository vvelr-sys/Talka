"use client";

import React from "react";
import AccountSidebar from "@/app/components/Layout/AccountSidebar";
import PageWrapper from "@/app/components/Shared/PageWrapper";
import { User, Settings2, ShieldCheck } from "lucide-react";

export default function AccountLayout({ children }) {
    return (
        <div className="w-full h-[95vh] p-4 lg:p-6 ">
            {/* Main Outer Container */}
            <div className="bg-[#161223] border border-white/5 rounded-[2.5rem] shadow-2xl flex flex-col h-full overflow-hidden">
                
                {/* 1. Header Section */}
                <div className="p-8 pb-6 shrink-0">
                    <div className="flex items-center gap-5">
                        {/* Icon Box */}
                        <div className="w-14 h-14 rounded-2xl bg-[#BE7EC7] flex items-center justify-center shadow-[0_0_20px_rgba(190,126,199,0.3)]">
                            <User className="text-white" size={28} />
                        </div>
                        
                        {/* Title & Subtitle */}
                        <div>
                            <h1 className="text-2xl font-bold text-white tracking-tight leading-none">
                                Account Settings
                            </h1>
                            <p className="text-white/30 text-xs mt-2 font-medium">
                                Configure your personal profile, security, and notification preferences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mx-8"></div>

                {/* 2. Main Layout Body */}
                <div className="flex-1 flex overflow-hidden p-6 lg:p-8 gap-8">
                    
                    {/* Sidebar Area */}
                    <aside className="w-64 shrink-0 hidden md:block">
                        <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-4 h-full shadow-sm">
                            <div className="px-4 py-3 mb-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BE7EC7] opacity-80">
                                    Navigation
                                </span>
                            </div>
                            <AccountSidebar />
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="flex-1 flex flex-col overflow-hidden">
                        <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
                            <PageWrapper title="Profile Setting">
                                <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 min-h-full shadow-inner relative overflow-hidden">
                                    {/* Subtle Ambient Glow inside content */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#BE7EC7]/5 blur-[80px] rounded-full pointer-events-none"></div>
                                    
                                    <div className="relative z-10">
                                        {children}
                                    </div>
                                </div>
                            </PageWrapper>
                        </div>
                    </main>
                    
                </div>

                {/* 3. Footer / Status Bar (Optional) */}
                <div className="px-10 py-4 bg-black/10 border-t border-white/5 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-2 text-[9px] font-bold text-white/20 uppercase tracking-widest">
                        <ShieldCheck size={12} className="text-emerald-500/50" />
                        <span>Encrypted Connection Active</span>
                    </div>
                    <div className="text-[9px] font-bold text-white/10 uppercase tracking-[0.3em]">
                        User Management v2.1
                    </div>
                </div>

            </div>
        </div>
    );
}