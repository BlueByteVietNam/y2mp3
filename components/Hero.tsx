interface HeroData {
  title?: string;
  subtitle?: () => React.ReactNode;
  helperElement?: () => React.ReactNode;
}

interface HeroProps {
  heroData: HeroData;
}

export default function Hero({ heroData }: HeroProps) {
  return (
    <>
      <h1>{heroData?.title}</h1>
      {heroData.subtitle?.()}
      {heroData.helperElement?.() && (
        <>
          <br />
          {heroData.helperElement?.()}
        </>
      )}
    </>
  );
}
