import { ContentRail } from "@/components/content-rail";
import { FeaturedHero } from "@/components/featured-hero";
import { SiteHeader } from "@/components/site-header";
import { featuredTitle, languageTitles, trendingTitles } from "@/data/catalogue";
import { brand } from "@/lib/brand";

export default function HomePage() {
  return (
    <main className="app-shell">
      <SiteHeader />
      <div className="page-content">
        <FeaturedHero item={featuredTitle} />
        <div id="trending">
          <ContentRail eyebrow="WHAT EVERYONE IS WATCHING" title="Trending now" items={trendingTitles} />
        </div>
        <ContentRail eyebrow="FIND YOUR LANGUAGE" title="Stories in your language" items={languageTitles} />
        <section className="language-banner">
          <div>
            <p className="section-eyebrow">MORE THAN JUST SUBTITLES</p>
            <h2>Every story.<br /><span>Your language.</span></h2>
            <p>Explore titles by the audio and subtitle options that are actually available.</p>
          </div>
          <div className="language-pills" aria-label="Example language labels">
            <span>हिन्दी Hindi</span><span>اردو Urdu</span><span>English</span><span>العربية Arabic</span>
          </div>
        </section>
        <footer className="site-footer">
          <div><span className="footer-brand">{brand.name}</span><p>Stories worth staying for.</p></div>
          <span className="footer-note">A product in development · Content availability will depend on distribution rights.</span>
          <span className="copyright">© {new Date().getFullYear()} {brand.shortName}</span>
        </footer>
      </div>
    </main>
  );
}
