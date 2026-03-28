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
        title: "Brochure — Unidos por GPS",
        subtitle: "Brochure comercial para empresas de taxi — monitoreo GPS vehicular.",
        year: "2026",
        location: "Lima, Perú",
        role: "Diseño de identidad visual y material corporativo",
        tags: ["Branding", "Diseño Editorial", "Marketing Comercial", "Brochure", "GPS Vehicular"],
        cover: {
            src: "/assets/projects/unidos-por-gps/taxi-p01.jpg",
            alt: "Portada brochure Unidos por GPS — Control total para tu flota de taxis",
        },
        featured: true,
        context:
            "Unidos por GPS es una empresa peruana de monitoreo satelital vehicular GPS con más de 13 años de experiencia, cobertura nacional e internacional y servidor propio. El encargo fue diseñar un brochure comercial dirigido a empresas de taxi que necesitan controlar su flota: el material debía comunicar los riesgos del negocio sin tecnología GPS, explicar cómo funciona el sistema y presentar los planes de contratación de forma clara y persuasiva.",
        slogans: [
            "Control total para tu flota de taxis",
            "Instalación 100% Oculta y Segura",
        ],
        goals: [
            "Comunicar de forma directa los problemas que enfrentan las empresas de taxi sin GPS: robo de vehículos, conductores fuera de ruta y pérdida de productividad.",
            "Explicar el funcionamiento del sistema en 3 pasos simples: instalación oculta, monitoreo en tiempo real y control total del vehículo.",
            "Presentar los beneficios concretos: control de unidades, control de conductores y mayor seguridad con apagado remoto.",
            "Mostrar los planes de precios (S/50 mensual / S/500 anual) de forma atractiva para facilitar la decisión de compra.",
        ],
        deliverables: [
            "Brochure de 7 páginas: portada, presentación de empresa, problema del mercado, cómo funciona, beneficios, planes y precios, y contacto.",
            "Diseño con paleta corporativa azul oscuro y dorado, tipografía bold y fotografía de flota de taxis.",
            "Material listo para distribución digital y presentación comercial en campo.",
        ],
        gallery: [
            { src: "/assets/projects/unidos-por-gps/taxi-p01.jpg", alt: "Brochure Taxi — Página 1", ratio: "portrait", fit: "contain", bg: "#0D1B3E" },
            { src: "/assets/projects/unidos-por-gps/taxi-p02.jpg", alt: "Brochure Taxi — Página 2", ratio: "portrait", fit: "contain", bg: "#0D1B3E" },
            { src: "/assets/projects/unidos-por-gps/taxi-p03.jpg", alt: "Brochure Taxi — Página 3", ratio: "portrait", fit: "contain", bg: "#0D1B3E" },
            { src: "/assets/projects/unidos-por-gps/taxi-p04.jpg", alt: "Brochure Taxi — Página 4", ratio: "portrait", fit: "contain", bg: "#0D1B3E" },
            { src: "/assets/projects/unidos-por-gps/taxi-p05.jpg", alt: "Brochure Taxi — Página 5", ratio: "portrait", fit: "contain", bg: "#0D1B3E" },
            { src: "/assets/projects/unidos-por-gps/taxi-p06.jpg", alt: "Brochure Taxi — Página 6", ratio: "portrait", fit: "contain", bg: "#0D1B3E" },
            { src: "/assets/projects/unidos-por-gps/taxi-p07.jpg", alt: "Brochure Taxi — Página 7", ratio: "portrait", fit: "contain", bg: "#0D1B3E" },
        ],
        result:
            `Se entregó un brochure de 7 páginas que acompaña al equipo comercial en sus visitas a empresas de taxi. El material traduce la propuesta técnica en beneficios concretos para el negocio: control de flota, seguridad con apagado remoto y monitoreo 24/7. La estructura clara — problema, solución, planes y precios — facilita la comprensión y acelera la decisión del cliente.`,
        learnings: [
            `Para un servicio técnico como el GPS, lo más importante es mostrar el problema que resuelve antes de explicar cómo funciona.`,
            `La estructura del brochure (problema → solución → beneficios → precio) sigue una lógica de ventas que guía naturalmente al cliente hacia la decisión.`,
            `El diseño debe equilibrar profesionalismo corporativo con claridad visual para que cualquier empresario entienda el mensaje de un vistazo.`,
        ],
    },

    {
        slug: "tienda-antay",
        category: "professional",
        title: "Identidad visual — Estación Antay",
        subtitle: "Identidad visual para cafetería turística en Cajatambo.",
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
            `Estación Antay es una cafetería ubicada en Cajatambo, provincia de Lima, que recibe turistas nacionales y extranjeros que visitan la zona serrana. Su propuesta es un ambiente acogedor y auténtico, con música acústica en vivo, que invita a detenerse y compartir. El reto fue construir una identidad visual que capturara esa experiencia — calidez, arraigo territorial y hospitalidad — para conectar con viajeros que buscan algo genuino, más allá del turismo genérico.`,
        slogans: [
            `Estación Antay: “El placer de compartir”`,
            `Marca paraguas: “Donde Cajatambo se encuentra con el mundo”`,
        ],
        goals: [
            `Construir una identidad de marca que refleje la experiencia única del lugar: territorio, calidez y cultura local.`,
            `Posicionar al café como referente en Cajatambo para turistas nacionales y extranjeros.`,
            `Desarrollar un sistema visual replicable en señalética, redes sociales y material impreso.`,
        ],
        deliverables: [
            `Identidad visual: logo, paleta de colores, tipografías y concepto gráfico con identidad territorial.`,
            `Aplicaciones de marca en materiales físicos y digitales.`,
            `Fotografía de producto para comunicar la propuesta de valor del café.`,
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
                src: "/assets/antay-logo.jpg",
                alt: "Logotipo Estación Antay",
                ratio: "square",
                fit: "contain",
                bg: "#000000",
            },
            {
                src: "/assets/projects/tienda-antay-branding.png",
                alt: "Aplicación de identidad visual — Estación Antay",
                ratio: "square",
            },
        ],
        result:
            `Estación Antay logró posicionarse como punto de encuentro cultural en la provincia de Cajatambo. La identidad visual coherente generó reconocimiento espontáneo entre turistas y residentes locales, consolidando al café como referente de la experiencia gastronómica y cultural de la zona. La marca se convirtió en parte del paisaje del destino — algo que la gente recuerda y recomienda.`,
        learnings: [
            `El branding de un negocio local debe conectar con el territorio: los elementos del lugar son el diferenciador más auténtico.`,
            `Una identidad visual consistente construye top of mind incluso sin pauta publicitaria.`,
            `El boca a boca se acelera cuando la marca tiene una estética que la gente quiere fotografiar y compartir.`,
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
            `Trabajo final del curso Diseño Gráfico 2 en la UPC. IWAY es un proyecto de robot educativo creado como ejercicio académico, con el objetivo de desarrollar un manual de marca completo desde cero: desde la construcción del logotipo hasta su aplicación en papelería y plataformas digitales. El proyecto buscaba demostrar el dominio de los principios de identidad corporativa y consistencia visual.`,
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
            `Trabajos desarrollados en los cursos de Diseño Gráfico 1 y Diseño Gráfico 2 de la UPC. Incluyen proyectos de diseño editorial, fotografía de producto e identidad de marca, aplicando metodologías académicas con enfoque práctico. Cada pieza responde a un brief de curso con criterios de composición, tipografía, retícula y comunicación visual.`,
        goals: [
            `Aplicar principios de diseño editorial en publicaciones impresas y digitales (Diseño Gráfico 1).`,
            `Desarrollar identidades visuales coherentes y sistemas de marca (Diseño Gráfico 2).`,
            `Practicar técnicas de fotografía de producto y retoque digital como parte de la producción visual.`,
        ],
        deliverables: [
            `Diseño Gráfico 1 — Revista 'Video Juego': diseño editorial con portada, maquetación y sistema gráfico.`,
            `Diseño Gráfico 1 — Fotografía de producto 'Chronos': composición, iluminación y retoque.`,
            `Diseño Gráfico 2 — Proyectos de identidad y aplicaciones de marca en distintos soportes.`,
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
            {
                src: "/assets/projects/tienda-antay-producto2.jpg",
                alt: "Fotografía de producto — Estación Antay",
                ratio: "fourThree",
                fit: "contain",
                bg: "#f5f0eb",
            },
        ],
        result:
            `Los cursos de Diseño Gráfico 1 y 2 permitieron consolidar habilidades técnicas en diseño editorial, fotografía de producto e identidad de marca. Cada proyecto implicó aplicar una metodología de diseño completa — desde el brief hasta la pieza final — desarrollando criterio visual y atención al detalle.`,
        learnings: [
            `El diseño editorial requiere equilibrio entre creatividad, jerarquía visual y legibilidad.`,
            `La fotografía de producto profesional combina técnica, iluminación y post-producción cuidadosa.`,
            `Los proyectos académicos son el espacio ideal para experimentar, equivocarse y aprender con libertad.`,
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
