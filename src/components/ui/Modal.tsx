"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, category, children }: ModalProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // 小延时确保 DOM 渲染后触发动画
      requestAnimationFrame(() => setIsAnimating(true));
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
      // 等待动画结束 (300ms) 后再卸载 DOM
      const timer = setTimeout(() => {
        setShouldRender(false);
        document.body.style.overflow = "auto";
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* 极简遮罩层：纯净的半透明黑色 */}
      <div 
        className={`absolute inset-0 bg-slate-900/30 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      
      {/* 侧滑抽屉：纯净的高级白，巨大的留白，顺滑的划出动画 */}
      <div 
        className={`relative w-full sm:w-[600px] lg:w-[720px] h-full bg-white shadow-[-10px_0_40px_rgba(0,0,0,0.08)] flex flex-col transition-transform duration-300 cubic-bezier(0.16, 1, 0.3, 1) ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header区 */}
        <div className="flex-none px-8 sm:px-12 pt-10 pb-6 border-b border-slate-100 bg-white sticky top-0 z-20 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase bg-slate-50 px-2.5 py-1 rounded-sm border border-slate-100">
              {category}
            </span>
            <div className="flex items-center gap-3 text-sm text-slate-500 font-sans">
              {/* Note: In Modal component we don't have date passed yet, using a generic label or omit for now */}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 -mt-2 rounded-full bg-white border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-300 text-slate-400 hover:text-slate-900 shadow-none hover:shadow-sm group"
          >
            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* 顶级排版正文区 */}
        <div className="flex-1 overflow-y-auto px-8 sm:px-12 pb-24 pt-8">
          <h2 className="text-[24px] sm:text-[28px] font-bold font-heading text-slate-900 mb-8 tracking-tight leading-[1.2]">
            {title}
          </h2>
          
          {/* 这里预埋了用于渲染 MDX 的 Typography (Prose) 规则 */}
          <div className="prose prose-slate prose-sm sm:prose-base max-w-none 
            prose-headings:font-heading prose-headings:tracking-tight prose-headings:text-slate-900
            prose-h1:text-[24px] prose-h1:font-bold prose-h1:mt-8 prose-h1:mb-4
            prose-h2:text-[20px] prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-[16px] prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-2
            prose-p:text-[14px] prose-p:leading-[1.7] prose-p:text-[#555555]
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-li:text-[14px] prose-li:text-[#555555]
            prose-blockquote:border-l-4 prose-blockquote:border-slate-200 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-500">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}