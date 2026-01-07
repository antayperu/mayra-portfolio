export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
            },
            borderRadius: {
                xl: "16px",
                "2xl": "20px",
                "3xl": "24px",
            },
            boxShadow: {
                soft: "0 10px 30px rgba(0,0,0,0.06)",
                soft2: "0 6px 18px rgba(0,0,0,0.08)",
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.2, 0.8, 0.2, 1)",
            },
        },
    },
    plugins: [],
};
