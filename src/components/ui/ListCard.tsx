"use client";

interface ListCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
  iconTextColor: string;
  stats: string[];
  onClick: () => void;
}

export function ListCard({
  title,
  description,
  icon,
  iconBgColor,
  iconTextColor,
  stats,
  onClick,
}: ListCardProps) {
  return (
    <div 
      className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-between cursor-pointer group transition-colors duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#93c5fd]"
      onClick={onClick}
    >
      <div className="flex items-start gap-4 sm:gap-6">
        <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shrink-0 border border-slate-50 ${iconBgColor} ${iconTextColor}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-medium font-sans text-slate-900 text-[15px] mb-0.5">{title}</h3>
          <p className="font-sans text-[#555555] text-[14px]">{description}</p>
          {stats.length > 0 && (
            <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-400 font-mono tracking-tight">
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
      <span className="text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all ml-2 text-lg">
        →
      </span>
    </div>
  );
}