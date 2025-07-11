import { siteConfig } from "@/config/site.config";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => (
  <footer className={className}>
    <hr />
    <p>
      Made with ❤ in{" "}
      <a
        href={siteConfig.links.github}
        aria-label={`${siteConfig.name} - GitHub Repository`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {siteConfig.name} ↗
      </a>
    </p>
  </footer>
);