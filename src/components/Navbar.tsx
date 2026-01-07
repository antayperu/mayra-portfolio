import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./Button";
import { clsx } from "../utils/clsx";

export function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <header className="sticky top-0 z-40 backdrop-blur-md bg-[var(--bg)]/90 border-b border-[var(--border)] supports-[backdrop-filter]:bg-[var(--bg)]/60">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
                <Link to="/" className="font-bold tracking-tight text-xl text-[var(--text)] hover:text-[var(--accent)] transition-colors">
                    Mayra Ortega
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) => clsx("text-sm font-medium transition-colors hover:text-[var(--accent)]", isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]")}
                        end
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/proyectos"
                        className={({ isActive }) => clsx("text-sm font-medium transition-colors hover:text-[var(--accent)]", isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)]")}
                    >
                        Proyectos
                    </NavLink>

                    {/* Anchor links */}
                    <a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" href={isHome ? "#sobre-mi" : "/#sobre-mi"}>
                        Sobre mí
                    </a>
                    <a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" href={isHome ? "#proceso" : "/#proceso"}>
                        Proceso
                    </a>
                </nav>

                <div className="flex items-center gap-3">
                    <a href="/#contacto">
                        <Button>Hablemos</Button>
                    </a>
                </div>
            </div>
        </header>
    );
}
