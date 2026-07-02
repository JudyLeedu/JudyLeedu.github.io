"use client";

interface ListCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  date?: string;
  tags?: string[];
  onClick: () => void;
}

export function ListCard({
  title,
  description,
  icon,
  iconBgColor,
  iconTextColor,
  date,
  tags = [],
  onClick,
}: ListCardProps) {
  return (
    <div 
      className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-all duration-300 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:border-blue-500/30"
      onClick={onClick}
    >
      <div className="flex items-start gap-4 min-w-0">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 border border-slate-50 overflow-hidden ${iconBgColor} ${iconTextColor}`}>
          {typeof icon === "string" && (icon.startsWith("/") || icon.startsWith("http")) ? (
            <img src={icon} alt={title} className="w-full h-full object-cover" />
          ) : (
            icon
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-medium font-sans text-slate-900 text-[15px] mb-0.5 truncate">{title}</h3>
          <p className="font-sans text-[#555555] text-[14px] line-clamp-2 sm:line-clamp-none">{description}</p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-2.5">
              {tags.map((tag, index) => (
                <span key={index} className="px-2 py-0.5 text-[11px] text-slate-500 bg-white border border-slate-200 rounded-md whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {date && (
            <div className="mt-2.5 text-[11.5px] text-slate-400 font-mono tracking-tight">
              {date}
            </div>
          )}
        </div>
      </div>
      <span className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-4 text-lg shrink-0">
        →
      </span>
    </div>
  );
}