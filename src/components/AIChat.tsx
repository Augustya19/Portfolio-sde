// import { motion, AnimatePresence } from 'motion/react';
// import { useState, useRef, useEffect } from 'react';
// import { MessageSquare, X, Send, Sparkles, Cpu, User, Bot, ChevronRight } from 'lucide-react';
// import { GoogleGenAI } from "@google/genai";

// const PORTFOLIO_CONTEXT = `
// You are the AI assistant for Aug, a Software Engineer / Frontend / AI Engineer.
// Aug's expertise:
// - Frontend: React, TypeScript, Next.js, Framer Motion, Tailwind CSS.
// - AI/ML: LLM Integration, Prompt Engineering, Neural Interface Design.
// - Style: Futuristic, premium, high-motion, immersive digital products.
// - Education: Master's in CS (Stanford), Bachelor's in SE (MIT).
// - Interests: Space exploration, Cybernetics, Minimalist design.

// Your goal is to answer questions about Aug's work, skills, and background in a professional yet futuristic and helpful tone.
// Keep responses concise and engaging.
// `;

// export default function AIChat() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
//     { role: 'ai', text: "Neural link established. How can I assist with your inquiry today?" }
//   ]);
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
//     }
//   }, [messages, isTyping]);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMsg = input.trim();
//     setInput('');
//     setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
//     setIsTyping(true);

//     try {
//       const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
//       const response = await ai.models.generateContent({
//         model: "gemini-3-flash-preview",
//         contents: [
//           { role: 'user', parts: [{ text: PORTFOLIO_CONTEXT + "\n\nUser: " + userMsg }] }
//         ],
//       });

//       const aiText = response.text || "I apologize, but my neural link is experiencing interference. Please try again.";
//       setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
//     } catch (error) {
//       console.error("AI Chat Error:", error);
//       setMessages(prev => [...prev, { role: 'ai', text: "System error detected. Connection unstable." }]);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   return (
//     <>
//       {/* Chat Toggle Button */}
//       <motion.button
//         whileHover={{ scale: 1.1, rotate: 5 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsOpen(true)}
//         className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-purple-500/20 group"
//       >
//         <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
//         <MessageSquare size={28} />
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
//             exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
//             className="fixed bottom-8 right-8 z-[100] w-[95%] max-w-[450px] h-[650px] glass-panel rounded-[3rem] border border-white/10 flex flex-col overflow-hidden shadow-2xl bg-[#0d0a0d]"
//           >
//             {/* Header */}
//             <div className="p-8 border-b border-white/10 flex items-center justify-between bg-white/5 backdrop-blur-2xl">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">
//                   <Cpu size={24} className="animate-pulse" />
//                 </div>
//                 <div>
//                   <h3 className="text-sm font-bold text-white tracking-tight">AUG.EXE</h3>
//                   <div className="flex items-center gap-1.5">
//                     <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
//                     <span className="text-[10px] font-mono text-purple-400/60 uppercase tracking-widest">Neural Core v2.5</span>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-3 rounded-xl hover:bg-white/5 text-white/40 hover:text-white transition-all"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Messages */}
//             <div 
//               ref={scrollRef}
//               className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide"
//             >
//               {messages.map((msg, i) => (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   key={i}
//                   className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
//                 >
//                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
//                     msg.role === 'user' ? 'bg-violet-500/20 text-violet-400' : 'bg-purple-500/20 text-purple-400'
//                   }`}>
//                     {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
//                   </div>
//                   <div className={`max-w-[80%] p-5 rounded-3xl text-sm leading-relaxed ${
//                     msg.role === 'user' 
//                       ? 'bg-violet-500/10 text-white border border-violet-500/20 rounded-tr-none' 
//                       : 'bg-white/5 text-white/80 border border-white/10 rounded-tl-none'
//                   }`}>
//                     {msg.text}
//                   </div>
//                 </motion.div>
//               ))}
//               {isTyping && (
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
//                     <Bot size={18} />
//                   </div>
//                   <div className="bg-white/5 p-5 rounded-3xl rounded-tl-none border border-white/10">
//                     <div className="flex gap-1">
//                       <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
//                       <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
//                       <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-purple-400" />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Input */}
//             <div className="p-8 bg-white/5 border-t border-white/10">
//               <div className="relative group">
//                 <input
//                   type="text"
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//                   placeholder="Inquire system..."
//                   className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-purple-500/50 transition-all pr-16"
//                 />
//                 <button
//                   onClick={handleSend}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-purple-500 text-black hover:bg-purple-400 transition-all"
//                 >
//                   <Send size={18} />
//                 </button>
//               </div>
//               <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-mono text-white/20 uppercase tracking-widest">
//                 <Sparkles size={10} />
//                 <span>Powered by Neural Core v2.5</span>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
