import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { clsx } from "../utils/clsx";

export function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleHomeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false);
        if (isHome) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
        }
    };

    const scrollTo = (id: string) => {
        setIsOpen(false);
        if (isHome) {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 120);
        }
    };

    const navLinks = [
        { label: "Proyectos", path: "/proyectos" },
    ];

    const anchorLinks = [
        { label: "Sobre mí", id: "sobre-mi" },
        { label: "Contacto", id: "contacto" },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
                scrolled
                    ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)]"
                    : "bg-transparent"
            )}
        >
            <div className="mx-auto max-w-6xl px-6 sm:px-8 h-16 flex items-center justify-between gap-4">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={handleHomeClick}
                    className="font-display text-base sm:text-lg text-[var(--text)] hover:text-[var(--accent)] transition-colors z-50 relative tracking-wide"
                    style={{ fontFamily: 'var(--font-display)' }}
                    title="Mayra Ortega Camacho"
                >
                    M·O·C
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
                    <a
                        href="/"
                        onClick={handleHomeClick}
                        className={clsx(
                            "text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-[var(--accent)]",
                            isHome ? "text-[var(--accent)]" : "text-[var(--muted)]"
                        )}
                    >
                        Inicio
                    </a>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.label}
                            to={link.path}
                            className={({ isActive }) =>
                                clsx(
                                    "text-xs font-medium tracking-[0.2em] uppercase transition-colors hover:text-[var(--accent)]",
                                    isActive ? "text-[var(--accent)]" : "text-[var(--muted)]"
                                )
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    {anchorLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => scrollTo(link.id)}
                            className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--muted)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                        >
                            {link.label}
                        </button>
                    ))}
                </nav>

                {/* CTA Desktop */}
                <a
                    href="/#contacto"
                    onClick={(e) => { e.preventDefault(); scrollTo("contacto"); }}
                    className="hidden md:inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[var(--accent)] border border-[var(--accent)]/40 px-5 py-2 hover:bg-[var(--accent)] hover:text-[#07090D] transition-all duration-300"
                    aria-label="Contactar a Mayra"
                >
                    Hablemos
                </a>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 -mr-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors relative z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isOpen}
                >
                    <span className="block w-5 relative h-4">
                        <span className={clsx("absolute left-0 w-full h-px bg-current transition-all duration-300", isOpen ? "top-2 rotate-45" : "top-0")} />
                        <span className={clsx("absolute left-0 w-full h-px bg-current transition-all duration-300", isOpen ? "opacity-0" : "top-2")} />
                        <span className={clsx("absolute left-0 w-full h-px bg-current transition-all duration-300", isOpen ? "top-2 -rotate-45" : "top-4")} />
                    </span>
                </button>
            </div>

            {/* Mobile Drawer */}
            {isOpen && createPortal(
                <div
                    className="fixed inset-0 z-[9999] bg-[var(--bg)] flex flex-col"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menú de navegación"
                >
                    <div className="flex justify-between items-center px-6 h-16 border-b border-[var(--border)]">
                        <span className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase">Menú</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 -mr-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                            aria-label="Cerrar menú"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col items-center justify-center flex-1 gap-10 p-8" aria-label="Menú móvil">
                        <a
                            href="/"
                            onClick={handleHomeClick}
                            className="text-4xl font-display text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Inicio
                        </a>
                        <NavLink
                            to="/proyectos"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                clsx("text-4xl transition-colors hover:text-[var(--accent)]",
                                    isActive ? "text-[var(--accent)]" : "text-[var(--text)]")
                            }
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Proyectos
                        </NavLink>
                        {anchorLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollTo(link.id)}
                                className="text-4xl text-[var(--text)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    <div className="px-8 pb-8">
                        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase text-center">
                            mayraoc42@gmail.com
                        </p>
                    </div>
                </div>,
                document.body
            )}
        </header>
    );
}
