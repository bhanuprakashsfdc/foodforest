import Link from "next/link";

interface CtaProps {
  href: string;
  ghost?: boolean;
  children: React.ReactNode;
}

export function Cta({ href, ghost = false, children }: CtaProps) {
  return (
    <Link className={ghost ? "cta ghost" : "cta"} href={href}>
      {children}
    </Link>
  );
}
