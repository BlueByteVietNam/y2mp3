import { DefaultSeoProps } from "next-seo";
import { siteConfig } from "./site.config";

const title = "NextVita - Modern Web Application Base";
const description = "A performant, accessible, and SEO-optimized Next.js base template with 100% Lighthouse scores";

export const defaultSEOConfig: DefaultSeoProps = {
  title,
  description,
  titleTemplate: `%s | ${siteConfig.name}`,
  canonical: siteConfig.url,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title,
    description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: siteConfig.author.twitter,
    site: siteConfig.author.twitter,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "author",
      content: siteConfig.author.name,
    },
    {
      name: "theme-color",
      content: "#0066cc",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
  ],
};