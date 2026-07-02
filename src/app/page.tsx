import { getAllPosts } from "@/lib/mdx";
import { HomeClient, MDXPostData } from "@/components/HomeClient";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";

export default async function Page() {
  const rawProjects = getAllPosts("projects");
  const rawBlogs = getAllPosts("blogs");

  const mdxOptions = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
    },
  };

  const projects: MDXPostData[] = await Promise.all(
    rawProjects.map(async (post) => ({
      slug: post.slug,
      frontmatter: post.frontmatter,
      mdxSource: await serialize(post.content, mdxOptions),
    }))
  );

  const blogs: MDXPostData[] = await Promise.all(
    rawBlogs.map(async (post) => ({
      slug: post.slug,
      frontmatter: post.frontmatter,
      mdxSource: await serialize(post.content, mdxOptions),
    }))
  );

  return <HomeClient projects={projects} blogs={blogs} />;
}
