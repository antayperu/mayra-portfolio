import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="border-t border-[var(--border)]">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
                <div className="flex flex-col sm:flex-row gap-6 sm:items-start sm:justify-between">
                    <div>
                        <p className="font-semibold">Mayra Ortega Camacho</p>
                        <p className="mt-2 text-sm text-[var(--muted)] leading-[1.7]">
                            Comas, Lima – Perú · mayraoc42@gmail.com
                        </p>
                    </div>

                    <div className="flex gap-6 text-sm">
                        <Link to="/proyectos" className="hover:opacity-80 underline underline-offset-4">
                            Proyectos
                        </Link>
                        <a href="/#contacto" className="hover:opacity-80 underline underline-offset-4">
                            Contacto
                        </a>
                        <a href="#top" className="hover:opacity-80 underline underline-offset-4">
                            Volver arriba
                        </a>
                    </div>
                </div>

                <p className="mt-8 text-xs text-[var(--muted)]">
                    © {new Date().getFullYear()} · Portafolio personal.
                </p>
            </div>
        </footer>
    );
}
