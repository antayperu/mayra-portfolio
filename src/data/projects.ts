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
    showcaseCards?: Array<{
        icon: string;       // SVG path data
        title: string;
        description: string;
    }>;
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
    // UNIDOS POR GPS
    {
        slug: "unidos-por-gps",
        category: "professional",
        title: "Branding & Identidad Visual — Unidos por GPS",
        subtitle: "Brochure corporativo para alianzas estratégicas con fabricantes de vehículos pesados.",
        year: "2024",
        location: "Lima, Perú",
        role: "Diseño de identidad visual y material corporativo",
        tags: ["Branding", "Identidad Visual", "Diseño Editorial", "Marketing B2B", "Brochure Corporativo"],
        cover: {
            src: "/assets/projects/unidos-por-gps/unidos-cover.jpg",
            alt: "Portada brochure de alianzas Unidos por GPS — Alianza Estratégica en Seguridad y Cumplimiento",
        },
        featured: true,
        context:
            "Unidos por GPS es una empresa peruana con más de 13 años de experiencia en monitoreo satelital vehicular, homologada por SUTRAN para retransmisión satelital. El reto fue desarrollar una identidad visual corporativa y un brochure de alianzas estratégicas dirigido a fabricantes de vehículos pesados, comunicando su propuesta de valor diferenciada frente a competidores genéricos: respaldo regulatorio, modelo de negocio win-to-win y acompañamiento continuo.",
        slogans: [
            "No competimos por precio. Competimos por respaldo real.",
            "Alianza Estratégica en Seguridad y Cumplimiento",
        ],
        goals: [
            "Posicionar a Unidos por GPS como socio estratégico de alto valor frente a fabricantes de vehículos pesados.",
            "Comunicar la homologación SUTRAN y el respaldo regulatorio (MTC, OSIPTEL, Osinergmin) como diferenciador clave.",
            "Presentar el modelo de comisión recurrente (S/50 por instalación) de forma clara y atractiva para socios B2B.",
            "Crear material de ventas premium que transmita confianza y profesionalismo corporativo.",
        ],
        deliverables: [
            "Brochure corporativo de 5 páginas para presentación a fabricantes de vehículos pesados.",
            "Identidad visual alineada a organismos reguladores: MTC, SUTRAN, OSIPTEL, Osinergmin.",
            "Material de ventas para modelo win-to-win con comisión recurrente de S/50 por instalación.",
            "Diseño editorial con paleta corporativa azul oscuro, tipografía bold y fotografía de flota vehicular.",
        ],
        gallery: [],
        showcaseCards: [
            {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Alianza Estratégica",
                description: "Modelo win-to-win con fabricantes de vehículos pesados. Sin inversión inicial, comisión recurrente garantizada.",
            },
            {
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                title: "+13 Años de Experiencia",
                description: "Empresa peruana líder en monitoreo satelital vehicular, homologada por SUTRAN para retransmisión satelital.",
            },
            {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "S/50 por Instalación",
                description: "Comisión recurrente por cada unidad instalada. 40 instalaciones al mes generan S/2,000 de ingreso pasivo.",
            },
            {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Seguridad Gestionada",
                description: "No solo instalamos, gestionamos la seguridad vehicular. Prevención, acción inmediata y acompañamiento hasta recuperación.",
            },
        ],
        result:
            "Se entregó un brochure corporativo de alto impacto visual que posiciona a Unidos por GPS como líder de categoría frente a fabricantes de vehículos pesados. El material comunica con claridad el modelo de negocio win-to-win, el respaldo regulatorio único y la propuesta de valor diferenciada, facilitando las conversaciones de alianza estratégica a nivel B2B.",
        learnings: [
            "En marketing B2B, la credibilidad regulatoria (logos de organismos oficiales) vale más que el diseño decorativo.",
            "El modelo financiero debe ser el centro del mensaje: el fabricante necesita ver el ingreso potencial de inmediato.",
            "Un brochure corporativo bien diseñado funciona como vendedor silencioso antes de cualquier reunión.",
        ],
    },

    {
        slug: "tienda-antay",
        category: "professional",
        title: "Identidad visual — Emprendimiento familiar",
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
                src: "/assets/projects/tienda-antay-branding.png",
                alt: "Aplicación de identidad visual en papelería y packaging",
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

    // PROYECTOS UNIVERSITARIOS - UPC
    {
        slug: "emprendimiento-familiar",
        category: "professional",
        title: "Proyectos universitarios",
        subtitle: "Diseño editorial y branding desarrollados en la UPC.",
        year: "2023–2024",
        location: "Universidad Peruana de Ciencias Aplicadas (UPC)",
        role: "Diseñadora gráfica y editorial",
        tags: ["Diseño Editorial", "Branding", "Identidad Visual", "Fotografía de Producto"],
        cover: {
            src: "/assets/projects/proyectos-universitarios-cover.png",
            alt: "Portada de revista Video Juego - Diseño editorial",
        },
        featured: true,
        context:
            "Colección de proyectos académicos desarrollados durante mi formación en la Universidad Peruana de Ciencias Aplicadas (UPC). Estos trabajos demuestran habilidades en diseño editorial, branding y fotografía de producto, aplicando conceptos teóricos a casos prácticos con enfoque profesional.",
        goals: [
            "Aplicar principios de diseño editorial en publicaciones impresas y digitales.",
            "Desarrollar identidades visuales coherentes para productos y marcas ficticias.",
            "Dominar técnicas de fotografía de producto y retoque digital.",
        ],
        deliverables: [
            "Revista 'Video Juego': Diseño editorial completo con portada, maquetación y sistema gráfico.",
            "Fotografía de producto 'Chronos': Composición, iluminación y retoque profesional.",
            "Propuestas de branding para diversos proyectos académicos.",
        ],
        /*
        visualSystem: {
            palette: [
                { name: "Base", hex: "#FAF8F5" },
                { name: "Texto", hex: "#121212" },
                { name: "Acento", hex: "#C46A3B" },
            ],
            typography: { primary: "Plus Jakarta Sans", notes: "Tipografía moderna y versátil para proyectos editoriales" },
            rules: [
                "Jerarquía visual clara en composiciones editoriales",
                "Uso consistente de retículas y sistemas de maquetación",
            ],
        },
        */
        gallery: [
            {
                src: "/assets/projects/proyectos-universitarios-revista.png",
                alt: "Portada revista Video Juego - Diseño editorial UPC",
                ratio: "fourThree",
                fit: "contain",
                bg: "#1a1a1a",
            },
            {
                src: "/assets/projects/proyectos-universitarios-chronos.png",
                alt: "Fotografía de producto Chronos - Proyecto UPC",
                ratio: "fourThree",
                fit: "contain",
                bg: "#e8f4f8",
            },
        ],
        result:
            "Los proyectos universitarios permitieron consolidar habilidades técnicas en diseño gráfico, editorial y fotografía de producto, preparando una base sólida para el trabajo profesional. Cada pieza refleja atención al detalle y comprensión de los principios fundamentales del diseño.",
        learnings: [
            "El diseño editorial requiere equilibrio entre creatividad y legibilidad.",
            "La fotografía de producto profesional combina técnica, iluminación y post-producción.",
            "Los proyectos académicos son oportunidades para experimentar sin límites comerciales.",
        ],
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
