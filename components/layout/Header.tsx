import React, { ComponentType } from "react";
import { Logo } from "@/components/ui/Logo";
import { Navigation } from "./Navigation";

interface HeaderProps {
  HeroComp?: ComponentType;
}

export const Header = ({ HeroComp }: HeaderProps) => {
  return (
    <header>
      <nav>
        <Logo variant="desktop" />
        <Logo variant="mobile" />
        <Navigation />
      </nav>
      {HeroComp && <HeroComp />}
    </header>
  );
};