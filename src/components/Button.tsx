import { clsx } from "../utils/clsx";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className, ...props }: Props) {
    const base =
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 h-11 min-w-[44px] text-sm font-semibold transition duration-200 ease-smooth focus-visible:outline-none";
    const styles = {
        primary:
            "bg-[var(--accent)] text-[#07090D] hover:brightness-110 shadow-[0_4px_14px_rgba(228,160,1,0.25)] font-bold",
        secondary:
            "bg-transparent border border-[var(--border)] text-[var(--text)] hover:border-[var(--text-secondary)] hover:bg-white/5",
        ghost:
            "bg-transparent text-[var(--text)] hover:text-[var(--accent)] hover:bg-[var(--surface-raised)]",
    }[variant];

    return <button className={clsx(base, styles, className)} {...props} />;
}
