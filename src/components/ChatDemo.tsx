import React, { useState, useRef, useEffect } from 'react';
import ChatMessage, { ChatMessageProps } from './ChatMessage';
import ChatInput from './ChatInput';

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageProps[]>([
    {
      role: 'assistant',
      content: "Hello! I'm the RehabInfo Assistant. I can help answer questions about your physiotherapy and rehabilitation. What would you like to know?",
      timestamp: 'Just now'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Pre-defined demo responses
  const demoResponses: Record<string, Omit<ChatMessageProps, 'role'>> = {
    default: {
      content: "This is a demo interface. In the full product, I would provide evidence-based answers to your rehabilitation questions, citing sources from NHS, NICE, and clinical guidelines. Try asking about common topics like 'knee pain exercises' or 'post-surgery recovery'.",
      sources: [
        { title: 'NHS - Physiotherapy', url: 'https://www.nhs.uk/conditions/physiotherapy/' },
        { title: 'NICE Guidelines', url: 'https://www.nice.org.uk/' }
      ]
    },
    'knee': {
      content: "For knee pain and rehabilitation, I recommend: 1) Gentle range-of-motion exercises, 2) Quadriceps strengthening, 3) Low-impact activities like swimming. Always follow your physiotherapist's specific program. If you experience severe pain, swelling, or instability, contact your healthcare provider immediately.",
      sources: [
        { title: 'NHS - Knee Pain', url: 'https://www.nhs.uk/conditions/knee-pain/' },
        { title: 'CSP - Knee Exercises', url: 'https://www.csp.org.uk/' }
      ]
    },
    'back': {
      content: "For back pain management: 1) Maintain gentle activity and avoid prolonged bed rest, 2) Practice good posture, 3) Core strengthening exercises when appropriate. Red flags include severe pain with fever, loss of bowel/bladder control, or progressive weakness - seek immediate medical attention if these occur.",
      sources: [
        { title: 'NHS - Back Pain', url: 'https://www.nhs.uk/conditions/back-pain/' },
        { title: 'NICE - Low Back Pain', url: 'https://www.nice.org.uk/guidance/ng59' }
      ]
    },
    'shoulder': {
      content: "Shoulder rehabilitation typically includes: 1) Pendulum exercises for mobility, 2) Gradual strengthening of rotator cuff muscles, 3) Postural correction. Avoid overhead activities that cause pain. If you have night pain, significant weakness, or limited range of motion, consult your physiotherapist.",
      sources: [
        { title: 'NHS - Shoulder Pain', url: 'https://www.nhs.uk/conditions/shoulder-pain/' },
        { title: 'NICE - Shoulder Conditions', url: 'https://cks.nice.org.uk/topics/shoulder-pain/' }
      ]
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (userMessage: string) => {
    // Add user message
    const newUserMessage: ChatMessageProps = {
      role: 'user',
      content: userMessage,
      timestamp: 'Just now'
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Simulate typing delay
    setIsTyping(true);
    setTimeout(() => {
      // Find matching response
      let response = demoResponses.default;
      const lowerMessage = userMessage.toLowerCase();

      if (lowerMessage.includes('knee')) {
        response = demoResponses.knee;
      } else if (lowerMessage.includes('back')) {
        response = demoResponses.back;
      } else if (lowerMessage.includes('shoulder')) {
        response = demoResponses.shoulder;
      }

      const assistantMessage: ChatMessageProps = {
        role: 'assistant',
        ...response,
        timestamp: 'Just now'
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div
      className="w-full h-[600px] flex flex-col rounded-3xl border backdrop-blur-xl overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(240,246,255,0.55) 100%)',
        borderColor: 'rgba(180,200,230,0.25)',
        boxShadow: '0 8px 24px rgba(30,60,90,0.08)'
      }}
    >
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-sky-100 bg-gradient-to-r from-sky-50 to-blue-50">
        <h3 className="text-lg font-semibold text-slate-800">RehabInfo Assistant Demo</h3>
        <p className="text-xs text-slate-500 mt-1">
          This is a demonstration. Real product coming soon.
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 bg-gradient-to-b from-white/50 to-sky-50/30">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} {...msg} />
        ))}

        {isTyping && (
          <div className="flex gap-3 mb-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
              <div className="w-5 h-5 text-teal-600">💬</div>
            </div>
            <div className="bg-white/80 rounded-2xl px-4 py-3 border border-sky-100 shadow-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-6 py-4 border-t border-sky-100 bg-gradient-to-r from-sky-50 to-blue-50">
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
    </div>
  );
};

export default ChatDemo;
