import type { MediaItem } from "@/data/catalogue";
import { MediaCard } from "@/components/media-card";

export function ContentRail({
  title,
  eyebrow,
  items,
}: {
  title: string;
  eyebrow?: string;
  items: MediaItem[];
}) {
  return (
    <section className="content-section" aria-label={title}>
      <div className="rail-heading">
        <div>
          {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        <a href="/browse" className="view-all">View all <span aria-hidden="true">↗</span></a>
      </div>
      <div className="media-rail">
        {items.map((item) => <MediaCard item={item} key={item.id} />)}
      </div>
    </section>
  );
}
