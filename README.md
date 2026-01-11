# Mayra Ortega - Portfolio Profesional

Portfolio profesional de Mayra Ortega, diseñadora gráfica especializada en branding, contenido para redes sociales y diseño de punto de venta.

🌐 **Live Site**: [https://mayra-ortega.netlify.app/](https://mayra-ortega.netlify.app/)

---

## 🏗️ Stack Tecnológico

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) 18
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/) 3
- **Routing**: [React Router DOM](https://reactrouter.com/) 6
- **Deployment**: [Netlify](https://www.netlify.com/)
- **Metodología**: Antay Software Factory

---

## 📋 Carga de Contexto para Agentes

> **Para agentes de IA que retoman este proyecto:**

### 1. Sincronizar con Notion (SSOT de Requisitos)
```bash
npm run docops:status
```
Esto mostrará las tareas en estado "Ready" desde la base de datos de Notion.

### 2. Revisar Estado de Git (SSOT de Código)
```bash
git status
git log -5 --oneline
git tag -l
```

### 3. Ejecutar Gate 0 (Preflight Check)
```bash
npm run gate0
```
Valida que el entorno esté correctamente configurado antes de iniciar trabajo.

### 4. Estructura del Proyecto
```
mayra-portfolio/
├── docops/                 # DOCOPS - Sincronización Notion-GitHub
│   ├── antay_docops.py    # Biblioteca core
│   ├── docops_config.json # Configuración
│   └── requirements.txt   # Dependencias Python
├── scripts/               # Scripts de automatización
│   ├── gate0_preflight.py # Gate 0: Validación pre-ejecución
│   └── gate3_verification.py # Gate 3: Validación pre-commit
├── src/                   # Código fuente React
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Páginas principales
│   ├── data/             # Datos estáticos (proyectos, etc.)
│   └── App.tsx           # Componente raíz
├── public/               # Assets estáticos
├── .env.template         # Plantilla de variables de entorno
├── .gitmessage          # Plantilla de commits
└── METHODOLOGY.md       # Documentación de metodología

```

### 5. Configuración Inicial
Si es tu primera vez en el proyecto:
```bash
# 1. Copiar plantilla de entorno
cp .env.template .env

# 2. Editar .env con credenciales reales (solicitar al usuario)
# NOTION_API_TOKEN=secret_...
# NOTION_DATABASE_ID=...

# 3. Instalar dependencias Node
npm install

# 4. Instalar dependencias Python (para DOCOPS)
pip install -r docops/requirements.txt

# 5. Configurar plantilla de commits
git config commit.template .gitmessage

# 6. Ejecutar Gate 0
npm run gate0
```

---

## 🚀 Comandos de Desarrollo

### Desarrollo Local
```bash
npm run dev
```
Inicia servidor de desarrollo en `http://localhost:5173`

### Build de Producción
```bash
npm run build
```
Genera build optimizado en `dist/`

### Preview de Build
```bash
npm run preview
```
Preview del build de producción localmente

### Linting
```bash
npm run lint
```
Ejecuta ESLint para validar código TypeScript/React

### Gates de Calidad
```bash
# Gate 0: Preflight Check (antes de iniciar trabajo)
npm run gate0

# Gate 3: Verification (antes de commit)
npm run gate3
```

### DOCOPS
```bash
# Ver estado de tareas en Notion
npm run docops:status

# Sincronizar con Notion
npm run docops:sync
```

---

## 📦 Deployment

El proyecto está configurado para deployment automático en Netlify:

- **Branch de producción**: `master`
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: Especificada en `.nvmrc`

Cada push a `master` dispara un deploy automático.

---

## 🎯 Metodología Antay Software Factory

Este proyecto sigue la **Metodología Antay Fábrica de Software**:

### Principios
- **Notion**: Single Source of Truth (SSOT) para requisitos y tareas
- **GitHub**: SSOT para código
- **DOCOPS**: Sincronización bidireccional automatizada

### Gates de Calidad
- **Gate 0 (Preflight)**: Validación de configuración antes de iniciar
- **Gate 3 (Verification)**: Testing y validación antes de commit

### Convenciones de Commits
Formato: `tipo(scope): descripción`

**Tipos válidos**:
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato/estilo
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Tareas de mantenimiento

**Ejemplos**:
```bash
feat(gallery): implementar lazy loading de imágenes
fix(navbar): corregir toggle de menú móvil
docs(readme): actualizar instrucciones de instalación
```

### Versionado
Tags semánticos: `vX.Y.Z-stable-description`

Ejemplo: `v1.0.0-stable-initial-release`

Para más detalles, consultar [`METHODOLOGY.md`](./METHODOLOGY.md) y [`CONTRIBUTING.md`](./CONTRIBUTING.md).

---

## 📄 Licencia

© 2026 Mayra Ortega. Todos los derechos reservados.

---

## 📞 Contacto

- **Email**: mayra.ortega@example.com
- **LinkedIn**: [Mayra Ortega](https://linkedin.com/in/mayra-ortega)
- **Portfolio**: [https://mayra-ortega.netlify.app/](https://mayra-ortega.netlify.app/)

---

**Desarrollado con ❤️ siguiendo la Metodología Antay Software Factory**
