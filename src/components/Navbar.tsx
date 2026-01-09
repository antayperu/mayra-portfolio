import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "./Button";
import { clsx } from "../utils/clsx";

export function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === "/";
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            // Optional: add padding-right if needed to prevent layout shift from scrollbar removal
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const navLinks = [
        { name: "Inicio", path: "/", hash: "#inicio", exact: true },
        { name: "Proyectos", path: "/proyectos", exact: false },
    ];

    const anchorLinks = [
        { name: "Sobre mí", href: isHome ? "#sobre-mi" : "/#sobre-mi" },
    ];

    // Simple helper for "Inicio" specifically which can be tricky
    const handleHomeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(false);
        if (isHome) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
            // Scroll to top happens automatically by most routers or browsers on new page, 
            // but we can ensure it if we use a ScrollToTop component (usually present in App)
        }
    };

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bg)]/90 border-b border-[var(--border)] supports-[backdrop-filter]:bg-[var(--bg)]/60">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
                <Link
                    to="/"
                    onClick={handleHomeClick}
                    className="font-bold tracking-tight text-lg sm:text-xl text-[var(--text)] hover:text-[var(--accent)] transition-colors z-50 relative"
                    title="Mayra Alejandra Ortega Camacho"
                >
                    <span className="sm:hidden">Mayra Ortega</span>
                    <span className="hidden sm:block">Mayra Alejandra Ortega Camacho</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                clsx(
                                    "text-sm font-medium transition-colors hover:text-[var(--accent)]",
                                    isActive && link.path !== "/" ? "text-[var(--accent)]" : "text-[var(--text-secondary)]",
                                    link.path === "/" && isHome ? "text-[var(--accent)]" : ""
                                )
                            }
                            end={link.exact}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    {anchorLinks.map((link) => (
                        <a
                            key={link.name}
                            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                            href={link.href}
                            onClick={(e) => {
                                e.preventDefault();
                                const targetId = link.href.includes("#") ? link.href.split("#")[1] : "";
                                if (isHome) {
                                    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                                } else {
                                    navigate("/");
                                    setTimeout(() => {
                                        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                                    }, 100);
                                }
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a href="/#contacto" className="hidden sm:block">
                        <Button>Hablemos</Button>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 -mr-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors relative z-50"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer (Portal) */}
            {isOpen && createPortal(
                <div
                    className="fixed inset-0 z-[9999] bg-[var(--bg)]/95 backdrop-blur-sm flex flex-col"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex justify-between items-center p-4 h-16 border-b border-[var(--border)]">
                        <span className="font-bold text-lg truncate pr-4 text-[var(--text)] opacity-50">Menú</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 -mr-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors"
                            aria-label="Cerrar menú"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-xl p-6 overflow-y-auto">
                        <a
                            href="/"
                            onClick={handleHomeClick}
                            className={clsx(
                                "font-medium transition-colors hover:text-[var(--accent)]",
                                isHome ? "text-[var(--accent)]" : "text-[var(--text)]"
                            )}
                        >
                            Inicio
                        </a>

                        <NavLink
                            to="/proyectos"
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                clsx(
                                    "font-medium transition-colors hover:text-[var(--accent)]",
                                    isActive ? "text-[var(--accent)]" : "text-[var(--text)]"
                                )
                            }
                        >
                            Proyectos
                        </NavLink>

                        {anchorLinks.map((link) => (
                            <a
                                key={link.name}
                                className="font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsOpen(false);
                                    const targetId = link.href.includes("#") ? link.href.split("#")[1] : "";

                                    if (isHome) {
                                        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        navigate("/");
                                        setTimeout(() => {
                                            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                                        }, 100);
                                    }
                                }}
                            >
                                {link.name}
                            </a>
                        ))}

                        <a
                            href="/#contacto"
                            className="mt-4 w-full max-w-xs"
                            onClick={() => setIsOpen(false)}
                        >
                            <Button className="w-full justify-center h-14 text-lg">Hablemos</Button>
                        </a>
                    </nav>
                </div>,
                document.body
            )}
        </header>
    );
}
