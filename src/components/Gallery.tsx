import React, { useId, useMemo, useState } from "react";
import { clsx } from "../utils/clsx";

export type GalleryItem = {
    src: string;
    alt: string;
    ratio?: "square" | "fourThree" | "sixteenNine";
};

const ratioClass = (r: GalleryItem["ratio"]) => {
    switch (r) {
        case "square":
            return "aspect-square";
        case "fourThree":
            return "aspect-[4/3]";
        case "sixteenNine":
        default:
            return "aspect-video";
    }
};

export function Gallery({ items }: { items: GalleryItem[] }) {
    const titleId = useId();
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const current = useMemo(() => items[index], [items, index]);

    return (
        <div aria-labelledby={titleId}>
            <h3 id={titleId} className="text-lg font-semibold tracking-tight">
                Piezas y aplicaciones
            </h3>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it, i) => (
                    <button
                        key={it.src + i}
                        type="button"
                        className={clsx(
                            "rounded-3xl overflow-hidden border border-[var(--border)] bg-white shadow-soft hover:opacity-95 transition duration-200 ease-smooth",
                            "focus-visible:outline-none"
                        )}
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    >
                        <div className={clsx("w-full bg-black/5", ratioClass(it.ratio))}>
                            <img
                                src={it.src}
                                alt={it.alt}
                                loading="lazy"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox accesible */}
            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    className="fixed inset-0 z-50 bg-black/60 p-4 sm:p-8 flex items-center justify-center"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="w-full max-w-5xl rounded-3xl bg-[var(--surface)] overflow-hidden shadow-soft"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between gap-3 p-4 border-b border-[var(--border)]">
                            <p className="text-sm text-[var(--muted)]">Vista previa</p>
                            <button
                                className="h-11 min-w-[44px] px-3 rounded-xl hover:bg-black/5 font-semibold"
                                onClick={() => setOpen(false)}
                                autoFocus
                            >
                                Cerrar
                            </button>
                        </div>

                        <div className="p-4 sm:p-6">
                            <div className="w-full aspect-video bg-black/5 rounded-2xl overflow-hidden">
                                <img
                                    src={current.src}
                                    alt={current.alt}
                                    className="h-full w-full object-contain bg-white"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <button
                                    className="h-11 min-w-[44px] px-4 rounded-xl hover:bg-black/5 font-semibold"
                                    onClick={() => setIndex((x) => (x - 1 + items.length) % items.length)}
                                >
                                    ← Anterior
                                </button>
                                <p className="text-sm text-[var(--muted)]">
                                    {index + 1} / {items.length}
                                </p>
                                <button
                                    className="h-11 min-w-[44px] px-4 rounded-xl hover:bg-black/5 font-semibold"
                                    onClick={() => setIndex((x) => (x + 1) % items.length)}
                                >
                                    Siguiente →
                                </button>
                            </div>
                        </div>
                    </div>

                    <EscListener onEsc={() => setOpen(false)} />
                </div>
            )}
        </div>
    );
}

function EscListener({ onEsc }: { onEsc: () => void }) {
    React.useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onEsc();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onEsc]);
    return null;
}
