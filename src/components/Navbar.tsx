import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { clsx } from "../utils/clsx";

export function Navbar() {
    const location = useLocation();
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
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const navLinks = [
        { name: "Inicio", path: "/", exact: true },
        { name: "Proyectos", path: "/proyectos", exact: false },
    ];

    const anchorLinks = [
        { name: "Sobre mí", href: isHome ? "#sobre-mi" : "/#sobre-mi" },
        { name: "Proceso", href: isHome ? "#proceso" : "/#proceso" },
    ];

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bg)]/90 border-b border-[var(--border)] supports-[backdrop-filter]:bg-[var(--bg)]/60">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
                <Link to="/" className="font-bold tracking-tight text-xl text-[var(--text)] hover:text-[var(--accent)] transition-colors z-50 relative">
                    Mayra Ortega
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                clsx(
                                    "text-sm font-medium transition-colors hover:text-[var(--accent)]",
                                    isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]"
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
                            className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                            href={link.href}
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

            {/* Mobile Drawer */}
            <div
                className={clsx(
                    "fixed inset-0 z-40 bg-[var(--bg)] transform transition-transform duration-300 lg:hidden flex flex-col pt-24 px-6",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <nav className="flex flex-col gap-6 text-lg">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                clsx(
                                    "font-medium border-b border-[var(--border)] pb-4 transition-colors",
                                    isActive ? "text-[var(--accent)] border-[var(--accent)]" : "text-[var(--text)]"
                                )
                            }
                            onClick={() => setIsOpen(false)}
                            end={link.exact}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    {anchorLinks.map((link) => (
                        <a
                            key={link.name}
                            className="font-medium text-[var(--text)] border-b border-[var(--border)] pb-4 hover:text-[var(--accent)] transition-colors"
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/#contacto"
                        className="mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <Button className="w-full justify-center h-12 text-base">Hablemos</Button>
                    </a>
                </nav>
            </div>
        </header>
    );
}
