import { ReactNode, ComponentType } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { DefaultSeo } from "next-seo";
import { defaultSEOConfig } from "@/config/seo.config";

interface LayoutProps {
  children: ReactNode;
  HeroComp?: ComponentType;
}

export const Layout = ({ children, HeroComp }: LayoutProps) => (
  <>
    <DefaultSeo {...defaultSEOConfig} />
    <Header HeroComp={HeroComp} />
    <main>{children}</main>
    <Footer />
  </>
);