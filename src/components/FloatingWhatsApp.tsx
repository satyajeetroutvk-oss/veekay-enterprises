import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, CheckCheck, Clock, ExternalLink } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'agent';
  text: string;
  time: string;
  status?: 'sent' | 'read';
}

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnreadBadge, setHasUnreadBadge] = useState(true);
  const [inputMessage, setInputMessage] = useState(
    "Hello Vee Kay Enterprises, I'm interested in industrial printing machinery. Please share details and pricing."
  );
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm-welcome',
      sender: 'agent',
      text: 'Namaste! Welcome to Vee Kay Enterprises. We are an industrial printer supplier & wholesale distributor operating since 1990 from Kirti Nagar, New Delhi. How can our technical desk assist you today?',
      time: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setHasUnreadBadge(false);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newUserMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: userText,
      time: nowTime,
      status: 'sent',
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate sales auto-reply after 1.2s typing indicator
    setTimeout(() => {
      setIsTyping(false);
      
      // Update user message to "read" (blue ticks)
      setMessages((prev) =>
        prev.map((msg) => (msg.id === newUserMsg.id ? { ...msg, status: 'read' } : msg))
      );

      const autoReply: ChatMessage = {
        id: `a-${Date.now()}`,
        sender: 'agent',
        text: 'Thanks for reaching out! Our sales and engineering desk will respond shortly during working hours, Mon-Sat 11 AM - 7 PM. You can also continue directly on WhatsApp for live quotes.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, autoReply]);
    }, 1300);
  };

  const openDirectWhatsApp = (customText?: string) => {
    const textToSubmit = customText || (messages.length > 1 ? messages[messages.length - 1].text : inputMessage);
    const url = `https://wa.me/919999936706?text=${encodeURIComponent(textToSubmit || "Hello Vee Kay Enterprises, I would like to request technical specifications and pricing.")}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end">
      
      {/* Interactive Chat Panel */}
      {isOpen && (
        <div className="mb-2 sm:mb-3 w-[calc(100vw-24px)] sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[480px] max-h-[calc(100vh-80px)] animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm tracking-tight border border-white/30">
                  VK
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-sm leading-tight">Vee Kay Sales Desk</h3>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Industrial Equipment Delhi</span>
                  <span>·</span>
                  <span className="font-medium">Active</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader Banner */}
          <div className="bg-emerald-50 px-3.5 py-1.5 border-b border-emerald-100/80 flex items-center justify-between text-[11px] text-emerald-900">
            <span className="flex items-center gap-1 font-medium">
              <Clock className="w-3 h-3 text-emerald-700" />
              <span>Mon-Sat 11 AM - 7 PM</span>
            </span>
            <span className="text-emerald-700 font-semibold">+91 99999 36706</span>
          </div>

          {/* Messages Area */}
          <div
            className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#f0f2f5]"
            style={{
              backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                }`}
              >
                <div
                  className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm relative ${
                    msg.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 rounded-bl-none border border-slate-200/70'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  
                  <div
                    className={`flex items-center justify-end gap-1 mt-1 text-[10px] ${
                      msg.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'
                    }`}
                  >
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && (
                      <span
                        className={`transition-all duration-300 ${
                          msg.status === 'read'
                            ? 'text-sky-300 scale-105 inline-block'
                            : 'text-emerald-200 inline-block'
                        }`}
                        title={msg.status === 'read' ? 'Message Read' : 'Delivered'}
                      >
                        <CheckCheck className="w-3.5 h-3.5 inline" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-2xl px-3 py-2 text-slate-500 w-fit text-xs rounded-bl-none shadow-sm animate-pulse">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] text-slate-400 ml-1">Vee Kay Desk is replying...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Action to Switch to Real WhatsApp App */}
          <div className="bg-slate-50 px-3 py-2 border-t border-slate-200 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => openDirectWhatsApp()}
              className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <span>Continue on WhatsApp App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendMessage}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your question or model name..."
              className="flex-1 text-xs px-3 py-2 rounded-full border border-slate-300 bg-slate-50 focus:outline-none focus:border-emerald-500 focus:bg-white text-slate-800"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 sm:gap-2.5 px-3.5 py-2.5 sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer focus:outline-none hover:scale-105"
        aria-label="Chat with Vee Kay Enterprises on WhatsApp"
      >
        {/* Unread Message Ping */}
        {hasUnreadBadge && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] font-bold text-white items-center justify-center">
              1
            </span>
          </span>
        )}

        {/* WhatsApp Icon */}
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 2C6.512 2 2.025 6.488 2.025 12.008c0 2.012.597 3.882 1.626 5.457L2 22l4.673-1.613a9.96 9.96 0 0 0 5.358 1.545c5.518 0 10.006-4.487 10.006-10.008C22.037 6.488 17.55 2 12.031 2zm5.727 14.152c-.241.677-1.399 1.295-1.938 1.378-.49.076-1.127.108-3.267-.783-2.584-1.077-4.225-3.693-4.354-3.864-.128-.172-1.037-1.379-1.037-2.63 0-1.251.657-1.868.892-2.126.236-.257.514-.322.686-.322.171 0 .343.003.493.01.161.008.375-.061.587.45.225.546.772 1.884.839 2.023.067.139.112.302.022.474-.09.172-.136.279-.271.436-.135.158-.284.352-.406.473-.135.134-.277.28-.119.551.157.271.701 1.155 1.503 1.869 1.032.918 1.902 1.202 2.173 1.337.271.135.428.113.585-.067.158-.18.675-.788.855-1.057.18-.27.361-.225.602-.135.241.09 1.529.72 1.791.851.262.13.437.195.502.304.065.109.065.632-.176 1.309z"/>
          </svg>
        </div>

        <span className="text-xs font-semibold tracking-wide whitespace-nowrap">
          WhatsApp Sales Desk
        </span>
      </button>

    </div>
  );
};
