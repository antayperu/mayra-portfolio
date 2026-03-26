import { clsx } from "../utils/clsx";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
};

export function Button({ variant = "primary", className, ...props }: Props) {
    const base =
        "inline-flex items-center justify-center gap-2 px-6 h-12 min-w-[44px] text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-none";
    const styles = {
        primary:
            "bg-[var(--accent)] text-[#07090D] hover:bg-[var(--accent-2)] hover:shadow-[0_8px_30px_rgba(228,160,1,0.35)] font-bold uppercase tracking-widest text-xs",
        secondary:
            "bg-transparent border border-[var(--text-secondary)]/30 text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] uppercase tracking-widest text-xs",
        ghost:
            "bg-transparent text-[var(--muted)] hover:text-[var(--accent)] uppercase tracking-widest text-xs",
    }[variant];

    return <button className={clsx(base, styles, className)} {...props} />;
}
