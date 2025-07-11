import { ReactNode } from "react";

interface HeroProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export const Hero = ({ title, subtitle, children, className }: HeroProps) => {
  return (
    <section className={className}>
      {title && <h1>{title}</h1>}
      {subtitle && (typeof subtitle === "string" ? <p>{subtitle}</p> : subtitle)}
      {children}
    </section>
  );
};