import React from "react";

export function Section({
    id,
    title,
    subtitle,
    children,
}: {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="py-14 sm:py-16">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
                    {subtitle && (
                        <p className="mt-3 text-[15px] sm:text-base text-[var(--muted)] leading-[1.7]">
                            {subtitle}
                        </p>
                    )}
                </div>
                <div className="mt-8">{children}</div>
            </div>
        </section>
    );
}
