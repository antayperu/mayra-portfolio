import type { GalleryItem } from "../components/Gallery";

export type Project = {
    slug: string;
    title: string;
    subtitle: string;
    year: string; // sin inventar
    location: string;
    role: string;
    tags: string[];
    cover: {
        src: string;
        alt: string;
        fit?: "cover" | "contain" | "fill";
        bg?: string;
        style?: React.CSSProperties;
    },
    featured: boolean;

    // Case study content
    category: "professional" | "university"; // Nueva propiedad
    context: string;
    slogans?: string[];
    goals: string[];
    deliverables: string[];
    visualSystem?: {
        palette: Array<{ name: string; hex: string }>;
        typography: { primary: string; notes: string };
        rules: string[];
    };
    gallery: GalleryItem[];
    result: string;
    learnings: string[];
};

export const PROFILE = {
    name: "Mayra Ortega Camacho",
    location: "Lima, Perú · Remote (LATAM)",
    email: "mayraoc42@gmail.com",
    phone: "(+51) 934855351",
    chips: ["Branding", "Identidad Visual", "Contenido RRSS", "Marketing/Comunicación"],
};

export const projects: Project[] = [
    {
        slug: "tienda-antay",
        category: "professional",
        title: "Caso de Estudio — Tienda Antay",
        subtitle: "Identidad visual y contenido para Facebook.",
        year: "2021–2022",
        location: "Cajatambo, Lima — Perú",
        role: "Asistente de ventas y apoyo en marketing",
        tags: ["Branding", "Identidad Visual", "RRSS (Facebook)", "Edición foto/video"],
        cover: {
            src: "/assets/projects/tienda-antay-cover.jpg",
            alt: "Identidad visual Tienda Antay",
        },
        featured: true,
        context:
            "Tienda de conveniencia familiar en Cajatambo. El reto fue construir una identidad visual que transmitiera confianza inmediata y calidez, facilitando la decisión de compra tanto en el punto de venta físico como en redes sociales.",
        slogans: [
            "Tienda Antay: “Donde da gusto comprar”",
            "Marca paraguas: “Donde Cajatambo se encuentra con el mundo”",
        ],
        goals: [
            "Profesionalizar la imagen de la tienda para generar mayor confianza local.",
            "Crear un sistema visual replicable para ofertas y comunicados en Facebook.",
            "Diferenciar la marca mediante un tono cercano pero con estética cuidada.",
        ],
        deliverables: [
            "Identidad visual: logo, paleta de colores, tipografías y concepto gráfico.",
            "Plantillas y piezas para Facebook (promociones, saludos, avisos).",
            "Edición de fotografía y video para mostrar productos con calidad.",
        ],
        /*
        visualSystem: {
            palette: [
                { name: "Base", hex: "#FAF8F5" },
                { name: "Texto", hex: "#121212" },
                { name: "Acento cálido", hex: "#C46A3B" },
                { name: "Acento suave", hex: "#F2E6DE" },
            ],
            typography: {
                primary: "Plus Jakarta Sans",
                notes: "Sans moderna y geométrica, seleccionada por su legibilidad en pantallas pequeñas.",
            },
            rules: [
                "Jerarquía clara: Mensaje principal > Producto > Precio/Dato.",
                "Uso consistente de la paleta cálida para mantener unidad visual.",
                "Fotografía limpia: productos bien iluminados y encuadres estables.",
            ],
        },
        */
        gallery: [
            {
                src: "/assets/projects/tienda-antay-rrss.jpg",
                alt: "Grilla de contenido para Redes Sociales",
                ratio: "square",
            },
            {
                src: "/assets/projects/tienda-antay-retail.jpg",
                alt: "Aplicación de marca en punto de venta",
                ratio: "square",
            },
            {
                src: "/assets/projects/tienda-antay-producto2.jpg",
                alt: "Fotografía de producto con identidad",
                ratio: "square",
            },
        ],
        result:
            "Se logró una coherencia visual que elevó la percepción de calidad del negocio, permitiendo publicar contenido de venta de forma ágil y ordenada sin perder la identidad de marca.",
        learnings: [
            "La constancia visual construye confianza más rápido que el diseño complejo.",
            "Tener plantillas definidas ahorra tiempo y evita la improvisación.",
            "El contenido real (fotos de tienda/productos) conecta mejor cuando tiene un marco profesional.",
        ],
    },
    {
        slug: "manual-iway",
        category: "university",
        title: "Manual de marca — IWAY",
        subtitle: "Identidad visual para robot educativo.",
        year: "Proyecto Académico",
        location: "UPC",
        role: "Diseño de identidad y manual",
        tags: ["Branding", "Manual de Marca", "Diseño Editorial"],
        cover: {
            src: "/assets/projects/iway-cover.png",
            alt: "Portada Manual de Marca IWAY",
            fit: "contain",
            bg: "#548FC6", // Azul de la marca
            style: { clipPath: "inset(0 2px 0 2px)" }, // Recorte de bordes blancos laterales
        },
        featured: false,
        context:
            "IWAY es un proyecto de robot educativo diseñado para facilitar el aprendizaje tecnológico. Se requería un manual de marca exhaustivo que normalizara el uso del logotipo y asegurara la consistencia en todas las aplicaciones educativas y comerciales.",
        goals: [
            "Desarrollar una identidad tecnológica, amigable y educativa.",
            "Documentar el uso correcto del logotipo y sus variantes.",
            "Establecer lineamientos claros para papelería y presencia digital.",
        ],
        deliverables: [
            "Logotipo principal y versiones (positivo/negativo).",
            "Definición de zona de protección y tamaños mínimos.",
            "Sistema de colores corporativos y tipografías.",
            "Diseño de papelería corporativa y propuesta de Landing Page.",
        ],
        /*
        visualSystem: {
            palette: [
                { name: "Tech Blue", hex: "#0056D2" },
                { name: "Innovation", hex: "#00C2CB" },
                { name: "Dark", hex: "#1A1A1A" },
            ],
            typography: {
                primary: "Roboto / Montserrat",
                notes: "Combinación moderna para transmitir tecnología y accesibilidad.",
            },
            rules: [
                "El logo siempre debe respetar el área de seguridad definida.",
                "Uso prioritario de fondos blancos para limpieza visual.",
                "Estilo iconográfico lineal y simple.",
            ],
        },
        */
        gallery: [
            {
                src: "/assets/projects/iway-app.png",
                alt: "Aplicación móvil y usuario",
                ratio: "square",
                fit: "contain",
                bg: "#0B162C", // Azul oscuro profundo para complementar la imagen
            },
            {
                src: "/assets/projects/iway-stationery.png",
                alt: "Set de papelería corporativa",
                ratio: "square",
                fit: "contain",
                bg: "#EAEAEA", // Gris claro para continuidad visual
            },
            {
                src: "/assets/projects/iway-logo-black.png",
                alt: "Logotipo versión negativa",
                ratio: "square",
                fit: "contain",
                bg: "#000000",
            },
            {
                src: "/assets/projects/iway-logo-white.png",
                alt: "Logotipo versión positiva lineral",
                ratio: "square",
                fit: "contain",
                bg: "#FFFFFF",
            },
        ],
        result:
            "Se entregó un sistema visual coherente y documentado, listo para garantizar que la marca IWAY se aplique con consistencia en cualquier punto de contacto.",
        learnings: [
            "Un manual de marca previene errores comunes en la aplicación del logo.",
            "Documentar las prohibiciones es tan importante como mostrar los usos correctos.",
            "La marca debe funcionar tanto en impresos (papelería) como en digital (web).",
        ],
    },

    // PLACEHOLDER 1 (sin marcas reales)
    {
        slug: "emprendimiento-familiar",
        category: "professional",
        title: "Identidad visual — Emprendimiento familiar",
        subtitle: "Caso práctico de adaptación de marca para un negocio real.",
        year: "—",
        location: "—",
        role: "—",
        tags: ["Branding", "Identidad Visual"],
        cover: {
            src: "/assets/projects/project1.jpg",
            alt: "Identidad visual para emprendimiento familiar",
        },
        featured: true,
        context:
            "Proyecto placeholder para que reemplaces con un caso real cuando tengas assets y contexto final.",
        goals: ["(EDITAR AQUÍ) Objetivo 1", "(EDITAR AQUÍ) Objetivo 2", "(EDITAR AQUÍ) Objetivo 3"],
        deliverables: ["(EDITAR AQUÍ) Entregable 1", "(EDITAR AQUÍ) Entregable 2"],
        visualSystem: {
            palette: [
                { name: "Base", hex: "#FAF8F5" },
                { name: "Texto", hex: "#121212" },
                { name: "Acento", hex: "#C46A3B" },
            ],
            typography: { primary: "Plus Jakarta Sans", notes: "(EDITAR AQUÍ) Notas de tipografía" },
            rules: ["(EDITAR AQUÍ) Regla 1", "(EDITAR AQUÍ) Regla 2"],
        },
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1520975732146-65d93a4668a0?auto=format&fit=crop&w=1600&q=80",
                alt: "Placeholder de pieza (editable)",
                ratio: "square",
            },
        ],
        result: "(EDITAR AQUÍ) Resultado cualitativo sin métricas.",
        learnings: ["(EDITAR AQUÍ) Aprendizaje 1", "(EDITAR AQUÍ) Aprendizaje 2", "(EDITAR AQUÍ) Aprendizaje 3"],
    },

    // PLACEHOLDER 2 (sin marcas reales)
    /*
    {
        slug: "kit-contenido-redes",
        category: "professional",
        title: "Kit de contenido para RRSS (Editable)",
        subtitle: "Plantillas + guía visual para publicaciones consistentes.",
        year: "—",
        location: "—",
        role: "—",
        tags: ["Contenido RRSS", "Edición foto/video"],
        cover: {
            src: "https://images.unsplash.com/photo-1520975791121-1f7f3a9d1f80?auto=format&fit=crop&w=1600&q=80",
            alt: "Placeholder kit RRSS (editable)",
        },
        featured: false,
        context: "(EDITAR AQUÍ) Contexto del kit y necesidad del negocio.",
        goals: ["(EDITAR AQUÍ) Objetivo 1", "(EDITAR AQUÍ) Objetivo 2", "(EDITAR AQUÍ) Objetivo 3"],
        deliverables: ["(EDITAR AQUÍ) Plantillas", "(EDITAR AQUÍ) Guía básica", "(EDITAR AQUÍ) Piezas ejemplo"],
        visualSystem: {
            palette: [
                { name: "Base", hex: "#FAF8F5" },
                { name: "Texto", hex: "#121212" },
                { name: "Acento", hex: "#C46A3B" },
            ],
            typography: { primary: "Plus Jakarta Sans", notes: "(EDITAR AQUÍ) Tipografía/uso" },
            rules: ["(EDITAR AQUÍ) Regla 1", "(EDITAR AQUÍ) Regla 2"],
        },
        gallery: [
            {
                src: "https://images.unsplash.com/photo-1520975861111-9b28e1b0ff2b?auto=format&fit=crop&w=1600&q=80",
                alt: "Placeholder piezas RRSS (editable)",
                ratio: "fourThree",
            },
        ],
        result: "(EDITAR AQUÍ) Resultado cualitativo sin métricas.",
        learnings: ["(EDITAR AQUÍ) Aprendizaje 1", "(EDITAR AQUÍ) Aprendizaje 2", "(EDITAR AQUÍ) Aprendizaje 3"],
    },
    */
];

export const PROFESSIONAL_PROJECTS = projects.filter((p) => p.category === "professional");
export const UNIVERSITY_PROJECTS = projects.filter((p) => p.category === "university");
export const FEATURED = projects.filter((p) => p.featured);
export const TAGS = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
