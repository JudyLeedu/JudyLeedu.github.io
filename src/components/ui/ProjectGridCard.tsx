"use client";

import { motion } from "framer-motion";

interface ProjectGridCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  stats: string[];
  isCore?: boolean;
  onClick: () => void;
}

export function ProjectGridCard({
  title,
  description,
  icon,
  iconBgColor,
  iconTextColor,
  stats,
  isCore = false,
  onClick,
}: ProjectGridCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative bg-white border border-slate-200 rounded-2xl p-6 cursor-pointer group flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden ${
        isCore ? "md:col-span-2 md:flex-row md:items-center gap-6" : "col-span-1 gap-4"
      }`}
      onClick={onClick}
    >
      {/* 边框微光效果 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-blue-50/40 group-hover:to-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

      <div className={`flex ${isCore ? "flex-row items-center gap-6" : "flex-col gap-4"} flex-1 z-10`}>
        <div className={`rounded-xl flex items-center justify-center text-xl shrink-0 border border-slate-50 shadow-sm ${iconBgColor} ${iconTextColor} ${isCore ? "w-14 h-14" : "w-12 h-12"}`}>
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className={`font-semibold font-sans text-slate-900 mb-1.5 ${isCore ? "text-lg" : "text-base"}`}>{title}</h3>
          <p className={`font-sans text-[#555555] leading-relaxed ${isCore ? "text-[15px]" : "text-[14px]"}`}>{description}</p>
          
          {stats.length > 0 && (
            <div className="flex items-center gap-2 mt-4 text-[12px] text-slate-400 font-mono tracking-tight">
              {stats.map((stat, index) => (
                <span key={index} className="flex items-center gap-2">
                  <span>{stat}</span>
                  {index < stats.length - 1 && <span>·</span>}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={`z-10 text-slate-300 group-hover:text-blue-500 transition-all duration-300 ${isCore ? "group-hover:translate-x-1" : "self-end group-hover:translate-x-1 mt-4"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </div>
    </motion.div>
  );
}
