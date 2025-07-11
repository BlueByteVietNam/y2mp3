import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import { Layout } from "@/components/layout";
import { siteConfig } from "@/config/site.config";
import { getFileBySlug } from "@/lib/mdx";
import Hero from "@/components/Hero";

interface AboutProps {
  mdxSource: MDXRemoteSerializeResult;
  frontMatter: {
    [key: string]: any;
  };
}

export default function About({ mdxSource, frontMatter }: AboutProps) {
  return (
    <Layout
      HeroComp={() => (
        <Hero
          heroData={{ title: "About NextVita Template Next JS Boilerplate" }}
        />
      )}
    >
      <NextSeo
        title="About Us - NextVita"
        description="About Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download."
        canonical={`${siteConfig.url}/about`}
        openGraph={{
          url: `${siteConfig.url}/about`,
          title:
            "About Us - NextVita",
          description:
            "About Google Core Web Vital SEO update ready Next JS template with attractive blue theme for free download.",
        }}
      />
      <section>
        <aside>
          <div>
            <MDXRemote {...mdxSource} />
          </div>
        </aside>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const uses = await getFileBySlug("about", undefined);

  return { props: uses };
}
