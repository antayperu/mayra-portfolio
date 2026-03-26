import React from "react";

export function Section({
    id,
    marker,
    title,
    subtitle,
    children,
    className = "",
}: {
    id?: string;
    marker?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <section id={id} className={`py-20 sm:py-28 ${className}`}>
            <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
                <div className="reveal mb-12 sm:mb-16">
                    {marker && (
                        <p className="text-xs font-semibold tracking-[0.3em] text-[var(--accent)] uppercase mb-4">
                            {marker}
                        </p>
                    )}
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[var(--text)] max-w-3xl leading-[1.05]">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-4 text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-2xl font-light">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div>{children}</div>
            </div>
        </section>
    );
}
