import { clsx } from "../utils/clsx";
import React from "react";

type Props = {
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
};

export function Chip({ children, active, onClick }: Props) {
    const interactive = Boolean(onClick);
    const base =
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border transition duration-200 ease-smooth";
    const styles = active
        ? "bg-[var(--accent)] text-[#07090D] border-transparent font-bold"
        : "bg-[var(--surface-raised)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--text-secondary)] hover:text-[var(--text)]";

    const Comp: any = interactive ? "button" : "span";
    return (
        <Comp
            onClick={onClick}
            className={clsx(base, styles, interactive && "h-9 min-w-[44px]")}
            type={interactive ? "button" : undefined}
        >
            {children}
        </Comp>
    );
}
