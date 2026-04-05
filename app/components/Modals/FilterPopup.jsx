"use client";
import React, { useState, useEffect } from 'react';
import { SlidersHorizontal, RotateCcw, Check, X } from 'lucide-react';

export default function FilterPopup({ 
    isOpen, 
    onClose, 
    currentFilters, 
    onApplyFilters, 
    AVAILABLE_CHANNELS = [], 
    AVAILABLE_TAGS = [],
    AVAILABLE_STATUSES = [] 
}) {
    const [localFilters, setLocalFilters] = useState(currentFilters);

    useEffect(() => {
        setLocalFilters(currentFilters);
    }, [currentFilters]);

    const handleRadioChange = (filterType, value) => {
        setLocalFilters(prev => ({ ...prev, [filterType]: value }));
    };

    const handleApply = () => {
        onApplyFilters(localFilters);
        onClose();
    };

    const handleClear = () => {
        const clearedFilters = { channel: null, tag: null, status: null };
        setLocalFilters(clearedFilters);
        onApplyFilters(clearedFilters);
        onClose();
    };

    if (!isOpen) return null;

    // Custom Radio Component
    const FilterRadio = ({ group, value, children }) => {
        const isSelected = localFilters[group] === value;
        return (
            <label className="group flex items-center gap-3 cursor-pointer py-1.5 transition-all">
                <div className="relative flex items-center justify-center">
                    <input 
                        type="radio" 
                        name={group} 
                        className="sr-only" // ซ่อน radio จริง
                        checked={isSelected}
                        onChange={() => handleRadioChange(group, value)}
                    />
                    {/* Outer Circle */}
                    <div className={`w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                        isSelected ? 'border-[#BE7EC7] bg-[#BE7EC7]/10' : 'border-white/10 bg-white/5 group-hover:border-white/30'
                    }`} />
                    {/* Inner Dot */}
                    <div className={`absolute w-2 h-2 rounded-full bg-[#BE7EC7] transition-all duration-300 shadow-[0_0_8px_rgba(190,126,199,0.8)] ${
                        isSelected ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                    }`} />
                </div>
                <span className={`text-sm font-medium transition-colors ${
                    isSelected ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                }`}>
                    {children}
                </span>
            </label>
        );
    };

    const SectionLabel = ({ children }) => (
        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BE7EC7] mb-3 opacity-80">
            {children}
        </h4>
    );

    return (
        <div className="absolute z-50 top-full mt-4 right-0 w-80 bg-[#1F192E] border border-white/10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-7 text-white animate-in fade-in zoom-in-95 duration-200 origin-top-right">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <SlidersHorizontal size={18} className="text-[#BE7EC7]" />
                    <h3 className="text-lg font-bold tracking-tight">Filters</h3>
                </div>
                <button onClick={onClose} className="text-white/20 hover:text-white transition-colors">
                    <X size={18} />
                </button>
            </div>
            
            <div className="space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2">
                {/* Channel Filter */}
                <div className="pb-4 border-b border-white/5">
                    <SectionLabel>Channels</SectionLabel>
                    <div className="grid grid-cols-2 gap-x-2">
                        <FilterRadio group="channel" value={null}>All Channels</FilterRadio>
                        {AVAILABLE_CHANNELS.map(channel => (
                            <FilterRadio key={channel} group="channel" value={channel}>{channel}</FilterRadio>
                        ))}
                    </div>
                </div>

                {/* Tags Filter */}
                <div className="pb-4 border-b border-white/5">
                    <SectionLabel>Tags</SectionLabel>
                    <div className="grid grid-cols-2 gap-x-2">
                        <FilterRadio group="tag" value={null}>All Tags</FilterRadio>
                        {AVAILABLE_TAGS.map((tagObj) => (
                            <FilterRadio key={tagObj.name} group="tag" value={tagObj.name}>
                                <span className="mr-1.5 opacity-80">{tagObj.emoji}</span> {tagObj.name}
                            </FilterRadio>
                        ))}
                    </div>
                </div>

                {/* Status Filter */}
                <div className="pb-2">
                    <SectionLabel>Current Status</SectionLabel>
                    <div className="grid grid-cols-2 gap-x-2">
                        <FilterRadio group="status" value={null}>All Status</FilterRadio>
                        {AVAILABLE_STATUSES.map(status => (
                            <FilterRadio key={status} group="status" value={status}>{status}</FilterRadio>
                        ))}
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-8 pt-2">
                <button 
                    onClick={handleClear} 
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white font-bold py-3 rounded-xl border border-white/5 transition-all text-xs uppercase tracking-widest"
                >
                    <RotateCcw size={14} /> Clear
                </button>
                <button 
                    onClick={handleApply} 
                    className="flex-1 flex items-center justify-center gap-2 bg-[#BE7EC7] hover:bg-[#a66bb0] text-white font-bold py-3 rounded-xl shadow-lg shadow-[#BE7EC7]/20 transition-all text-xs uppercase tracking-widest transform active:scale-95"
                >
                    <Check size={14} /> Apply
                </button>
            </div>
        </div>
    );
}