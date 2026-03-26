import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="border-t border-[var(--border)] mt-0">
            {/* Closing statement */}
            <div className="mx-auto max-w-6xl px-6 sm:px-8 pt-16 pb-8">
                <p
                    className="text-3xl sm:text-4xl lg:text-5xl text-[var(--text)] leading-[1.15] max-w-2xl mb-16 font-normal"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    Las marcas que importan tienen una historia.{" "}
                    <em className="text-[var(--accent)] not-italic">Ayudo a contarla.</em>
                </p>

                <div className="flex flex-col sm:flex-row gap-8 sm:items-start sm:justify-between border-t border-[var(--border)] pt-8">
                    {/* Name */}
                    <div>
                        <p
                            className="text-xl text-[var(--text)] mb-1"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Mayra Ortega Camacho
                        </p>
                        <p className="text-xs text-[var(--muted)] tracking-widest uppercase">
                            Lima, Perú · Remote LATAM
                        </p>
                    </div>

                    {/* Quick links */}
                    <nav className="flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-[0.2em] uppercase" aria-label="Links rápidos">
                        <Link to="/" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                            Inicio
                        </Link>
                        <Link to="/proyectos" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                            Proyectos
                        </Link>
                        <a href="/#sobre-mi" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                            Sobre mí
                        </a>
                        <a href="/#contacto" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                            Contacto
                        </a>
                    </nav>
                </div>

                <p className="mt-8 text-xs text-[var(--muted)]/60 tracking-widest">
                    © {new Date().getFullYear()} · Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
