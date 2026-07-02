import Image from "next/image";
import { motion } from "framer-motion";

const stackItems = [
  { name: "Claude", icon: "/icons/claude.svg", isExternal: true },
  { name: "Notion", icon: "/icons/notion.svg", isExternal: true },
  { name: "Figma", icon: "/icons/figma.svg", isExternal: true },
  { name: "Trae", icon: "/trae-logo.png", isExternal: true },
  { name: "GitHub", icon: "/icons/github.svg", isExternal: true },
];

export function Stack() {
  return (
    <div>
      <h3 className="module-title text-[11px] font-normal text-[#6e6e6e] tracking-[0.13em] mb-4 uppercase">
        Stack
      </h3>
      <div className="flex flex-wrap gap-4">
        {stackItems.map((item) => (
          <div key={item.name} className="relative group">
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center transition-all duration-200 group-hover:-translate-y-1 group-hover:border-[#93c5fd] cursor-default overflow-hidden">
              {item.isExternal ? (
                <Image
                  src={item.icon as string}
                  alt={item.name}
                  width={item.name === "Trae" ? 32 : item.name === "Figma" ? 18 : 24}
                  height={item.name === "Trae" ? 32 : item.name === "Figma" ? 18 : 24}
                  className={item.name === "Trae" ? "object-contain rounded-lg" : "object-contain"}
                  unoptimized
                />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center overflow-hidden">
                  <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 14h20v12H10z" fill="#00E57B"/>
                    <path d="M14 18l2 2-2 2-2-2 2-2z" fill="#1A1A1A"/>
                    <path d="M22 18l2 2-2 2-2-2 2-2z" fill="#1A1A1A"/>
                    <path d="M10 26h8v4h-8z" fill="#00E57B"/>
                  </svg>
                </div>
              )}
            </div>
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[11px] font-sans font-medium rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {item.name}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}