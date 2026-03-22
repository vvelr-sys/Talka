"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"; 
import { Lock, ShieldCheck, Eye, EyeOff, KeyRound, CheckCircle2, ArrowRight, Chrome } from "lucide-react"; 

export default function ChangePasswordPage() {
    const { data: session } = useSession(); 
    
    const [currentPass, setCurrentPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirm, setConfirm] = useState("");

    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const isGoogleUser = session?.user?.isGoogle;

    const handleUpdate = async (e) => {
        e.preventDefault();
        
        if (!currentPass || !newPass || !confirm) {
            alert("Please fill in all fields.");
            return;
        }

        if (newPass !== confirm) {
            alert("New password and confirm password do not match.");
            return;
        }

        if (newPass.length < 8) {
            alert("New password must be at least 8 characters long.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/users/change-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    currentPassword: currentPass,
                    newPassword: newPass
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to update password");
            }

            alert("Password updated successfully!");
            setCurrentPass("");
            setNewPass("");
            setConfirm("");

        } catch (error) {
            console.error("Password update error:", error);
            alert(error.message || "An error occurred while updating the password.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="text-white flex items-center justify-center p-4 relative overflow-hidden">
            <div className="w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
                
                {/* Left Column */}
                <div className="md:w-1/3 bg-black/20 p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                    <div>
                        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                            <ShieldCheck className="text-white w-8 h-8" />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Secure Your Account</h2>
                        <p className="text-white/50 text-sm mb-8 leading-relaxed">
                            To keep your account safe, we recommend using a strong password that you haven't used elsewhere.
                        </p>
                        <div className="space-y-4">
                            <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider">Password Requirements</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm text-white/70">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> At least 8 characters
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white/70">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Includes a number
                                </li>
                                <li className="flex items-center gap-3 text-sm text-white/70">
                                    <CheckCircle2 size={16} className="text-emerald-400" /> Includes a symbol (!@#$)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form หรือ Google Warning */}
                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                    
                    {isGoogleUser ? (
                        <div className="text-center flex flex-col items-center justify-center py-10">
                            <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-xl">
                                <Chrome size={32} className="text-white/80" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">Google Account Linked</h2>
                            <p className="text-white/50 max-w-md mx-auto mb-8">
                                บัญชีนี้เชื่อมต่อผ่านระบบของ <b>Google</b> 
                                คุณไม่สามารถเปลี่ยนรหัสผ่านจากที่นี่ได้ หากต้องการจัดการความปลอดภัย กรุณาตั้งค่าผ่าน Google Account ของคุณ
                            </p>
                            <button 
                                onClick={() => router.back()}
                                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white font-medium transition-all"
                            >
                                กลับไปหน้าก่อนหน้า
                            </button>
                        </div>
                    ) : (

                        <>
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-white/60">
                                    Change Password
                                </h1>
                                <p className="text-white/40 text-sm mt-1">Please enter your current password to set a new one.</p>
                            </div>

                            <form onSubmit={handleUpdate} className="space-y-6">
                                {/* Current Password */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1">Current Password</label>
                                    <div className="relative group">
                                        <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-emerald-400 transition-colors" size={18} />
                                        <input
                                            type={showCurrent ? "text" : "password"}
                                            value={currentPass}
                                            onChange={(e) => setCurrentPass(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full rounded-xl pl-12 pr-12 py-3 bg-white/5 text-white placeholder-white/20 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                                        />
                                        <button type="button" onClick={() => setShowCurrent(!showCurrent)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors">
                                            {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <hr className="border-white/5 my-2" />

                                {/* New Password */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1">New Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-emerald-400 transition-colors" size={18} />
                                        <input
                                            type={showNew ? "text" : "password"}
                                            value={newPass}
                                            onChange={(e) => setNewPass(e.target.value)}
                                            placeholder="Enter new password"
                                            className="w-full rounded-xl pl-12 pr-12 py-3 bg-white/5 text-white placeholder-white/20 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                                        />
                                        <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors">
                                            {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1">Confirm New Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-emerald-400 transition-colors" size={18} />
                                        <input
                                            type={showConfirm ? "text" : "password"}
                                            value={confirm}
                                            onChange={(e) => setConfirm(e.target.value)}
                                            placeholder="Re-enter new password"
                                            className="w-full rounded-xl pl-12 pr-12 py-3 bg-white/5 text-white placeholder-white/20 border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none transition-all"
                                        />
                                        <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors">
                                            {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="pt-6 border-t border-white/5 flex items-center justify-end gap-4">
                                    <button type="button" onClick={() => router.back()} className="text-sm text-white/50 hover:text-white transition-colors px-4 py-2">
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className={`flex items-center gap-2 rounded-xl px-8 py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {isLoading ? "Updating..." : "Update Password"}
                                        {!isLoading && <ArrowRight size={18} />}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}