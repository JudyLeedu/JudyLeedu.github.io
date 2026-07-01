# Judy Lee - Personal Website Design System

This document outlines the core design principles and technical implementation details for Judy's personal website. It serves as a "single source of truth" for future iterations.

## 1. Core Principles
- **Role Persona**: Senior Product Manager (Tencent -> Bytedance).
- **Vibe**: Minimalist, Premium, Restrained, Data-driven.
- **Rule of Thumb**: "Show, don't tell." Use physical metaphors (folders, blueprints) rather than abstract UI elements.

## 2. Typography System
We use a 3-tier typography system to maintain visual hierarchy.

### 2.1 Display & Headings (`font-heading`)
- **Font**: `Bricolage Grotesque`
- **Characteristics**: Bold, tight tracking (`tracking-tight`), leading optimized (`leading-[1.1]` to `leading-[1.2]`).
- **Usage**: Hero Name (46px), Modal Titles (24-28px), Article H1/H2.

### 2.2 Body & Paragraphs (`font-sans`)
- **Font**: `Hanken Grotesk`
- **Characteristics**: Highly readable, balanced x-height.
- **Usage**: 
  - Standard Body: `14px`, `leading-[1.6]`, Color `#555555`.
  - Principle Cards: `14px` for descriptions.
  - Subtitles: `15px` for brief introductions.

### 2.3 Data & Meta (`font-mono`)
- **Font**: `JetBrains Mono`
- **Characteristics**: Monospaced, highly structured.
- **Usage**: Dates, Tags, Numbers (e.g., "01", "02"), Code blocks. Size usually `10px` or `12px`.

## 3. MDX / Prose Styling Rules
All Markdown content rendered in the Modal uses a strictly controlled Tailwind Typography (`prose`) configuration. Do NOT override these locally in `.mdx` files.

- **Paragraphs (`p`)**: 14px, #555555, line-height 1.6.
- **Headings (Gestalt Proximity)**: 
  - `h2`: 18px, `mt-6`, `mb-3` (Top margin must always be larger than bottom margin).
  - `h3`: 15px, `mt-5`, `mb-2`.
- **Blockquotes**: Left gray border (`border-l-4 border-slate-200`), italic, gray text (`text-slate-500`). No colored backgrounds.

## 4. Animation & Physics (Motion)
We avoid linear CSS transitions for primary interactions.

- **The "Spring" Metaphor**: For folder hover effects, use custom cubic-bezier to simulate physical overshoot: `duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]`.
- **Gestures**: Keep rotation angles extremely small (e.g., `4deg` max) to maintain grid alignment.
- **Depth**: When layering items (e.g., Folders), always use `ring-1 ring-white/X` to create a 1px specular highlight on the edge. This prevents visual muddiness.

## 5. Components Metaphor
- **Projects Folder**: Uses "The Hero Blueprint" metaphor. A single, large, clean panel sliding out, containing actual project screenshots with a gloss overlay (`scale-105` to `100` transition).
- **Blogs Folder**: Uses the "Typewriter Letter" metaphor.

## 7. Content Ingestion Workflow (Blog/Project)
When adding new `.mdx` content, the following 5 pieces of information MUST be gathered. If any are missing, the system/agent MUST prompt the user for clarification before generating the file.

1. **Category (类别)**: Determines the icon and thematic tag.
   - 思考 (Thoughts) -> `💡`
   - 随笔 (Essays) -> `☕️`
   - 复盘 (Retrospectives) -> `🚀`
   - 读书笔记 (Reading Notes) -> `📝`
   - *(New categories can be added upon request)*
2. **Title (名称)**: Usually mirrors the Lark/Feishu document title.
3. **Description (描述)**: 1-2 sentences summarizing the core value. If not provided by the user, the agent must auto-summarize it from the document content.
4. **Date (时间)**: Format `YYYY-MM-DD`. If not provided, defaults to the Lark document's last modified date.
5. **Content (内容)**: Sourced from a Lark/Feishu URL.
   - *Media Handling*: Text and standard images are auto-parsed. If unsupported media types (e.g., Videos, Lark Whiteboards, Bitable) are detected, the agent MUST notify the user and request static PNG fallbacks.
EOF; __tr_native_ec=$?; pwd -P >| '/var/folders/8r/v7xm3zh16_g_x8rklgghzf1c0000gn/T/agent-toolhost/jobs/job-a90cc8471b444b4aa0868f430ad16edb/cwd.txt'; exit "$__tr_native_ec"