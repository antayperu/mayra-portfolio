import { Link } from "react-router-dom";
import { Chip } from "./Chip";

type Props = {
    title: string;
    summary: string;
    tags: string[];
    href: string;
    image: { src: string; alt: string };
};

export function Card({ title, summary, tags, href, image }: Props) {
    return (
        <article className="group relative flex flex-col rounded-[20px] bg-[var(--surface)] border border-[var(--border)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--text-secondary)]/20">
            <div className="aspect-video w-full bg-[var(--surface-raised)] overflow-hidden">
                <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
            </div>

            <div className="flex-1 p-5 sm:p-6 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-3">
                    {tags.map((t) => (
                        <Chip key={t}>{t}</Chip>
                    ))}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {title}
                </h3>
                <p className="mt-2 text-[15px] text-[var(--text-secondary)] leading-relaxed flex-1">
                    {summary}
                </p>

                <div className="mt-5 pt-4 border-t border-[var(--border)]">
                    <Link
                        to={href}
                        className="inline-flex items-center text-sm font-semibold text-[var(--accent)] hover:text-[var(--accent-2)] transition-colors"
                    >
                        Ver caso <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
