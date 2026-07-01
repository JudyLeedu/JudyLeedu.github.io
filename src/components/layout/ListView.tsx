"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

interface ListViewProps {
  title: string;
  subtitle: string;
  backText?: string;
  onBack: () => void;
  children: React.ReactNode;
}

export function ListView({ title, subtitle, backText = "All work", onBack, children }: ListViewProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full pb-20 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <button 
        onClick={onBack} 
        className="flex items-center gap-2 text-[13px] font-bold text-slate-400 hover:text-slate-700 transition-colors mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        {backText}
      </button>

      <header className="mb-8">
        <h1 className="text-[28px] font-bold font-heading text-slate-900 mb-2 tracking-tight">
          {title}
        </h1>
        <p className="text-slate-500 text-[14px] font-medium">
          {subtitle}
        </p>
      </header>

      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}