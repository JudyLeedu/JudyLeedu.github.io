import Image from "next/image";

const coffeeTalkItems = [
  { 
    name: "Xiaohongshu", 
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYuS3dxfV6I6UxClZUumJMKiU4VSOueSHqs-7OtImJw&s", 
    url: "https://www.xiaohongshu.com/user/profile/69b18d96000000003202c898" 
  },
  { 
    name: "Twitter", 
    icon: "https://cdn.simpleicons.org/x/000000", 
    url: "https://x.com/JudyLeedu" 
  },
];

export function CoffeeTalk() {
  return (
    <div>
      <h3 className="module-title text-[11px] font-normal text-[#6e6e6e] tracking-[0.13em] mb-4 uppercase">
        Coffee Talk
      </h3>
      <div className="flex flex-wrap gap-4">
        {coffeeTalkItems.map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="relative group">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1 group-hover:border-[#93c5fd] cursor-pointer overflow-hidden">
              <Image
                src={item.icon}
                alt={item.name}
                width={24}
                height={24}
                className={item.name === "Xiaohongshu" ? "object-cover rounded-[4px]" : "object-contain"}
                unoptimized
              />
            </div>
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[11px] font-sans font-medium rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {item.name}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
