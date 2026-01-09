import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Chip } from "../components/Chip";
import { Button } from "../components/Button";
import { Gallery } from "../components/Gallery";
import { projects, PROFILE } from "../data/projects";

export function ProjectCase() {
    const { slug } = useParams();

    const project = useMemo(() => projects.find((p) => p.slug === slug), [slug]);

    if (!project) {
        return (
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <p className="text-sm text-[var(--muted)]">Proyecto no encontrado.</p>
                <Link to="/proyectos" className="mt-4 inline-flex underline underline-offset-4 font-semibold">
                    Volver a proyectos →
                </Link>
            </div>
        );
    }

    return (
        <>
            <Seo title={`${project.title} — Mayra Ortega`} description={project.subtitle} />

            <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-12 pb-12">
                {/* Breadcrumb */}
                <Link to="/proyectos" className="text-sm text-[var(--muted)] underline underline-offset-4 hover:opacity-80">
                    ← Proyectos
                </Link>

                {/* Project Hero */}
                <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-7">
                        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
                            {project.title}
                        </h1>
                        <p className="mt-4 text-[15px] sm:text-lg text-[var(--muted)] leading-[1.7]">
                            {project.subtitle}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {project.tags.map((t) => (
                                <Chip key={t}>{t}</Chip>
                            ))}
                        </div>

                        <div className="mt-7 flex flex-wrap gap-3">
                            <a href="#piezas">
                                <Button>Ver piezas</Button>
                            </a>
                            <a href={`mailto:${PROFILE.email}`}>
                                <Button variant="secondary">Contactar</Button>
                            </a>
                        </div>
                    </div>

                    <aside className="lg:col-span-5 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6">
                        <p className="text-sm font-semibold">Meta</p>
                        <div className="mt-4 space-y-3 text-sm">
                            <div className="flex justify-between gap-3">
                                <span className="text-[var(--muted)]">Rol</span>
                                <span className="font-medium text-right">{project.role}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <span className="text-[var(--muted)]">Ubicación</span>
                                <span className="font-medium text-right">{project.location}</span>
                            </div>
                            <div className="flex justify-between gap-3">
                                <span className="text-[var(--muted)]">Año</span>
                                <span className="font-medium text-right">{project.year}</span>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Contexto */}
                <section className="mt-12 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 sm:p-8">
                    <h2 className="text-xl font-semibold tracking-tight">Contexto</h2>
                    <p className="mt-3 text-[15px] sm:text-base text-[var(--muted)] leading-[1.7] max-w-3xl">
                        {project.context}
                    </p>

                    {project.slogans?.length ? (
                        <div className="mt-5 rounded-2xl bg-black/5 p-4">
                            <p className="text-sm font-semibold">Slogans</p>
                            <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
                                {project.slogans.map((s) => (
                                    <li key={s}>• {s}</li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </section>

                {/* Objetivo + Rol */}
                <div className="mt-6 grid gap-6 lg:grid-cols-12">
                    <section className="lg:col-span-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 sm:p-8">
                        <h2 className="text-xl font-semibold tracking-tight">Objetivo</h2>
                        <ul className="mt-4 space-y-2 text-[15px] text-[var(--muted)] leading-[1.7]">
                            {project.goals.map((g) => (
                                <li key={g}>• {g}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="lg:col-span-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 sm:p-8">
                        <h2 className="text-xl font-semibold tracking-tight">Mi rol y entregables</h2>
                        <ul className="mt-4 space-y-2 text-[15px] text-[var(--muted)] leading-[1.7]">
                            {project.deliverables.map((d) => (
                                <li key={d}>• {d}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Sistema visual */}
                {project.visualSystem ? (
                    <section className="mt-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 sm:p-8">
                        <h2 className="text-xl font-semibold tracking-tight">Sistema visual</h2>

                        <div className="mt-6 grid gap-6 lg:grid-cols-12">
                            <div className="lg:col-span-5">
                                <p className="text-sm font-semibold">Swatches</p>
                                <div className="mt-3 grid grid-cols-2 gap-3">
                                    {project.visualSystem.palette.map((c) => (
                                        <div key={c.hex} className="rounded-2xl border border-[var(--border)] overflow-hidden bg-white">
                                            <div className="h-12" style={{ background: c.hex }} />
                                            <div className="p-3">
                                                <p className="text-sm font-semibold">{c.name}</p>
                                                <p className="text-xs text-[var(--muted)]">{c.hex}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <p className="text-sm font-semibold">Tipografía</p>
                                <div className="mt-3 rounded-2xl border border-[var(--border)] bg-white p-4">
                                    <p className="text-lg font-semibold">{project.visualSystem.typography.primary}</p>
                                    <p className="mt-2 text-sm text-[var(--muted)] leading-[1.7]">
                                        {project.visualSystem.typography.notes}
                                    </p>
                                </div>

                                <p className="mt-6 text-sm font-semibold">Reglas de uso</p>
                                <ul className="mt-3 space-y-2 text-sm text-[var(--muted)] leading-[1.7]">
                                    {project.visualSystem.rules.map((r) => (
                                        <li key={r}>• {r}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                ) : null}

                {/* Aplicaciones / Galería */}
                <section id="piezas" className="mt-6 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 sm:p-8">
                    <Gallery items={project.gallery} />
                </section>

                {/* Resultado + Aprendizajes */}
                <div className="mt-6 grid gap-6 lg:grid-cols-12">
                    <section className="lg:col-span-7 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 sm:p-8">
                        <h2 className="text-xl font-semibold tracking-tight">Resultado</h2>
                        <p className="mt-3 text-[15px] sm:text-base text-[var(--muted)] leading-[1.7]">
                            {project.result}
                        </p>
                    </section>

                    <section className="lg:col-span-5 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 sm:p-8">
                        <h2 className="text-xl font-semibold tracking-tight">Aprendizajes</h2>
                        <ul className="mt-4 space-y-2 text-[15px] text-[var(--muted)] leading-[1.7]">
                            {project.learnings.map((l) => (
                                <li key={l}>• {l}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* CTA final (Oculto temporalmente) */}
                {false && (
                    <section className="mt-6 rounded-3xl bg-[var(--text)] text-white p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                            ¿Quieres una marca consistente? Conversemos.
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-white/80 leading-[1.7] max-w-2xl">
                            Escríbeme y cuéntame qué necesitas. Te ayudaré a definir un camino claro para tu identidad o contenido.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href={`mailto:${PROFILE.email}`}>
                                <Button className="bg-white text-[var(--text)] hover:opacity-90">Enviar correo</Button>
                            </a>
                            <a
                                href={`https://wa.me/51934855351?text=${encodeURIComponent(
                                    "Hola Mayra, vi tu caso de estudio y me gustaría conversar."
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button variant="ghost" className="text-white hover:bg-white/10">
                                    WhatsApp
                                </Button>
                            </a>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
