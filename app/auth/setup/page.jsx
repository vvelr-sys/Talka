"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Camera, ArrowRight, User } from "lucide-react";

export default function SetupProfilePage() {
  const { data: session, update } = useSession();
  const router = useRouter();
  
  const [username, setUsername] = useState(session?.user?.name || "");
  const [avatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) return alert("รูปใหญ่เกินไป (สูงสุด 2MB)");
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSetup = async (e) => {
    e.preventDefault();
    if (!username.trim()) return alert("กรุณาตั้งชื่อผู้ใช้งาน");
    setIsLoading(true);

    try {
      const res = await fetch("/api/users/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, profile_image: avatar || session?.user?.image }),
      });

if (res.ok) {
        await update({ name: username, is_setup: true }); 
        window.location.href = "/chat/allchat";
      } else {
        const data = await res.json();
        alert("เกิดข้อผิดพลาด: " + (data.message || "ไม่สามารถบันทึกข้อมูลได้"));
      }
    } catch (error) {
      console.error(error);
      alert("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f0f14] text-white">
      <div className="w-[400px] bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-2">ยินดีต้อนรับสู่ Talka 🎉</h2>
        <p className="text-white/50 text-sm mb-6 text-center">มาตั้งค่าโปรไฟล์กันก่อนเริ่มใช้งาน</p>

        <form onSubmit={handleSetup} className="w-full space-y-6 flex flex-col items-center">
          
          {/* อัปโหลดรูปโปรไฟล์ */}
          <div 
            onClick={() => fileInputRef.current.click()}
            className="w-24 h-24 rounded-full border-2 border-dashed border-[#BE7EC7] flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors relative overflow-hidden group"
          >
            {avatar || session?.user?.image ? (
              <img src={avatar || session.user.image} className="w-full h-full object-cover" />
            ) : (
              <Camera size={32} className="text-[#BE7EC7]" />
            )}
            <div className="absolute inset-0 bg-black/50 hidden group-hover:flex items-center justify-center">
               <Camera size={24} className="text-white" />
            </div>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
          </div>

          {/* กรอกชื่อ */}
          <div className="w-full">
            <label className="text-xs text-white/50 ml-2 mb-1 block">ชื่อผู้ใช้งาน (Username)</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="w-full bg-black/20 border border-white/10 rounded-xl py-3 pl-10 pr-4 focus:border-[#BE7EC7] focus:outline-none transition-colors"
                placeholder="ตั้งชื่อของคุณ..."
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#BE7EC7] to-[#8a55b5] py-3 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform flex justify-center items-center gap-2"
          >
            {isLoading ? "กำลังบันทึก..." : "เริ่มต้นใช้งาน"} {!isLoading && <ArrowRight size={18} />}
          </button>
        </form>
      </div>
    </div>
  );
}