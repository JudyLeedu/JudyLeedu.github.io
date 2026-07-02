"use client";

import { motion } from "framer-motion";

interface ProjectGridCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  date?: string;
  tags?: string[];
  isCore?: boolean;
  onClick: () => void;
}

export function ProjectGridCard({
  title,
  description,
  icon,
  iconBgColor,
  iconTextColor,
  date,
  tags = [],
  isCore = false,
  onClick,
}: ProjectGridCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative bg-white border border-transparent hover:border-blue-500/30 rounded-2xl p-6 cursor-pointer group flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] overflow-hidden ${
        isCore ? "md:col-span-2" : "col-span-1"
      }`}
      onClick={onClick}
    >
      {/* 边框微光效果 */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/0 group-hover:via-blue-50/40 group-hover:to-blue-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

      <div className={`flex flex-col sm:flex-row ${isCore ? "gap-6" : "gap-4"} z-10 w-full flex-1`}>
        <div className={`rounded-2xl flex items-center justify-center shrink-0 border border-slate-50 shadow-sm overflow-hidden self-start ${iconBgColor} ${iconTextColor} ${isCore ? "w-16 h-16 sm:w-20 sm:h-20 text-3xl sm:text-4xl" : "w-12 h-12 text-xl"}`}>
          {typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http")) ? (
            <img src={icon} alt={title} className="w-full h-full object-cover" />
          ) : (
            icon
          )}
        </div>
        
        <div className="flex flex-col flex-1 w-full justify-between">
          <div className="mb-6">
            <h3 className={`font-semibold font-sans text-slate-900 mb-1.5 ${isCore ? "text-lg" : "text-base"}`}>{title}</h3>
            <p className={`font-sans text-[#555555] leading-relaxed ${isCore ? "text-[15px]" : "text-[14px]"}`}>{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {tags.map((tag, index) => (
                  <span key={index} className="px-2.5 py-1 text-[11.5px] text-slate-500 bg-white border border-slate-200 rounded-md whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-slate-100/80 flex flex-row items-center justify-between w-full">
            <span className="text-[13px] text-slate-400 font-mono tracking-tight">{date || ""}</span>
            
            <div className="flex items-center gap-1.5 text-blue-600 font-medium transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-[13.5px]">View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
