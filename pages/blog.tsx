import { useState } from "react";
import { NextSeo } from "next-seo";
import { siteConfig } from "@/config/site.config";
import BlogPost from "@/components/BlogPost";
import { Layout } from "@/components/layout";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Hero from "@/components/Hero";

interface Post {
  title: string;
  publishedAt: string;
  image: string;
  summary: string;
  slug: string;
  [key: string]: any;
}

interface BlogProps {
  posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts
    .sort(
      (a: Post, b: Post) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter: Post) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  const subtitleElement = () => (
    <input
      aria-label="Search blogs"
      type="text"
      onChange={(e) => setSearchValue(e.target.value)}
      value={searchValue}
      autoFocus
      placeholder="Search blogs"
    />
  );

  const heroData = {
    title: "All Blogs",
    subtitle: subtitleElement,
  };

  return (
    <Layout HeroComp={() => <Hero heroData={heroData} />}>
      <NextSeo
        title="Blog Page - NextVita"
        description="Blog for this website are available here. You can find blog using input box provided in the top. "
        canonical={`${siteConfig.url}/blog`}
        openGraph={{
          url: `${siteConfig.url}/blog`,
          title: "Blog Page - NextVita",
          description:
            "Blog for this website are available here. You can find blog using input box provided in the top. ",
        }}
      />
      <section id="blogs">
        {!filteredBlogPosts.length && (
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((frontMatter: Post) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
