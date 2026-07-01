import { getAllPosts } from "@/lib/mdx";
import { HomeClient, MDXPostData } from "@/components/HomeClient";
import { serialize } from "next-mdx-remote/serialize";

export default async function Page() {
  const rawProjects = getAllPosts("projects");
  const rawBlogs = getAllPosts("blogs");

  const projects: MDXPostData[] = await Promise.all(
    rawProjects.map(async (post) => ({
      slug: post.slug,
      frontmatter: post.frontmatter,
      mdxSource: await serialize(post.content),
    }))
  );

  const blogs: MDXPostData[] = await Promise.all(
    rawBlogs.map(async (post) => ({
      slug: post.slug,
      frontmatter: post.frontmatter,
      mdxSource: await serialize(post.content),
    }))
  );

  return <HomeClient projects={projects} blogs={blogs} />;
}
