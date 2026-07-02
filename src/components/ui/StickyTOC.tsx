"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface StickyTOCProps {
  contentSelector?: string;
}

export function StickyTOC({ contentSelector = ".prose" }: StickyTOCProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Small delay to ensure MDX content is rendered
    const timer = setTimeout(() => {
      const contentEl = document.querySelector(contentSelector);
      if (!contentEl) return;

      const elements = Array.from(contentEl.querySelectorAll("h2, h3"));
      const parsedHeadings = elements.map((el) => ({
        id: el.id,
        text: el.textContent || "",
        level: Number(el.tagName.substring(1)),
      }));

      setHeadings(parsedHeadings);

      // Setup Intersection Observer for active heading
      const scrollContainer = contentEl.closest(".overflow-y-auto") || null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          // Find the intersecting entry
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { 
          root: scrollContainer,
          rootMargin: "0px 0px -80% 0px" 
        } // Adjust this margin to trigger when heading is near the top
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [contentSelector]);

  if (headings.length === 0) return null;

  return (
    <div className="hidden 2xl:block absolute right-full mr-8 top-32 w-56 z-10">
      <div className="sticky top-32">
        <h4 className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-4 pr-3 text-right">
          On this page
        </h4>
        <nav className="flex flex-col relative">
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/20"></div>
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  // The scroll container is the element with overflow-y-auto
                  const target = document.getElementById(heading.id);
                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                  setActiveId(heading.id);
                }}
                className={`
                  relative py-1.5 pl-3 text-[13px] font-sans transition-all duration-300 line-clamp-2 text-right
                  ${heading.level === 3 ? "pr-6" : "pr-3"}
                  ${
                    isActive
                      ? "text-white font-medium"
                      : "text-white/50 hover:text-white/80"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-toc"
                    className="absolute right-0 top-0 bottom-0 w-[2px] bg-white rounded-l"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {heading.text}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}