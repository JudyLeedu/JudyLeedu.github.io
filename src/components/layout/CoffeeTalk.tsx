import Image from "next/image";

const coffeeTalkItems = [
  { 
    name: "Xiaohongshu", 
    icon: "/icons/xiaohongshu.png", 
    url: "https://www.xiaohongshu.com/user/profile/69b18d96000000003202c898" 
  },
  { 
    name: "Twitter", 
    icon: "/icons/twitter.svg", 
    url: "https://x.com/JudyLeedu" 
  },
];

export function CoffeeTalk() {
  return (
    <div>
      <h2 className="module-title text-[15px] font-normal text-[#6e6e6e] tracking-[0.13em] mb-4 uppercase">
        Coffee Talk
      </h2>
      <div className="flex flex-wrap gap-4">
        {coffeeTalkItems.map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="relative group">
            <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-slate-900 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] cursor-pointer overflow-hidden">
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
                className={`transition-all duration-300 grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 ${item.name === "Xiaohongshu" ? "object-cover rounded-[4px]" : "object-contain"}`}
                unoptimized
              />
            </div>
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-sans font-medium rounded-md opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10 translate-y-1 group-hover:translate-y-0 shadow-lg">
              {item.name}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
