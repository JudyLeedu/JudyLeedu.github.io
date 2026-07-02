"use client";

interface FolderProps {
  title: string;
  subtitle: string;
  tabColor: string;
  backColor: string;
  frontColor: string;
  peekContent: React.ReactNode;
  onClick: () => void;
}

export function Folder({
  title,
  subtitle,
  tabColor,
  backColor,
  frontColor,
  peekContent,
  onClick,
}: FolderProps) {
  return (
    <div className="folder-wrapper cursor-pointer group" onClick={onClick}>
      <div className="mac-folder">
        <div className={`mac-folder-tab ${tabColor}`}></div>
        <div className={`mac-folder-back ${backColor}`}></div>
        <div className="folder-peek opacity-90">
          {peekContent}
        </div>
        <div className={`mac-folder-front ${frontColor}`}></div>
      </div>
      {/* 文件夹下方文字说明区域 */}
      <div className="mt-4 flex flex-col gap-1 transition-transform duration-300 group-hover:translate-x-1">
        <span className="font-sans text-[15px] font-medium text-slate-900">
          {title}
        </span>
        <span className="font-sans text-[14px] font-normal text-[#555555]">
          {subtitle}
        </span>
      </div>
    </div>
  );
}