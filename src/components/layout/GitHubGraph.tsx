"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function GitHubGraph() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="module-title text-[11px] font-normal text-[#6e6e6e] tracking-[0.13em] uppercase">
          GitHub
        </h3>
        <a
          href="https://github.com/JudyLeedu"
          target="_blank"
          rel="noopener noreferrer"
          className="module-title text-[11px] font-normal text-[#6e6e6e] hover:text-slate-900 transition-colors flex items-center gap-1 group"
        >
          View on GitHub <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
      
      <div className="relative w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center" style={{ minHeight: "160px" }}>
        {/* Placeholder before the image is loaded or if it fails */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center font-mono text-xs text-slate-400 font-medium tracking-wide bg-slate-50 z-10">
            {imageError ? (
              <span className="text-slate-500">Waiting for GitHub Action to run...</span>
            ) : (
              <span className="animate-pulse">Loading Contribution Graph...</span>
            )}
          </div>
        )}
        
        {/* Snake Animation SVG */}
        {/* PM NOTE: Waiting for GitHub Actions (generate-snake.yml) to run on 'main' branch to generate JudyLeedu's real data. */}
        <picture>
          <source media="(prefers-color-scheme: dark)" srcSet="https://raw.githubusercontent.com/JudyLeedu/JudyLeedu.github.io/output/github-contribution-grid-snake-dark.svg" />
          <img
            src="https://raw.githubusercontent.com/JudyLeedu/JudyLeedu.github.io/output/github-contribution-grid-snake.svg"
            alt="GitHub Contribution Snake Animation"
            className={`w-full h-auto object-cover transition-opacity duration-700 blue-filter ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        </picture>
      </div>

      <div className="flex items-center gap-2 mt-3 text-xs text-slate-400 font-heading justify-end github-legend tracking-wide">
        Less 
        <div className="w-3 h-3 rounded-sm bg-slate-100"></div>
        <div className="w-3 h-3 rounded-sm bg-blue-100"></div>
        <div className="w-3 h-3 rounded-sm bg-blue-300"></div>
        <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
        <div className="w-3 h-3 rounded-sm bg-blue-700"></div>
        More
      </div>
    </div>
  );
}