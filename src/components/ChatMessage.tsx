import React from 'react';
import { Bot, User, ExternalLink } from 'lucide-react';

export interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ title: string; url: string }>;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, sources, timestamp }) => {
  const isUser = role === 'user';

  return (
    <div className={`flex gap-3 mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar */}
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center">
          <Bot className="w-5 h-5 text-teal-400" />
        </div>
      )}

      {/* Message Content */}
      <div className={`max-w-[80%] ${isUser ? 'order-first' : ''}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-teal-500 text-slate-900'
              : 'bg-white/10 text-slate-200 border border-white/10'
          }`}
        >
          <p className="text-sm leading-relaxed">{content}</p>

          {/* Disclaimer for assistant messages */}
          {!isUser && (
            <div className="mt-3 pt-3 border-t border-white/10 text-xs text-slate-400">
              <p className="flex items-start gap-1">
                <span className="text-yellow-400">⚠</span>
                <span>
                  This is educational information only. Always follow your physiotherapist's
                  specific advice and attend scheduled appointments.
                </span>
              </p>
            </div>
          )}

          {/* Sources */}
          {sources && sources.length > 0 && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <p className="text-xs text-slate-400 mb-2 font-semibold">Sources:</p>
              <div className="space-y-1">
                {sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>{source.title}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Timestamp */}
        {timestamp && (
          <p className="text-xs text-slate-500 mt-1 px-2">{timestamp}</p>
        )}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
          <User className="w-5 h-5 text-blue-400" />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
