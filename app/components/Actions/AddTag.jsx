"use client";
import { X, Check } from "lucide-react"; 
import { useState, useEffect } from "react"; 

export default function AddTag({ onClose, availableTags = [], currentTargets = [], onToggleTag }) {
  
  const [tagsList, setTagsList] = useState(availableTags);
  
  useEffect(() => {
    setTagsList(availableTags);
  }, [availableTags]);

  // 🟢 [BACKEND NOTE]: เปลี่ยนจากการอ่าน localStorage เป็นการดึงข้อมูลจาก API (หากต้องการให้ Component นี้โหลดข้อมูลเอง)
  useEffect(() => {
    const loadLatestTags = async () => {
        try {
            // 🟢 [API CALL]: โค้ดตัวอย่างการยิง API เพื่อดึง Tags ล่าสุด
            // const response = await fetch('/api/tags');
            // const data = await response.json();
            // setTagsList(data);

            // หมายเหตุ: โดยปกติหาก Parent Component มีการดึงข้อมูลที่อัปเดตล่าสุด 
            // และส่งผ่านมาทาง Props `availableTags` อยู่แล้ว Component นี้ก็อาจจะไม่ต้อง Fetch เองซ้ำครับ
        } catch(e) {
            console.error("Error loading tags from API:", e);
        }
    };
    
    // loadLatestTags();

    // 🟢 [BACKEND NOTE]: เดิมทีระบบใช้ window.addEventListener("storage", ...) เพื่อซิงค์ข้อมูลระหว่าง Tab
    // ในระบบที่มี Backend แนะนำให้เปลี่ยนไปใช้ State Management อย่าง React Query / SWR (มีฟีเจอร์ Refetch on Focus)
    // หรือถ้าต้องการ Real-time สดๆ ข้ามเครื่อง ให้ใช้ WebSocket (เช่น Socket.io, Pusher) แทนครับ
  }, []); 


  return (
    <div 
      className="w-[320px] max-h-[85vh] bg-[#1E1B29] border border-[#BE7EC7]/10 rounded-3xl shadow-2xl p-6 flex flex-col self-start overflow-hidden" 
      onClick={(e) => e.stopPropagation()}
    >
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6 shrink-0">
        <h2 className="text-white text-xl font-bold">Add Tag</h2>
        <button 
            onClick={onClose} 
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white/50 hover:text-red-400 transition-all border border-transparent hover:border-white/10"
        >
            <X size={16} />
        </button>
      </div>

      {/* Tags Container */}
      <div className="flex flex-wrap gap-2.5 mb-6 overflow-y-auto custom-scrollbar content-start">
        {tagsList.length === 0 ? ( 
            <div className="flex flex-col items-center justify-center w-full py-8 text-center">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-3">
                    <i className="fa-solid fa-tags text-white/30 text-xl"></i>
                </div>
                <p className="text-white/70 text-sm font-medium">No tags available</p>
                <p className="text-white/40 text-xs mt-1">Create tags in Settings first.</p>
            </div>
        ) : (
            tagsList.map((tag) => {
              const tagName = typeof tag === 'object' ? tag.name : tag;
              const tagColor = typeof tag === 'object' ? tag.color : '#BE7EC7';
              const tagEmoji = typeof tag === 'object' ? tag.emoji : '';

              const safeTargets = Array.isArray(currentTargets) ? currentTargets : [];
              const isActive = safeTargets.includes(tagName);

              return (
                <button
                  key={tagName}
                  onClick={() => onToggleTag(tagName)}
                  className={`rounded-xl px-3.5 py-2 text-sm font-medium transition-all flex items-center gap-2 border 
                    ${isActive 
                        ? 'text-white' 
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border-white/5 hover:border-white/10'
                    }
                  `}
                  style={{
                    backgroundColor: isActive ? tagColor : undefined,
                    borderColor: isActive ? tagColor : undefined,
                    boxShadow: isActive ? `0 4px 14px ${tagColor}40` : undefined // เพิ่มเงาเรืองแสงเบาๆ ตามสีของ Tag
                  }}
                >
                  {tagEmoji && <span className="text-base leading-none">{tagEmoji}</span>}
                  <span>{tagName}</span>
                  {isActive && <Check size={14} strokeWidth={3} />} 
                </button>
              );
            })
        )}
      </div>

      {/* Done Button */}
      <button
        onClick={onClose}
        className="w-full mt-auto shrink-0 bg-[#BE7EC7]/10 hover:bg-[#BE7EC7]/20 text-[#BE7EC7] border border-[#BE7EC7]/20 hover:border-[#BE7EC7]/40 font-semibold py-2.5 rounded-xl transition-all"
      >
        Done
      </button>
    </div>
  );
}