"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/layout/Hero";
import { Principles } from "@/components/layout/Principles";
import { Stack } from "@/components/layout/Stack";
import { CoffeeTalk } from "@/components/layout/CoffeeTalk";
import { FolderGrid } from "@/components/layout/FolderGrid";
import { ListView } from "@/components/layout/ListView";
import { ListCard } from "@/components/ui/ListCard";
import { ProjectGridCard } from "@/components/ui/ProjectGridCard";
import { Modal } from "@/components/ui/Modal";
import { Footer } from "@/components/layout/Footer";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export type MDXPostData = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    icon: string;
    color: string;
    tags?: string[];
  };
  mdxSource: MDXRemoteSerializeResult;
};

type ViewState = "home" | "Projects" | "Blogs" | "About Me";

interface HomeClientProps {
  projects: MDXPostData[];
  blogs: MDXPostData[];
}

export function HomeClient({ projects, blogs }: HomeClientProps) {
  const [view, setView] = useState<ViewState>("home");
  const [selectedItem, setSelectedItem] = useState<{title: string, category: string, mdxSource: MDXRemoteSerializeResult | null} | null>(null);

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case "rose": return { bg: "bg-rose-50", text: "text-rose-400" };
      case "red": return { bg: "bg-red-50", text: "text-red-400" };
      case "indigo": return { bg: "bg-indigo-50", text: "text-indigo-500" };
      case "amber": return { bg: "bg-amber-50", text: "text-amber-500" };
      case "blue": return { bg: "bg-blue-50", text: "text-blue-500" };
      case "emerald": return { bg: "bg-emerald-50", text: "text-emerald-500" };
      default: return { bg: "bg-slate-50", text: "text-slate-500" };
    }
  };

  const renderListView = () => {
    if (view === "Projects") {
      return (
        <ListView
          title="Projects"
          subtitle="Tools and things I built end-to-end."
          backText="All projects"
          onBack={() => setView("home")}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => {
              const colors = getIconColorClasses(project.frontmatter.color);
              const isCore = index === 0; // 第一个项目作为核心项目，占两列
              return (
                <ProjectGridCard
                  key={project.slug}
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  icon={project.frontmatter.icon}
                  iconBgColor={colors.bg}
                  iconTextColor={colors.text}
                  date={project.frontmatter.date}
                  tags={project.frontmatter.tags}
                  isCore={isCore}
                  onClick={() => setSelectedItem({ 
                    title: project.frontmatter.title, 
                    category: "Project", 
                    mdxSource: project.mdxSource 
                  })}
                />
              );
            })}
          </div>
        </ListView>
      );
    }

    if (view === "Blogs") {
      return (
        <ListView
          title="Blogs"
          subtitle="Notes on product conception and thinking."
          backText="All blogs"
          onBack={() => setView("home")}
        >
          {blogs.map((blog) => {
            const colors = getIconColorClasses(blog.frontmatter.color);
            return (
              <ListCard
                key={blog.slug}
                title={blog.frontmatter.title}
                description={blog.frontmatter.description}
                icon={blog.frontmatter.icon}
                iconBgColor={colors.bg}
                iconTextColor={colors.text}
                date={blog.frontmatter.date}
                tags={blog.frontmatter.tags}
                onClick={() => setSelectedItem({ 
                  title: blog.frontmatter.title, 
                  category: "Blog", 
                  mdxSource: blog.mdxSource 
                })}
              />
            );
          })}
        </ListView>
      );
    }

    if (view === "About Me") {
      return (
        <div className="w-full pb-20 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button 
            onClick={() => setView("home")} 
            className="inline-flex items-center gap-2 text-[13px] font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-4 py-2 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group shadow-sm mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:-translate-x-1 transition-transform"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            About me
          </button>

          <header className="mb-6">
            <h1 className="text-[28px] font-bold font-heading text-slate-900 tracking-tight">
              Recent Adventures
            </h1>
          </header>

          <div className="space-y-4 mb-12">
            <ListCard
              title="Senior Product Manager"
              description="Bytedance"
              icon={
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZNN8XsaxMPrLzEKGSCfWbuduRO3Z60TK_Mbz1dqT_w&s=10" alt="Bytedance" className="w-6 h-6 object-contain" />
              }
              iconBgColor="bg-white"
              iconTextColor="text-slate-900"
              date="2024-present"
              onClick={() => {}}
            />
            <ListCard
              title="Senior Product Manager"
              description="Tencent"
              icon={
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgK2IAM7y9RpGgIwy9go3BMpF4DGsHHB5LgWibxbDnkg&s=10" alt="Tencent" className="w-6 h-6 object-contain" />
              }
              iconBgColor="bg-white"
              iconTextColor="text-slate-900"
              date="2018-2024"
              onClick={() => {}}
            />
          </div>

          <header className="mb-6">
            <h1 className="text-[28px] font-bold font-heading text-slate-900 tracking-tight">
              Education Background
            </h1>
          </header>

          <div className="space-y-4">
            <ListCard
              title="Design Informatics"
              description="The University of Edinburgh"
              icon={
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUz5Nt8XaLv7TPRxyDE8wi6xIXoG6SyEwoS4XBu7SBZQ&s=10" alt="University of Edinburgh" className="w-6 h-6 object-contain" />
              }
              iconBgColor="bg-white"
              iconTextColor="text-slate-900"
              date="2016-2018"
              onClick={() => {}}
            />
            <ListCard
              title="Computer Science"
              description="South China University of Technology"
              icon={
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFRdStnIIZSvcCWi1DTS6IO1tXvZ6ixwv50udNqJ3FBw&s=10" alt="SCUT" className="w-6 h-6 object-contain" />
              }
              iconBgColor="bg-white"
              iconTextColor="text-slate-900"
              date="2012-2016"
              onClick={() => {}}
            />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <main className="page-shell">
      <AnimatePresence mode="wait">
        {view === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, staggerChildren: 0.1 }}
            className="w-full"
          >
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Hero />
            </motion.div>
            <section className="mb-16 space-y-16">
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
                <Principles />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                <Stack />
              </motion.div>
            </section>
            
            <motion.div className="mb-16" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4 }}>
              <FolderGrid 
                onOpenFolder={(folder) => setView(folder as ViewState)} 
                projectsCount={projects.length}
                blogsCount={blogs.length}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5 }}>
              <CoffeeTalk />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {renderListView()}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.title || ""}
        category={selectedItem?.category || ""}
      >
        {selectedItem?.mdxSource ? (
          <MDXRemote {...selectedItem.mdxSource} />
        ) : (
          <div className="text-slate-500 italic text-sm py-20 text-center border border-dashed border-slate-200 rounded-xl bg-slate-50/50">
            [ No content available ]
          </div>
        )}
      </Modal>
    </main>
  );
}
