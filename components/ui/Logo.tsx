import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "desktop" | "mobile";
  width?: number;
  height?: number;
}

export const Logo = ({ variant = "desktop", width, height }: LogoProps) => {
  const defaultProps = {
    desktop: { src: "/logo.png", alt: "Logo", width: 211, height: 60 },
    mobile: { src: "/logo2.png", alt: "Mobile Logo", width: 60, height: 60 }
  };

  const props = defaultProps[variant];

  return (
    <Link href="/">
      <Image
        src={props.src}
        alt={props.alt}
        width={width || props.width}
        height={height || props.height}
        priority
      />
    </Link>
  );
};