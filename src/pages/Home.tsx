import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Section } from "../components/Section";
import { FEATURED, UNIVERSITY_PROJECTS, PROFILE } from "../data/projects";
import { copyToClipboard } from "../utils/copy";
import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────
   Scroll reveal hook
───────────────────────────────────────── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("visible");
                        io.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}

/* ─────────────────────────────────────────
   Animated counter hook
───────────────────────────────────────── */
function useCounter(target: number, duration = 1400, triggered = false) {
    const [value, setValue] = useState(0);
    useEffect(() => {
        if (!triggered) return;
        let start: number | null = null;
        const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [triggered, target, duration]);
    return value;
}

/* ─────────────────────────────────────────
   Metric card
───────────────────────────────────────── */
function MetricCard({
    value,
    suffix,
    label,
    triggered,
    delay,
}: {
    value: number;
    suffix: string;
    label: string;
    triggered: boolean;
    delay: number;
}) {
    const count = useCounter(value, 1400, triggered);
    return (
        <div
            className="reveal border border-[var(--border)] p-8 sm:p-10 bg-[var(--surface)] flex flex-col gap-3 hover:border-[var(--accent)]/30 transition-colors duration-300"
            style={{ transitionDelay: `${delay}ms` } as React.CSSProperties}
        >
            <p
                className="text-5xl sm:text-6xl text-[var(--accent)] font-normal leading-none"
                style={{ fontFamily: 'var(--font-display)' }}
                aria-label={`${count}${suffix}`}
            >
                {count}{suffix}
            </p>
            <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em] font-medium">
                {label}
            </p>
        </div>
    );
}

/* ─────────────────────────────────────────
   Skill bar
───────────────────────────────────────── */
function SkillBar({ label, pct, delay, triggered }: { label: string; pct: number; delay: number; triggered: boolean }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-baseline">
                <span className="text-sm text-[var(--text-secondary)] font-medium">{label}</span>
                <span className="text-xs text-[var(--accent)] font-semibold">{pct}%</span>
            </div>
            <div className="h-px w-full bg-[var(--border)] relative overflow-hidden">
                <div
                    className="absolute left-0 top-0 h-full bg-[var(--accent)] transition-all duration-1000 ease-out"
                    style={{
                        width: triggered ? `${pct}%` : "0%",
                        transitionDelay: `${delay}ms`,
                    }}
                    role="progressbar"
                    aria-valuenow={triggered ? pct : 0}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={label}
                />
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────
   Home page
───────────────────────────────────────── */
export function Home() {
    const [copied, setCopied] = useState(false);
    const [formState, setFormState] = useState({ name: "", company: "", message: "" });
    const [formSent, setFormSent] = useState(false);

    // Metrics trigger
    const metricsRef = useRef<HTMLDivElement>(null);
    const [metricsTrig, setMetricsTrig] = useState(false);

    // Skills trigger
    const skillsRef = useRef<HTMLDivElement>(null);
    const [skillsTrig, setSkillsTrig] = useState(false);

    useReveal();

    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setMetricsTrig(true); io.disconnect(); } },
            { threshold: 0.2 }
        );
        if (metricsRef.current) io.observe(metricsRef.current);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setSkillsTrig(true); io.disconnect(); } },
            { threshold: 0.2 }
        );
        if (skillsRef.current) io.observe(skillsRef.current);
        return () => io.disconnect();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSent(true);
        setFormState({ name: "", company: "", message: "" });
    };

    const skills = [
        { label: "Branding & Identidad Visual", pct: 90 },
        { label: "Social Media Marketing", pct: 85 },
        { label: "Diseño Editorial", pct: 80 },
        { label: "Google Ads / Meta Ads", pct: 75 },
        { label: "Fotografía de Producto", pct: 70 },
    ];

    const tools = ["Illustrator", "InDesign", "Canva", "CapCut", "Meta Business Suite", "Google Ads", "Excel", "PowerPoint"];

    const testimonials = [
        {
            quote: "Mayra tiene una capacidad única para traducir conceptos abstractos en identidades visuales coherentes.",
            author: "Prof. Carlos Mendoza",
            role: "Docente",
            institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        },
        {
            quote: "Su trabajo en el sistema de contenido fue exactamente lo que necesitábamos para ordenar nuestra comunicación.",
            author: "Cliente",
            role: "Propietario",
            institution: "Tienda Antay, Cajatambo",
        },
        {
            quote: "Atención al detalle impecable. Entrega puntual y resultados que superan expectativas.",
            author: "Colega",
            role: "Compañero de curso",
            institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        },
    ];

    return (
        <>
            <Seo
                title="Mayra Ortega Camacho — Marketing que deja huella"
                description="Marketing estratégico que convierte marcas en referentes. Branding, identidad visual y contenido digital para empresas que quieren destacar."
            />

            {/* Skip-link anchor */}
            <div id="main-content" />

            {/* ══════════════════════════════════════
                HERO
            ══════════════════════════════════════ */}
            <section
                id="inicio"
                className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 sm:px-8 overflow-hidden"
                aria-label="Presentación"
            >
                {/* Background accent glow */}
                <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" aria-hidden />

                <div className="mx-auto w-full max-w-6xl">
                    {/* Eyebrow */}
                    <p className="hero-sub text-xs font-semibold tracking-[0.4em] text-[var(--accent)] uppercase mb-8">
                        Portafolio · Marketing Digital · Lima, Perú
                    </p>

                    {/* Name */}
                    <h1
                        className="hero-name text-[clamp(3.5rem,12vw,11rem)] font-normal leading-[0.92] text-[var(--text)] tracking-tight mb-0"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Mayra
                        <br />
                        <span className="text-[var(--accent)]">Ortega</span>
                    </h1>

                    {/* Decorative line */}
                    <div className="hero-line h-px bg-[var(--accent)] w-full max-w-md mt-8 mb-8" aria-hidden />

                    {/* Tagline */}
                    <p
                        className="hero-tagline text-xl sm:text-2xl lg:text-3xl text-[var(--text-secondary)] font-light max-w-2xl leading-[1.3] mb-6"
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        Marketing estratégico que convierte{" "}
                        <em className="text-[var(--text)] not-italic font-normal">marcas en referentes</em>
                    </p>

                    {/* Sub */}
                    <p className="hero-sub text-sm text-[var(--muted)] max-w-lg leading-relaxed mb-10">
                        Estudiante de Comunicación y Marketing (UPC) · Especialista en branding, identidad visual y contenido digital · Disponible para empresas top
                    </p>

                    {/* CTAs */}
                    <div className="hero-ctas flex flex-wrap gap-4">
                        <Link to="/proyectos">
                            <Button className="h-13 px-8">Ver mi trabajo</Button>
                        </Link>
                        <a href="#contacto">
                            <Button variant="secondary" className="h-13 px-8">Contáctame</Button>
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden>
                    <span className="text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase">Scroll</span>
                    <svg width="1" height="40" viewBox="0 0 1 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="currentColor" strokeOpacity="0.3" className="text-[var(--accent)]" />
                    </svg>
                </div>
            </section>

            {/* ══════════════════════════════════════
                SOBRE MÍ
            ══════════════════════════════════════ */}
            <Section
                id="sobre-mi"
                marker="01 —"
                title="Diseño marcas que comunican con intención"
                subtitle="Porque una marca sin sistema es solo una idea bonita."
            >
                <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                    {/* Photo */}
                    <div className="lg:col-span-4 reveal">
                        <div className="aspect-[3/4] overflow-hidden bg-[var(--surface-raised)] border border-[var(--border)] relative group">
                            <img
                                src="/assets/profile.jpg"
                                alt="Mayra Ortega Camacho — Marketer y diseñadora"
                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 via-transparent to-transparent" aria-hidden />
                            <div className="absolute bottom-5 left-5 right-5">
                                <span className="text-[10px] tracking-[0.3em] text-[var(--text)]/60 uppercase">
                                    Mayra Ortega Camacho · Lima, Perú
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* 3-line story */}
                        <div className="reveal reveal-delay-1 space-y-5">
                            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                                Soy <span className="text-[var(--text)] font-medium">Mayra Alejandra Ortega Camacho</span>, estudiante de Comunicación y Marketing en la UPC, con experiencia real construyendo sistemas visuales para negocios que necesitan comunicar con orden y propósito.
                            </p>
                            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                                Domino el branding, la identidad visual y el contenido digital — desde el concepto hasta la pieza lista para publicar. Me formé en el ecosistema real: retail, redes sociales y campañas que tienen que funcionar, no solo verse bien.
                            </p>
                            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
                                Mi objetivo es claro: trabajar con <span className="text-[var(--text)] font-medium">marcas que importan</span> y aportarles un marketing con estrategia, estética y resultados medibles.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="reveal reveal-delay-2" ref={skillsRef}>
                            <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-6">Habilidades</p>
                            <div className="space-y-5">
                                {skills.map((s, i) => (
                                    <SkillBar
                                        key={s.label}
                                        label={s.label}
                                        pct={s.pct}
                                        delay={i * 100}
                                        triggered={skillsTrig}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div className="reveal reveal-delay-3">
                            <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-4">Herramientas</p>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1.5 text-xs border border-[var(--border)] text-[var(--text-secondary)] tracking-wider uppercase hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-colors duration-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Education */}
                        <div className="reveal reveal-delay-4 grid sm:grid-cols-2 gap-4 pt-4 border-t border-[var(--border)]">
                            <div>
                                <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-2">Educación</p>
                                <p className="text-sm text-[var(--text-secondary)] font-light">Comunicación y Marketing</p>
                                <p className="text-xs text-[var(--muted)] mt-1">UPC · 2019 – actualidad</p>
                            </div>
                            <div>
                                <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-2">Idiomas</p>
                                <p className="text-sm text-[var(--text-secondary)] font-light">Español nativo · Inglés avanzado</p>
                                <p className="text-xs text-[var(--muted)] mt-1">Chino mandarín básico (en curso)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* ══════════════════════════════════════
                PROYECTOS
            ══════════════════════════════════════ */}
            <Section
                id="proyectos"
                marker="02 —"
                title="Trabajo que habla por sí solo"
                subtitle="Casos reales con enfoque en identidad, claridad y resultados."
                className="bg-[var(--surface-warm)]"
            >
                <div className="space-y-16">
                    {/* Professional */}
                    <div>
                        <p className="reveal text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-6">Proyectos Profesionales</p>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {FEATURED.filter((p) => p.category === "professional").map((p, i) => (
                                <div key={p.slug} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                                    <Card
                                        title={p.title}
                                        summary={p.subtitle}
                                        tags={p.tags.slice(0, 3)}
                                        href={`/proyectos/${p.slug}`}
                                        image={p.cover}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* University */}
                    {UNIVERSITY_PROJECTS.length > 0 && (
                        <div>
                            <p className="reveal text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-6">Proyectos Universitarios</p>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {UNIVERSITY_PROJECTS.map((p, i) => (
                                    <div key={p.slug} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}>
                                        <Card
                                            title={p.title}
                                            summary={p.subtitle}
                                            tags={p.tags.slice(0, 3)}
                                            href={`/proyectos/${p.slug}`}
                                            image={p.cover}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="reveal text-center pt-4">
                        <Link to="/proyectos">
                            <Button variant="secondary">Ver todos los proyectos</Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* ══════════════════════════════════════
                MÉTRICAS
            ══════════════════════════════════════ */}
            <section id="metricas" className="py-20 sm:py-28" aria-label="Logros y métricas">
                <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
                    <div className="reveal mb-12">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[var(--accent)] uppercase mb-4">03 —</p>
                        <h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--text)] leading-[1.05]"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Números que respaldan el trabajo
                        </h2>
                    </div>

                    <div ref={metricsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
                        <MetricCard value={3} suffix="+" label="Marcas desarrolladas" triggered={metricsTrig} delay={0} />
                        <MetricCard value={2} suffix="+" label="Años de experiencia" triggered={metricsTrig} delay={100} />
                        <MetricCard value={100} suffix="%" label="Proyectos entregados a tiempo" triggered={metricsTrig} delay={200} />
                        <MetricCard value={2} suffix="" label="Plataformas dominadas (Meta + Google)" triggered={metricsTrig} delay={300} />
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════
                TESTIMONIOS
            ══════════════════════════════════════ */}
            <Section
                id="testimonios"
                marker="04 —"
                title="Lo que dicen quienes trabajaron conmigo"
                className="bg-[var(--surface-warm)]"
            >
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <figure
                            key={i}
                            className={`reveal reveal-delay-${i + 1} border border-[var(--border)] p-8 bg-[var(--surface)] flex flex-col justify-between hover:border-[var(--accent)]/20 transition-colors duration-300`}
                        >
                            {/* Opening quote */}
                            <div>
                                <span
                                    className="block text-7xl leading-none text-[var(--accent)] mb-4 select-none"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                    aria-hidden
                                >
                                    &ldquo;
                                </span>
                                <blockquote className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-light italic">
                                    {t.quote}
                                </blockquote>
                            </div>

                            <figcaption className="mt-8 pt-6 border-t border-[var(--border)]">
                                <p className="text-sm font-semibold text-[var(--text)] tracking-wide">{t.author}</p>
                                <p className="text-xs text-[var(--muted)] mt-1">{t.role}</p>
                                <p className="text-xs text-[var(--muted)]/70 mt-0.5">{t.institution}</p>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </Section>

            {/* ══════════════════════════════════════
                CONTACTO
            ══════════════════════════════════════ */}
            <section id="contacto" className="py-20 sm:py-28" aria-label="Contacto">
                <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
                    {/* Header */}
                    <div className="reveal mb-14">
                        <p className="text-xs font-semibold tracking-[0.3em] text-[var(--accent)] uppercase mb-4">05 —</p>
                        <h2
                            className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--text)] leading-[1.05] max-w-3xl"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            ¿Buscas una marketer que entregue resultados?
                        </h2>
                        <div className="flex items-center gap-3 mt-5">
                            <span className="availability-dot inline-block w-2.5 h-2.5 rounded-full bg-emerald-400" aria-hidden />
                            <p className="text-sm text-[var(--muted)] tracking-wide">
                                Disponible ahora · Proyectos freelance · Prácticas · Posición Junior
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-12 lg:grid-cols-12">
                        {/* Form */}
                        <div className="lg:col-span-7 reveal reveal-delay-1">
                            {formSent ? (
                                <div className="border border-[var(--accent)]/30 bg-[var(--accent)]/5 p-10 text-center">
                                    <p
                                        className="text-3xl text-[var(--accent)] mb-3"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        Mensaje enviado
                                    </p>
                                    <p className="text-sm text-[var(--muted)]">
                                        Gracias por escribir. Te responderé pronto a través de tu email.
                                    </p>
                                    <button
                                        className="mt-6 text-xs tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                                        onClick={() => setFormSent(false)}
                                    >
                                        Enviar otro mensaje
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                                    <div>
                                        <label htmlFor="contact-name" className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-2">
                                            Tu nombre *
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                                            className="w-full bg-transparent border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-[var(--muted)]/50"
                                            placeholder="María García"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-company" className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-2">
                                            Empresa / Organización
                                        </label>
                                        <input
                                            id="contact-company"
                                            type="text"
                                            value={formState.company}
                                            onChange={(e) => setFormState((s) => ({ ...s, company: e.target.value }))}
                                            className="w-full bg-transparent border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 placeholder:text-[var(--muted)]/50"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-message" className="block text-xs tracking-[0.2em] uppercase text-[var(--muted)] mb-2">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                                            className="w-full bg-transparent border border-[var(--border)] text-[var(--text)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none placeholder:text-[var(--muted)]/50"
                                            placeholder="Cuéntame sobre tu proyecto o en qué puedo ayudarte..."
                                        />
                                    </div>
                                    <Button type="submit" className="w-full sm:w-auto px-10">
                                        Enviar mensaje
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact details */}
                        <div className="lg:col-span-5 reveal reveal-delay-2 space-y-8">
                            <div>
                                <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-5">Contacto directo</p>
                                <div className="space-y-4">
                                    <a
                                        href={`mailto:${PROFILE.email}`}
                                        className="flex items-center gap-4 group"
                                        aria-label={`Enviar email a ${PROFILE.email}`}
                                    >
                                        <span className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors" aria-hidden>
                                            @
                                        </span>
                                        <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                                            {PROFILE.email}
                                        </span>
                                    </a>

                                    <a
                                        href={`https://wa.me/51934855351?text=${encodeURIComponent("Hola Mayra, vi tu portafolio y me gustaría conversar.")}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 group"
                                        aria-label="Contactar por WhatsApp"
                                    >
                                        <span className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors text-xs font-bold" aria-hidden>
                                            WA
                                        </span>
                                        <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                                            +51 934 855 351
                                        </span>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/mayra-ortega-camacho/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center gap-4 group"
                                        aria-label="Ver perfil de LinkedIn"
                                    >
                                        <span className="w-9 h-9 border border-[var(--border)] flex items-center justify-center text-[var(--muted)] group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] transition-colors text-xs font-bold" aria-hidden>
                                            in
                                        </span>
                                        <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors">
                                            LinkedIn
                                        </span>
                                    </a>
                                </div>
                            </div>

                            <div className="border-t border-[var(--border)] pt-8">
                                <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-3">Acciones rápidas</p>
                                <div className="flex flex-col gap-2">
                                    <button
                                        className="text-left text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                        onClick={async () => {
                                            const ok = await copyToClipboard(PROFILE.email);
                                            setCopied(ok);
                                            setTimeout(() => setCopied(false), 1600);
                                        }}
                                        aria-label="Copiar email al portapapeles"
                                    >
                                        {copied ? "✓ Email copiado" : "→ Copiar email"}
                                    </button>
                                    <a
                                        href={`mailto:${PROFILE.email}`}
                                        className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                                    >
                                        → Abrir cliente de correo
                                    </a>
                                </div>
                            </div>

                            <div className="border border-[var(--border)] p-6 bg-[var(--surface)]">
                                <p className="text-xs tracking-[0.3em] text-[var(--muted)] uppercase mb-3">Ubicación</p>
                                <p className="text-sm text-[var(--text-secondary)]">{PROFILE.location}</p>
                                <p className="text-xs text-[var(--muted)] mt-2">Disponible para trabajar de forma remota con equipos globales.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
