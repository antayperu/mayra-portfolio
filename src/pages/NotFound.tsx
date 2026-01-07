import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";

export function NotFound() {
    return (
        <>
            <Seo title="404 — Mayra Ortega" />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
                <h1 className="text-3xl font-semibold tracking-tight">Página no encontrada</h1>
                <p className="mt-4 text-[var(--muted)] leading-[1.7]">
                    El enlace no existe o fue movido.
                </p>
                <Link to="/" className="mt-6 inline-flex font-semibold underline underline-offset-4 hover:opacity-80">
                    Volver al inicio →
                </Link>
            </div>
        </>
    );
}
