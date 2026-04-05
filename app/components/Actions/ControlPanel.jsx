"use client";
import React from "react";

export default function ControlPanel({ 
    onOpenAddTagModal, 
    onOpenContactDetails, 
    onOpenAddNote, 
    onOpenChangeStatus, 
    onOpenActivityLog,
    onOpenSendToBoard 
}) {

    const actionButtons = [
        { id: 'tags', icon: 'fa-tags', title: 'Tags', onClick: onOpenAddTagModal },
        { id: 'profile', icon: 'fa-user', title: 'User Profile', onClick: onOpenContactDetails },
        { id: 'notes', icon: 'fa-note-sticky', title: 'Notes', onClick: onOpenAddNote },
        { id: 'status', icon: 'fa-arrows-rotate', title: 'Change Status', onClick: onOpenChangeStatus },
        { id: 'activity', icon: 'fa-clock-rotate-left', title: 'Activity Log', onClick: onOpenActivityLog },
        { id: 'board', icon: 'fa-file-export', title: 'Send to Board', onClick: onOpenSendToBoard },
    ];

    return (
        // กำหนดความกว้างให้แคบลง (w-14 = 56px) และให้จัดเรียงอยู่ตรงกลางแนวตั้ง (justify-center)
        <div className="w-14 shrink-0 flex flex-col justify-center h-full z-10">
            
            {/* ตัวกล่องแคปซูล */}
            <div className="bg-[#1E1B29] border border-white/5 rounded-full shadow-2xl py-4 flex flex-col items-center gap-2 w-full">
                
                {actionButtons.map((btn) => (
                    <div key={btn.id} className="relative group flex items-center justify-center w-full">
                        
                        {/* ปุ่มกด */}
                        <button 
                            onClick={btn.onClick} 
                            className="w-10 h-10 flex items-center justify-center rounded-full text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200 active:scale-90"
                        >
                            <i className={`fa-solid ${btn.icon} text-[15px]`}></i>
                        </button>

                        {/* Custom Tooltip (สไลด์ออกมาทางซ้าย) */}
                        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#1E1B29] border border-white/10 text-white/90 text-xs font-medium rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-x-2 group-hover:translate-x-0 transition-all duration-300 shadow-xl whitespace-nowrap pointer-events-none flex items-center">
                            {btn.title}
                            
                            {/* ลูกศรชี้ของ Tooltip */}
                            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#1E1B29] border-t border-r border-white/10 rotate-45"></div>
                        </div>
                        
                    </div>
                ))}
                
            </div>
            
        </div>
    );
}