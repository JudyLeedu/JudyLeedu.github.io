"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Start with Why, Ship with What",
    desc: "永远先花 70% 的时间搞清楚问题本身，剩下 30% 讨论怎么解决。",
  },
  {
    num: "02",
    title: "Taste Matters",
    desc: "流程保证下限，品味决定上限。好的产品经理心里先有答案，然后用数据去证明。",
  },
  {
    num: "03",
    title: "Learn by Building",
    desc: "不要等理解透彻了再动手。写 10 页调研文档，不如花两天做一个能跑的原型。",
  },
  {
    num: "04",
    title: "AI-Augmented Workflow",
    desc: "AI 是杠杆，不是替代品。它可以帮你探索 100 种可能性，但是最终的决定，永远是人做的。",
  },
];

export function Principles() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div>
      <h3 className="module-title text-[11px] font-normal text-[#6e6e6e] tracking-[0.13em] mb-4 uppercase">
        Principles
      </h3>
      <div className="flex flex-col gap-3 font-sans">
        {principles.map((p, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={p.num}
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
              onClick={() => setExpandedIndex(isExpanded ? null : index)}
              className={`bg-white border rounded-xl p-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-colors duration-200 cursor-pointer ${
                isExpanded ? "border-[#93c5fd]" : "border-slate-200 hover:border-[#93c5fd]"
              }`}
            >
              <div className="text-[15px] font-normal text-[#555555] flex items-center gap-3">
                <span className="font-mono text-[12px] text-klein">{p.num}</span>
                {p.title}
              </div>
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="text-[14px] text-[#555555] font-sans leading-relaxed">
                      {p.desc}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}