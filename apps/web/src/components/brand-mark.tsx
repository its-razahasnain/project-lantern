import Link from 'next/link';
import { brand } from "@/lib/brand";

export function BrandMark() {
  return (
    <Link className="brand" href="/" aria-label={`${brand.name} home`}>
      <span className="brand-symbol" aria-hidden="true">
        <svg viewBox="0 0 32 32" role="presentation">
          <path d="M8 5.8c0-.9 1-1.5 1.8-1l16 9.2a2.3 2.3 0 0 1 0 4L9.8 27.2c-.8.5-1.8-.1-1.8-1V5.8Z" fill="currentColor" />
          <path d="M8 5.8c0-.9 1-1.5 1.8-1l16 9.2" fill="none" stroke="white" strokeOpacity=".55" strokeWidth="1.2" />
        </svg>
      </span>
      <span className="brand-word">{brand.shortName}<i>.</i></span>
    </Link>
  );
}
