"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Camera,
  User,
  Mail,
  Save,
  Activity,
  Loader2,
  ChevronDown,
} from "lucide-react";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const [username, setUsername] = useState("");
  const [status, setStatus] = useState("online");
  const [avatar, setAvatar] = useState("");

  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const fileInputRef = useRef(null);

  function getInitials(name) {
    if (!name) return "?";
    const parts = name.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }

  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.floor(
      Math.abs(Math.sin(hash) * 16777215) % 16777215,
    ).toString(16);
    return `#${"0".repeat(6 - color.length) + color}`;
  }

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/users/profile");

        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }

        const data = await response.json();
        const user = data.profile;

        setUsername(user.username || "");
        setEmail(user.email || "");
        setRole(user.role || "USER");
        setStatus(user.online_status?.toLowerCase() || "online");
        setAvatar(user.profile_image || "");
      } catch (error) {
        console.error("Error loading profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("File size too large (Max 2MB)");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setIsSaving(true);

      const payload = {
        username: username.trim(),
        online_status: status.toUpperCase(),
        profile_image: avatar,
      };

      const response = await fetch("/api/users/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      window.dispatchEvent(new Event("user_updated"));
      alert("Profile updated successfully!");
      window.location.reload(); 
    } catch (error) {
      console.error("Error saving profile:", error);
      alert(`Failed to save profile: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center text-white/50 gap-2">
        <Loader2 className="animate-spin" /> Loading Profile...
      </div>
    );
  }

  return (
    <div className="text-white flex items-center justify-center p-4 relative overflow-hidden h-full font-inter">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="w-full max-w-5xl backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row bg-[#1e1e2e]/50 shadow-2xl relative z-10">
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />

        <div className="md:w-1/3 bg-black/20 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full p-1 bg-linear-to-tr from-purple-500 to-pink-500 mb-4 shadow-lg active:scale-95 transition-transform">
              <div className="w-full h-full rounded-full overflow-hidden bg-neutral-800 relative flex items-center justify-center border-4 border-[#1a1f2e]">
                {avatar ? (
                  <img
                    src={avatar}
                    alt="avatar"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center text-5xl font-bold text-white/90"
                    style={{ backgroundColor: stringToColor(username || "?") }}
                  >
                    {getInitials(username)}
                  </div>
                )}

                <div
                  className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-center p-4"
                  onClick={() => fileInputRef.current.click()}
                >
                  <Camera className="w-8 h-8 text-white/80 mb-2" />
                  <span className="text-xs text-white/70 font-medium">
                    Change Photo
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`absolute bottom-6 right-2 w-6 h-6 border-4 border-[#1a1f2e] rounded-full shadow-md transition-colors duration-300
                            ${status === "online" ? "bg-green-500" : status === "away" ? "bg-yellow-500" : "bg-neutral-500"}`}
            ></div>
          </div>

          <h2 className="text-xl font-bold mt-2 text-center truncate w-full">
            {username}
          </h2>
          <p className="text-purple-400 text-xs font-semibold uppercase tracking-widest mb-1 bg-purple-500/10 px-3 py-1 rounded-full mt-2">
            {role}
          </p>
          <p className="text-white/40 text-xs mb-6 truncate w-full text-center">
            {email}
          </p>

          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <Camera size={16} /> Upload New Photo
          </button>
          <p className="text-white/20 text-[10px] mt-3">
            Max size: 2MB (JPG, PNG)
          </p>
        </div>

        <div className="md:w-2/3 p-8 md:p-12 bg-black/5">
          <div className="flex justify-between items-end mb-10 pb-6 border-b border-white/5">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Profile Settings
              </h1>
              <p className="text-white/40 text-sm mt-1">
                Update your personal information and account status.
              </p>
            </div>
            <div className="hidden md:block p-3.5 bg-purple-500/10 rounded-2xl border border-purple-500/20 shadow-inner">
              <User className="text-purple-400" size={24} />
            </div>
          </div>

          <form onSubmit={handleSave} className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1">
                Username / Full Name
              </label>
              <div className="relative group">
                <User
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-purple-400 transition-colors"
                  size={18}
                />
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl pl-12 pr-4 py-3.5 bg-white/5 text-white placeholder-white/20 border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/30 uppercase tracking-wider ml-1">
                Email Address (Read Only)
              </label>
              <div className="relative group opacity-60">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  size={18}
                />
                <input
                  type="email"
                  value={email}
                  readOnly
                  disabled
                  className="w-full rounded-xl pl-12 pr-4 py-3.5 bg-white/5 text-white/50 border border-white/5 cursor-not-allowed outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-white/50 uppercase tracking-wider ml-1">
                Account Status
              </label>
              <div className="relative">
                <Activity
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                  size={18}
                />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full rounded-xl pl-12 pr-10 py-3.5 bg-white/5 text-white border border-white/10 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none appearance-none cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <option value="online" className="bg-[#1e1e2e] py-2">
                    🟢 &nbsp; Online
                  </option>
                  <option value="away" className="bg-[#1e1e2e] py-2">
                    🟡 &nbsp; Away
                  </option>
                  <option value="offline" className="bg-[#1e1e2e] py-2">
                    ⚫ &nbsp; Offline
                  </option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

            <div className="pt-8 mt-4 border-t border-white/5 flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="text-sm font-medium text-white/50 hover:text-white transition-colors px-5 py-2.5 rounded-xl hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="flex items-center gap-2.5 rounded-xl px-10 py-3.5 bg-linear-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save size={18} /> Save Changes
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}