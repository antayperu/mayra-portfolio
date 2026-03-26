import { Link } from "react-router-dom";

type Props = {
    title: string;
    summary: string;
    tags: string[];
    href: string;
    image: {
        src: string;
        alt: string;
        fit?: "cover" | "contain" | "fill";
        bg?: string;
        style?: React.CSSProperties;
    };
};

export function Card({ title, summary, tags, href, image }: Props) {
    return (
        <article className="group relative flex flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface)] transition-all duration-500 hover:border-[var(--accent)]/30 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
            {/* Image */}
            <div
                className="relative aspect-[4/3] w-full overflow-hidden"
                style={{ backgroundColor: image.bg || 'var(--surface-raised)' }}
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    style={image.style}
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                        image.fit === 'contain' ? 'object-contain' : 'object-cover'
                    }`}
                />
                {/* Golden overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge on image */}
                {tags[0] && (
                    <div className="absolute top-4 left-4">
                        <span className="bg-[var(--bg)]/80 backdrop-blur-sm text-[var(--accent)] text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1 border border-[var(--accent)]/30">
                            {tags[0]}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-normal text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300 leading-tight mb-3">
                    {title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed flex-1 font-light">
                    {summary}
                </p>

                <div className="mt-6 pt-5 border-t border-[var(--border)] flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {tags.slice(1, 3).map((t) => (
                            <span key={t} className="text-[10px] text-[var(--muted)] tracking-widest uppercase">
                                {t}
                            </span>
                        ))}
                    </div>
                    <Link
                        to={href}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--accent)] tracking-widest uppercase hover:gap-4 transition-all duration-300"
                        aria-label={`Ver caso de estudio: ${title}`}
                    >
                        Ver caso <span aria-hidden>→</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
