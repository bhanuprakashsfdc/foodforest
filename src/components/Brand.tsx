import Link from "next/link";
import { site } from "@/lib/site";

export function Brand() {
  return (
    <Link className="brand" href="/">
      <svg className="mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2C7 6 4 10 4 14a8 8 0 0016 0c0-4-3-8-8-12z" fill="#d9a441" />
        <path d="M12 22V11" stroke="#141d0e" strokeWidth="1.4" />
      </svg>
      {site.name}
    </Link>
  );
}
