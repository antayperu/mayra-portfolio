import { useMemo, useState } from "react";
import { Seo } from "../components/Seo";
import { Card } from "../components/Card";
import { Chip } from "../components/Chip";
import { projects, TAGS } from "../data/projects";

export function Projects() {
    const [active, setActive] = useState<string | null>(null);

    const list = useMemo(() => {
        if (!active) return projects;
        return projects.filter((p) => p.tags.includes(active));
    }, [active]);

    return (
        <>
            <Seo title="Proyectos — Mayra Ortega" description="Listado de proyectos en formato case study." />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-10">
                <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Proyectos</h1>
                <p className="mt-4 text-[15px] sm:text-base text-[var(--muted)] leading-[1.7] max-w-2xl">
                    Case studies con contexto, entregables y decisiones visuales. Sin métricas inventadas: foco en claridad y ejecución real.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    <Chip active={!active} onClick={() => setActive(null)}>
                        Todos
                    </Chip>
                    {TAGS.map((t) => (
                        <Chip key={t} active={active === t} onClick={() => setActive(t)}>
                            {t}
                        </Chip>
                    ))}
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {list.map((p) => (
                        <Card
                            key={p.slug}
                            title={p.title}
                            summary={p.subtitle}
                            tags={p.tags.slice(0, 3)}
                            href={`/proyectos/${p.slug}`}
                            image={p.cover}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
