import Link from "next/link";
import { footerGroups, site } from "@/lib/site";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            {group.links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div>
          <h4>Plot</h4>
          <p style={{ color: "var(--paper-dim)", fontSize: ".9rem", maxWidth: 260 }}>
            {site.plot}
          </p>
        </div>
        <div className="fine">{site.disclaimer}</div>
      </div>
    </footer>
  );
}
