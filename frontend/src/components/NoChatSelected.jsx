import { MessageSquare } from "lucide-react";
import React from "react";
const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-lg text-center space-y-8 relative z-10">
        {/* Enhanced Icon Display */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            {/* Outer glow ring */}
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-lg scale-110 group-hover:scale-125 transition-transform duration-500"></div>
            
            {/* Main icon container */}
            <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center animate-bounce hover:animate-none group-hover:scale-110 transition-all duration-300 border border-primary/20 shadow-xl">
              <MessageSquare className="w-10 h-10 text-primary drop-shadow-sm" />
            </div>
            
            {/* Floating particles */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary/40 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary/40 rounded-full animate-ping delay-300"></div>
          </div>
        </div>

        {/* Enhanced Welcome Text */}
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">
            Welcome to ChitChat!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto opacity-60"></div>
        </div>

        {/* Enhanced Description */}
        <div className="space-y-6">
          <p className="text-lg text-base-content/70 leading-relaxed animate-fade-in-delay">
            Select a conversation from the sidebar to start chatting with your friends and colleagues
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-base-200/50 hover:bg-base-200/70 transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-primary">💬</span>
              </div>
              <span className="text-sm font-medium text-base-content/80">Real-time Chat</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-base-200/50 hover:bg-base-200/70 transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-secondary">🔒</span>
              </div>
              <span className="text-sm font-medium text-base-content/80">Secure Messages</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-base-200/50 hover:bg-base-200/70 transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-accent">⚡</span>
              </div>
              <span className="text-sm font-medium text-base-content/80">Lightning Fast</span>
            </div>
          </div>

          {/* Call to action hint */}
          <div className="mt-8 p-4 rounded-xl bg-base-200/30 border border-base-300/30">
            <p className="text-sm text-base-content/60 flex items-center justify-center gap-2">
              <span className="animate-pulse">👈</span>
              Choose a conversation to get started
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      
    </div>
  );
};

export default NoChatSelected;
