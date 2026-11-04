import { BrandMark } from "@/components/brand-mark";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Movies", href: "/movies" },
  { label: "Series", href: "/series" },
  { label: "Languages", href: "/languages" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandMark />
        <nav className="main-nav" aria-label="Main navigation">
          {navigation.map((item, index) => (
            <a className={index === 0 ? "nav-link is-active" : "nav-link"} href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="search-trigger" href="/search" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></svg>
            <span>Search</span>
          </a>
          <a className="sign-in-link" href="/sign-in">Sign in</a>
        </div>
      </div>
    </header>
  );
}
