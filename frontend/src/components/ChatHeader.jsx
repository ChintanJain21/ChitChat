import React from 'react';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import { X } from "lucide-react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  
  if (!selectedUser) return null;
  
  const isOnline = onlineUsers.includes(selectedUser._id);
  
  return (
    <div className="bg-base-100 border-b border-base-300 shadow-sm">
      <div className="px-4 py-3 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Left section - User info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {/* Avatar with online indicator */}
            <div className="avatar relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full ring-2 ring-base-300 transition-all duration-200 hover:ring-primary/50">
                <img 
                  src={selectedUser.profilePic || "/avatar.png"} 
                  alt={selectedUser.fullName || "User"}
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.src = "/avatar.png";
                  }}
                />
              </div>
              {/* Online status indicator */}
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-base-100 transition-colors duration-200 ${
                isOnline ? 'bg-success' : 'bg-base-300'
              }`} />
            </div>
            
            {/* User details */}
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-base-content truncate text-sm sm:text-base">
                {selectedUser.fullName || 'Unknown User'}
              </h3>
              <div className="flex items-center gap-1 mt-0.5">
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 `} />
                <p className={`text-xs transition-colors duration-200 $`}>
                  {isOnline ? "Online" : "Offline"}
                </p>
              </div>
            </div>
          </div>
          
          {/* Right section - Close button */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => setSelectedUser(null)}
              className="btn btn-ghost btn-sm btn-circle hover:bg-error/10 hover:text-error transition-all duration-200 group"
              aria-label="Close chat"
            >
              <X className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default ChatHeader;