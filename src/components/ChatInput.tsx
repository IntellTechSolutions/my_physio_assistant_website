import React, { useState } from 'react';
import { Send } from 'lucide-react';

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  disabled = false,
  placeholder = "Ask a question about your rehabilitation..."
}) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-12 rounded-full bg-white border border-sky-200 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
      />
      <button
        type="submit"
        disabled={disabled || !input.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-teal-500 hover:bg-teal-400 disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center transition duration-200 shadow-md"
      >
        <Send className="w-4 h-4 text-white" />
      </button>
    </form>
  );
};

export default ChatInput;
