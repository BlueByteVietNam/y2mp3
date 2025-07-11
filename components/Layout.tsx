import { ReactNode, ComponentType } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";

interface LayoutProps {
  children: ReactNode;
  HeroComp?: ComponentType;
}

const Layout = ({ children, HeroComp }: LayoutProps) => (
  <>
    <DefaultSeo {...SEO} />
    <Header HeroComp={HeroComp} />
    {children}
    <Footer />
  </>
);

export default Layout;
