export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  author: {
    name: string;
    twitter: string;
    github: string;
  };
  links: {
    github: string;
  };
  navigation: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "NextVita",
  description: "A modern, performant web application base built with Next.js",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nextvita.com",
  ogImage: "/og-image.png",
  author: {
    name: "NextVita Team",
    twitter: "@nextvita",
    github: "nextvita"
  },
  links: {
    github: "https://github.com/shivammodiin/nextvita"
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "GitHub", href: "https://github.com/shivammodiin/nextvita", external: true },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]
};