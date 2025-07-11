import Link from "next/link";
import { siteConfig } from "@/config/site.config";

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  return (
    <ul className={className}>
      {siteConfig.navigation.map((item) => (
        <li key={item.href}>
          {item.external ? (
            <a
              href={item.href}
              aria-label={`${item.label} - External Link`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label} ↗
            </a>
          ) : (
            <Link href={item.href}>{item.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
};