"use client";

import React from "react";

interface ProjectGridCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  date?: string;
  tags?: string[];
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
  onClick,
}: ProjectGridCardProps) {
  return (
    <div
      className="bg-white border border-slate-200 cursor-pointer group transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-blue-500/30 rounded-2xl p-6 flex flex-col justify-between overflow-hidden col-span-1 md:col-span-2"
      onClick={onClick}
    >
      <div className="flex flex-row items-start gap-5 sm:gap-6 z-10 w-full flex-1">
        <div className={`rounded-2xl flex items-center justify-center shrink-0 border border-slate-50 shadow-sm overflow-hidden self-start ${iconBgColor} ${iconTextColor} w-16 h-16 sm:w-20 sm:h-20 text-3xl sm:text-4xl`}>
          {typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http")) ? (
            <img src={icon} alt={title} className="w-full h-full object-cover" />
          ) : (
            icon
          )}
        </div>
        
        <div className="flex flex-col flex-1 min-w-0 justify-between h-full">
          <div className="mb-4 sm:mb-6">
            <h3 className="font-semibold font-sans text-slate-900 mb-1.5 truncate text-lg">{title}</h3>
            <p className="font-sans text-[#555555] leading-relaxed line-clamp-2 sm:line-clamp-none text-[15px]">{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-3 sm:mt-4">
                {tags.map((tag, index) => (
                  <span key={index} className="px-2.5 py-1 text-[11px] sm:text-[11.5px] text-slate-500 bg-white border border-slate-200 rounded-md whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="mt-auto flex flex-row items-center justify-between w-full gap-4">
            <span className="text-[12px] sm:text-[13px] text-slate-400 font-mono tracking-tight shrink-0">{date || ""}</span>
            
            <span className="text-slate-300 group-hover:text-blue-500 transition-all duration-300 group-hover:translate-x-1 text-lg shrink-0">
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
