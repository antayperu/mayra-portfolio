import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Button } from "../components/Button";
import { Chip } from "../components/Chip";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { FEATURED, UNIVERSITY_PROJECTS, PROFILE } from "../data/projects";
import { copyToClipboard } from "../utils/copy";
import { useState } from "react";

export function Home() {
    const [copied, setCopied] = useState(false);

    return (
        <>
            <Seo
                title="Mayra Ortega Camacho — Portafolio"
                description="Branding, identidad visual y contenido digital. Portafolio de Mayra Ortega Camacho."
            />

            {/* HERO */}
            <div id="inicio" className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 sm:pt-24 pb-16">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Branding", "Social content", "Retail & customer experience"].map((c) => (
                                <Chip key={c}>{c}</Chip>
                            ))}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-[var(--text)]">
                            Identidad de marca y contenido que se sienten claros, consistentes y confiables.
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                            Soy <span className="text-[var(--text)] font-semibold">Mayra Alejandra Ortega Camacho</span>, estudiante
                            de Comunicación y Marketing (UPC). Creo sistemas visuales y piezas de contenido para que tu marca comunique con orden en redes y puntos de contacto.
                        </p>

                        {/* Trust Indicator */}
                        <p className="mt-4 text-sm font-medium text-[var(--accent)]/90 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]"></span>
                            Experiencia en tienda de conveniencia (Tienda Antay, 2021–2022) apoyando exhibición y promociones.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link to="/proyectos">
                                <Button className="h-12 px-6 text-base shadow-[0_4px_20px_rgba(228,160,1,0.2)]">Ver casos de estudio</Button>
                            </Link>
                            <a href="#contacto">
                                <Button variant="secondary" className="h-12 px-6 text-base">Hablemos</Button>
                            </a>
                        </div>
                    </div>

                    {/* Panel lateral (datos) */}
                    <aside className="lg:col-span-5 relative">
                        <div className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl p-8 w-full backdrop-blur-sm bg-[var(--surface)]/80">
                            <p className="text-sm font-bold text-[var(--text)] uppercase tracking-wider">Disponible para</p>
                            <p className="mt-3 text-[15px] text-[var(--text-secondary)] leading-relaxed">
                                Prácticas · Junior · Freelance — Branding / Contenido digital / Marketing / Comunicación
                            </p>

                            <div className="mt-8 space-y-4 text-sm">
                                <div className="flex justify-between gap-3 border-b border-[var(--border)] pb-3">
                                    <span className="text-[var(--muted)]">Ubicación</span>
                                    <span className="font-medium text-[var(--text)]">{PROFILE.location}</span>
                                </div>
                                <div className="flex justify-between gap-3 border-b border-[var(--border)] pb-3">
                                    <span className="text-[var(--muted)]">Email</span>
                                    <span className="font-medium text-[var(--text)]">{PROFILE.email}</span>
                                </div>
                                <div className="flex justify-between gap-3 pb-1">
                                    <span className="text-[var(--muted)]">Teléfono</span>
                                    <span className="font-medium text-[var(--text)]">{PROFILE.phone}</span>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Button
                                    variant="secondary"
                                    className="flex-1 justify-center border-[var(--border)] hover:border-[var(--accent)]"
                                    onClick={async () => {
                                        const ok = await copyToClipboard(PROFILE.email);
                                        setCopied(ok);
                                        setTimeout(() => setCopied(false), 1600);
                                    }}
                                >
                                    {copied ? "Copiado ✓" : "Copiar email"}
                                </Button>
                                <a href={`mailto:${PROFILE.email}`} className="flex-1">
                                    <Button variant="ghost" className="w-full justify-center">Abrir correo</Button>
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* QUÉ RESUELVO (SERVICIOS) */}
            <Section id="servicios" title="Qué puedo resolver para tu marca" subtitle="Si tu comunicación se siente inconsistente o improvisada, esto es lo que hago para ordenarla.">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        ["Brand clarity", "Definición de identidad visual: logo, paleta y tipografías con reglas simples de uso."],
                        ["Content system", "Creación de plantillas y piezas listas para publicar, enfocadas en redes sociales."],
                        ["Retail & Promos", "Orden visual para comunicar productos y ofertas con claridad en punto de venta."],
                        ["Edición visual", "Ajustes de foto y video que mantienen un look profesional y cohesivo."],
                    ].map(([t, d]) => (
                        <div
                            key={t}
                            className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 hover:translate-y-[-4px] transition-transform duration-300"
                        >
                            <h3 className="font-bold text-lg text-[var(--text)]">{t}</h3>
                            <p className="mt-3 text-[15px] text-[var(--muted)] leading-[1.6]">{d}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm font-medium text-[var(--accent)] tracking-wide uppercase">Menos improvisación, más sistema.</p>
                </div>
            </Section>

            {/* PROYECTOS DESTACADOS */}
            <Section
                id="proyectos"
                title="Proyectos profesionales"
                subtitle="Resultados reales con enfoque en identidad y claridad."
            >
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURED.filter(p => p.category === 'professional').map((p) => (
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
            </Section>

            {/* PROYECTOS UNIVERSITARIOS */}
            <Section
                title="Proyectos universitarios"
                subtitle="Trabajos académicos donde desarrollo identidad visual, lineamientos y aplicaciones."
            >
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {UNIVERSITY_PROJECTS.map((p) => (
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
            </Section>

            {/* SOBRE MÍ */}
            <Section id="sobre-mi" title="Sobre mí" subtitle="Datos reales, enfoque práctico y comunicación clara.">
                <div className="grid gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-7 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6 flex flex-col sm:flex-row gap-6 items-start">
                        {/* Profile Image Injection */}
                        <div className="shrink-0 w-full sm:w-48 aspect-[4/5] sm:aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 border border-[var(--border)] mx-auto sm:mx-0">
                            <img src="/assets/profile.jpg" alt="Mayra Ortega" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <p className="text-[15px] sm:text-base leading-[1.7] text-[var(--muted)]">
                                Me especializo en convertir ideas en una <span className="text-[var(--text)] font-semibold">identidad visual clara y contenido consistente</span>.
                                Mi experiencia en retail me ayuda a crear piezas que no solo se ven bien: comunican con intención y facilitan la decisión del cliente.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-soft p-6">
                        <div className="space-y-4 text-sm leading-[1.7]">
                            <div>
                                <p className="font-semibold">Educación</p>
                                <p className="text-[var(--muted)]">Comunicación y Marketing — UPC (2019–actualidad)</p>
                            </div>
                            <div>
                                <p className="font-semibold">Curso</p>
                                <p className="text-[var(--muted)]">Coderhouse — Marketing Digital: Community Manager & Publicidad (02/2023–05/2023)</p>
                            </div>
                            <div>
                                <p className="font-semibold">Herramientas</p>
                                <p className="text-[var(--muted)]">
                                    Illustrator, InDesign (intermedio), Excel (intermedio), Word/PowerPoint, CapCut, Canva, Meta Business Suite, Google Ads.
                                </p>
                            </div>
                            <div>
                                <p className="font-semibold">Idiomas</p>
                                <p className="text-[var(--muted)]">Español nativo · Inglés avanzado · Chino mandarín básico (en curso)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CONTACTO */}
            <Section id="contacto" title="Conversemos" subtitle="¿Identidad, consistencia o contenido? Cuéntame qué quieres mejorar.">
                <div className="rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-lg p-8 sm:p-10 relative overflow-hidden">
                    {/* Decorative background glow */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[var(--accent)]/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl relative z-10">
                        Cuéntame tu rubro (servicios o retail) y qué quieres mejorar: <span className="text-[var(--text)] font-semibold">identidad, consistencia o contenido.</span>
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 relative z-10">
                        <Button
                            variant="secondary"
                            className="px-6 h-12"
                            onClick={async () => {
                                const ok = await copyToClipboard(PROFILE.email);
                                setCopied(ok);
                                setTimeout(() => setCopied(false), 1600);
                            }}
                        >
                            {copied ? "Email copiado ✓" : "Copiar correo"}
                        </Button>

                        <a href={`mailto:${PROFILE.email}`}>
                            <Button className="px-6 h-12">Enviar email</Button>
                        </a>

                        {/* WhatsApp opcional */}
                        <a
                            href={`https://wa.me/51934855351?text=${encodeURIComponent(
                                "Hola Mayra, vi tu portafolio y me gustaría conversar sobre un proyecto."
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Button variant="ghost" className="h-12">WhatsApp</Button>
                        </a>
                    </div>
                </div>
            </Section>
        </>
    );
}
