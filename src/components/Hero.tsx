import { Eyebrow } from "./Eyebrow";

interface HeroProps {
  eyebrow: string;
  title: React.ReactNode;
  dek?: React.ReactNode;
  /** Set for sub-pages: tighter padding, no strata band, no max-width hero. */
  compact?: boolean;
  /** Set for the home page: layered strata SVG behind the headline. */
  strata?: boolean;
  children?: React.ReactNode;
}

export function Hero({ eyebrow, title, dek, compact = false, strata = false, children }: HeroProps) {
  return (
    <header className="hero" style={compact ? { padding: "56px 0 40px" } : undefined}>
      {strata && (
        <svg className="hero-strata" viewBox="0 0 1200 400" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 400 L0 300 Q300 250 600 290 T1200 270 L1200 400 Z" fill="#1f2b16" />
          <path d="M0 400 L0 340 Q400 310 700 335 T1200 330 L1200 400 Z" fill="#25341a" />
        </svg>
      )}
      <div className={strata ? "wrap hero-max" : "wrap"}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {dek && <p className="dek">{dek}</p>}
        {children}
      </div>
    </header>
  );
}
