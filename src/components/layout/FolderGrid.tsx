"use client";

import { Folder } from "@/components/ui/Folder";

interface FolderGridProps {
  onOpenFolder: (folderName: string) => void;
}

export function FolderGrid({ onOpenFolder }: FolderGridProps) {
  return (
    <div className="mt-16">
      <h3 className="module-title text-[11px] font-normal text-[#6e6e6e] tracking-[0.13em] mb-4 uppercase">
        Just show it
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-8">
        
        <Folder
          title="Projects"
          subtitle="8 builds"
          tabColor="bg-blue-500"
          backColor="bg-blue-600"
          frontColor="bg-blue-500"
          onClick={() => onOpenFolder("Projects")}
          peekContent={
            <div className="relative w-full h-full">
              {/* Projects 文件夹：单张大尺寸面板 (The Hero Blueprint) */}
              <div className="absolute inset-x-[-5px] bottom-0 h-[130px] bg-white rounded-t-xl transition-all duration-400 origin-bottom
                group-hover:h-[160px] group-hover:-translate-y-4 group-hover:-rotate-1 overflow-hidden shadow-md border border-slate-200">
                
                {/* 真实项目 Demo 图容器 */}
                  <div className="w-full h-full relative group/img bg-[#fafafa] flex items-center justify-center p-6">
                    {/* 使用 Next.js Image 或者直接 img 标签，加上适当的遮罩和过渡 */}
                    <img 
                      src="/play-icon.jpeg" 
                      alt="Project Demo" 
                      className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out
                        scale-[1.02] group-hover:scale-100 drop-shadow-sm mix-blend-darken rounded-xl"
                    />
                  
                  {/* 渐变遮罩：确保底部与白色卡片融合，同时让顶部有一点质感 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500"></div>

                  {/* 悬浮时的轻微光泽 (Gloss effect) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>
              </div>
            </div>
          }
        />

        <Folder
          title="Blogs"
          subtitle="15 essays"
          tabColor="bg-rose-400"
          backColor="bg-rose-500"
          frontColor="bg-rose-400"
          onClick={() => onOpenFolder("Blogs")}
          peekContent={
            <div className="relative w-full h-full">
              {/* Blogs 文件夹：写信动效 */}
              <div className="absolute inset-x-[-5px] bottom-0 h-[130px] bg-[#fdfbf7] rounded-t-xl transition-all duration-400 origin-bottom 
                group-hover:h-[160px] group-hover:-translate-y-4 group-hover:-rotate-1 overflow-hidden shadow-md border border-white/80
                bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]">
                
                {/* 缓缓写信的文字效果 */}
                <div className="relative w-full h-full pl-3 pr-2 py-5 flex flex-col justify-end pb-8 z-10 text-[10px] leading-relaxed whitespace-nowrap">
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-[100ms] mb-1 font-sans font-medium text-amber-900/80 tracking-tight">
                    Dear fellow builders,
                  </p>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-[400ms] mb-1 font-sans font-medium text-amber-900/80 tracking-tight">
                    I document product thoughts
                  </p>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-[700ms] mb-2 font-sans font-medium text-amber-900/80 tracking-tight">
                    Happy to exchange takes.
                  </p>
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-[1000ms] italic font-sans font-medium text-amber-900/50 tracking-tight">
                    - Judy
                  </p>
                </div>
              </div>
            </div>
          }
        />

        <Folder
          title="About Me"
          subtitle="Experience & Edu"
          tabColor="bg-amber-400"
          backColor="bg-amber-500"
          frontColor="bg-amber-400"
          onClick={() => onOpenFolder("About Me")}
          peekContent={
            <div className="relative w-full h-full">
              {/* About Me 文件夹：时间轴 (Timeline) 动效 */}
              <div className="absolute inset-x-[-5px] bottom-0 h-[130px] bg-[#FFF8E7] rounded-t-xl transition-all duration-400 origin-bottom 
                group-hover:h-[160px] group-hover:-translate-y-4 group-hover:rotate-1 overflow-hidden shadow-md border border-white/80">
                {/* 内部时间轴容器 */}
                <div className="w-full h-full pl-7 pr-2 py-5 flex flex-col justify-end pb-8 gap-4 relative">
                  {/* 垂直时间线 */}
                  <div className="absolute left-[32px] top-[40px] bottom-[35px] w-[2px] bg-amber-300/50 rounded-full"></div>
                  
                  {/* 节点 1：腾讯 */}
                  <div className="flex items-center gap-4 relative z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-[#FFF8E7] shadow-sm shrink-0 z-10"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-amber-700/60 tracking-tight">2018-2024</span>
                      <span className="text-[11px] font-sans font-medium text-amber-900/80 leading-none mt-0.5">Tencent</span>
                    </div>
                  </div>

                  {/* 节点 2：字节跳动 */}
                  <div className="flex items-center gap-4 relative z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500 border-2 border-[#FFF8E7] shadow-sm shrink-0 z-10"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono font-bold text-amber-700/60 tracking-tight">2024-Now</span>
                      <span className="text-[11px] font-sans font-medium text-amber-900/80 leading-none mt-0.5">Bytedance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

      </div>
    </div>
  );
}