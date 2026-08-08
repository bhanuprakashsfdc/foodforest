import { Eyebrow } from "./Eyebrow";

interface SectionProps {
  eyebrow?: string;
  title?: React.ReactNode;
  /** Lead paragraph rendered between the heading and the body. */
  lead?: React.ReactNode;
  alt?: boolean;
  children?: React.ReactNode;
}

export function Section({ eyebrow, title, lead, alt = false, children }: SectionProps) {
  return (
    <section className={alt ? "alt" : undefined}>
      <div className="wrap">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        {title && <h2>{title}</h2>}
        {lead}
        {children}
      </div>
    </section>
  );
}
