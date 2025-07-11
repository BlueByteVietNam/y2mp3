import { ReactNode } from "react";

interface CardProps {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export const Card = ({ 
  title, 
  description, 
  children, 
  footer,
  className 
}: CardProps) => {
  return (
    <article className={className}>
      {title && <header>{typeof title === "string" ? <h3>{title}</h3> : title}</header>}
      {description && <p>{description}</p>}
      {children}
      {footer && <footer>{footer}</footer>}
    </article>
  );
};