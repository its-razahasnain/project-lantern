import type { MediaItem } from "@/data/catalogue";

export function MediaCard({ item }: { item: MediaItem }) {
  return (
    <article className="media-card">
      <a className={`poster-art ${item.artwork}`} href={`/title/${item.id}`} aria-label={`View ${item.title}`}>
        <span className="poster-grain" aria-hidden="true" />
        <span className="poster-kicker">{item.type} · {item.year}</span>
        <span className="poster-title">{item.title}</span>
        <span className="poster-bottom">{item.genres[0]}</span>
      </a>
      <div className="media-card-meta">
        <div>
          <h3>{item.title}</h3>
          <p>{item.year} <span>·</span> {item.type}</p>
        </div>
        <span className="maturity-rating">{item.maturity}</span>
      </div>
      <p className="media-languages">{item.languages.join(" · ")}</p>
    </article>
  );
}
