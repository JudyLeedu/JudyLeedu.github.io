"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MdxImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function MdxImage({ src, alt }: MdxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="my-8 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 cursor-zoom-in relative group"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto object-contain m-0 transition-transform duration-500 group-hover:scale-[1.02]" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-white/90 backdrop-blur text-slate-900 text-[13px] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm font-medium flex items-center gap-1.5 transform group-hover:scale-100 scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/><path d="M11 8v6"/></svg>
            Enlarge
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-md cursor-zoom-out"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 max-w-[95vw] max-h-[95vh] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={src} 
                alt={alt} 
                className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-xl" 
              />
              
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}