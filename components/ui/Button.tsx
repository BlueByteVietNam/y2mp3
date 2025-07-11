import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = ({ 
  href, 
  external, 
  children, 
  variant = "primary",
  ...props 
}: ButtonProps) => {
  const className = `button button--${variant}`;

  if (href) {
    if (external) {
      return (
        <a 
          href={href} 
          className={className}
          target="_blank" 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};