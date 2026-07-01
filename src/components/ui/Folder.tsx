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
      <div className="flex flex-col gap-0.5 mt-2">
        <h2 className="font-sans text-[15px] font-semibold text-slate-900">{title}</h2>
        <p className="text-[12px] text-slate-500 font-medium">{subtitle}</p>
      </div>
    </div>
  );
}