import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export type MDXFrontMatter = {
  title: string;
  description: string;
  date: string;
  icon: string;
  color: string;
};

export type MDXPost = {
  slug: string;
  frontmatter: MDXFrontMatter;
  content: string;
};

// Get all slugs for a specific category (e.g., 'blogs' or 'projects')
export function getPostSlugs(category: string) {
  const dir = path.join(contentDirectory, category);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(file => /\.mdx?$/.test(file));
}

// Get a single post by slug and category
export function getPostBySlug(category: string, slug: string): MDXPost {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(contentDirectory, category, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data as MDXFrontMatter,
    content,
  };
}

// Get all posts for a category, sorted by date (newest first / descending)
export function getAllPosts(category: string): MDXPost[] {
  const slugs = getPostSlugs(category);
  const posts = slugs
    .map((slug) => getPostBySlug(category, slug))
    .sort((post1, post2) => {
      const date1 = new Date(post1.frontmatter.date).getTime();
      const date2 = new Date(post2.frontmatter.date).getTime();
      return date2 - date1; // 倒序：时间晚的（数值大）排在前面
    });
  return posts;
}
