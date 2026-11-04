import type { MediaItem } from "@/data/catalogue";

export function FeaturedHero({ item }: { item: MediaItem }) {
  return (
    <section className={`featured-hero ${item.artwork}`} aria-labelledby="featured-title">
      <div className="featured-art-glow" aria-hidden="true" />
      <div className="featured-content">
        <p className="featured-eyebrow"><span /> EDITOR&apos;S PICK <span className="eyebrow-divider">/</span> FEATURED {item.type.toUpperCase()}</p>
        <h1 id="featured-title">{item.title}</h1>
        <div className="featured-facts">
          <span>{item.year}</span><span>{item.maturity}</span><span>{item.genres.join(" · ")}</span>
        </div>
        <p className="featured-description">{item.description}</p>
        <div className="featured-languages">
          <span className="language-icon">文</span>
          Audio &amp; subtitles: {item.languages.join(", ")}
        </div>
        <div className="featured-actions">
          <a href={`/title/${item.id}`} className="button-primary"><span aria-hidden="true">▶</span> Explore title</a>
          <a href="#trending" className="button-quiet">Discover more <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="featured-index"><span>01</span> / 05</div>
    </section>
  );
}
