import Image from "next/image";
import React, { ComponentType } from "react";
import Link from "next/link";

interface HeaderProps {
  HeroComp?: ComponentType;
}

const Header = ({ HeroComp }: HeaderProps) => {
  const [width, setWidth] = React.useState(0);
  if (typeof window !== "undefined") {
    React.useEffect(() => {
      setWidth(window.innerWidth);
    }, [window.innerWidth]);
  }
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/logo.png" alt="img-logo" width="211" height="60" />
        </Link>
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="img-logo-mobile"
            width="60"
            height="60"
          />
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <a
              href="https://github.com/shivammodiin/nextvita"
              aria-label="NextVita-Github"
              target="_blank"
              rel="noopener"
            >
              GitHub ↗
            </a>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {HeroComp && <HeroComp />}
    </header>
  );
};

export default Header;
