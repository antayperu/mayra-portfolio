# Guía de Contribución - Metodología Antay

Bienvenido al proyecto **mayra-portfolio**. Este documento describe las convenciones y procesos que seguimos para mantener un código de alta calidad.

---

## 📋 Tabla de Contenidos

- [Convenciones de Commits](#convenciones-de-commits)
- [Proceso de Gates](#proceso-de-gates)
- [Branching Strategy](#branching-strategy)
- [Pull Request Process](#pull-request-process)
- [Estándares de Código](#estándares-de-código)

---

## 📝 Convenciones de Commits

Seguimos el formato **Conventional Commits** adaptado a la Metodología Antay.

### Formato
```
tipo(scope): descripción breve en español

[Descripción detallada opcional]

[Referencias opcionales]
```

### Tipos Válidos

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat(gallery): añadir lazy loading de imágenes` |
| `fix` | Corrección de bug | `fix(navbar): resolver toggle de menú móvil` |
| `docs` | Cambios en documentación | `docs(readme): actualizar instrucciones de instalación` |
| `style` | Cambios de formato/estilo (no afectan lógica) | `style(home): ajustar espaciado en sección hero` |
| `refactor` | Refactorización sin cambiar funcionalidad | `refactor(projects): modularizar componente de tarjetas` |
| `test` | Añadir o modificar tests | `test(navbar): añadir tests unitarios` |
| `chore` | Tareas de mantenimiento | `chore(deps): actualizar dependencias de React` |

### Scopes Comunes

- `navbar` - Componente de navegación
- `gallery` - Galería de imágenes
- `home` - Página principal
- `projects` - Sección de proyectos
- `contact` - Formulario de contacto
- `deps` - Dependencias
- `config` - Configuración
- `docops` - DOCOPS y metodología

### Ejemplos Completos

#### Commit Simple
```bash
git commit -m "feat(gallery): implementar lazy loading de imágenes"
```

#### Commit con Descripción Detallada
```bash
git commit -m "fix(navbar): corregir toggle de menú móvil

- Añadido estado para controlar apertura/cierre
- Corregido z-index para overlay
- Mejorada accesibilidad con aria-labels

Notion Task: Corregir navegación móvil
Issue: #42"
```

### Configurar Plantilla de Commits

Para usar la plantilla automáticamente:
```bash
git config commit.template .gitmessage
```

Ahora cada `git commit` (sin `-m`) abrirá tu editor con la plantilla.

---

## 🚪 Proceso de Gates

La Metodología Antay define **Gates de Calidad** que deben pasarse en momentos específicos del desarrollo.

### Gate 0: Preflight Check

**Cuándo**: Antes de iniciar cualquier trabajo

**Propósito**: Validar que el entorno está correctamente configurado

**Comando**:
```bash
npm run gate0
```

**Validaciones**:
- ✅ Archivo `.env` existe
- ✅ Variables de entorno requeridas están presentes
- ✅ Conexión con Notion API funciona
- ✅ Git working tree está limpio
- ✅ Directorios requeridos existen

**Resultado**:
- `PASS`: Puedes proceder con el trabajo
- `FAIL`: Debes corregir los problemas antes de continuar

---

### Gate 3: Verification

**Cuándo**: Antes de hacer commit

**Propósito**: Validar que los cambios cumplen con estándares de calidad

**Comando**:
```bash
npm run gate3
```

**Validaciones**:
- ✅ Linting pasa sin errores (`npm run lint`)
- ✅ Build de producción exitoso (`npm run build`)
- ✅ No hay secretos en el código
- ✅ Sincronización con Notion exitosa (opcional)

**Resultado**:
- `PASS`: Puedes hacer commit
- `FAIL`: Debes corregir los problemas antes de commit

---

### Flujo de Trabajo Completo

```bash
# 1. Antes de iniciar trabajo
npm run gate0

# 2. Realizar cambios en el código
# ... editar archivos ...

# 3. Antes de commit
npm run gate3

# 4. Si Gate 3 pasa, hacer commit
git add .
git commit
# (Se abrirá plantilla de commit)

# 5. Push a GitHub
git push origin master
```

---

## 🌿 Branching Strategy

### Branches Principales

- **`master`**: Producción (protegido)
  - Siempre deployable
  - Requiere pull request para merge
  - Deploy automático a Netlify

- **`develop`**: Desarrollo (opcional para proyectos grandes)
  - Integración de features
  - Testing antes de merge a master

### Branches de Trabajo

Para features o fixes:
```bash
# Feature
git checkout -b feature/nombre-descriptivo

# Fix
git checkout -b fix/descripcion-del-bug

# Docs
git checkout -b docs/que-se-documenta
```

**Ejemplos**:
- `feature/lazy-loading-gallery`
- `fix/mobile-menu-toggle`
- `docs/update-readme`

### Merge a Master

1. Asegurarte que tu branch está actualizado:
   ```bash
   git checkout master
   git pull origin master
   git checkout tu-branch
   git rebase master
   ```

2. Ejecutar Gate 3:
   ```bash
   npm run gate3
   ```

3. Crear Pull Request (si aplica) o merge directo:
   ```bash
   git checkout master
   git merge tu-branch
   git push origin master
   ```

---

## 🔄 Pull Request Process

### Crear Pull Request

1. **Título**: Usar formato de commit
   ```
   feat(gallery): implementar lazy loading de imágenes
   ```

2. **Descripción**: Incluir
   - ¿Qué cambia?
   - ¿Por qué es necesario?
   - ¿Cómo se probó?
   - Screenshots (si aplica)
   - Referencias a Notion/Issues

3. **Checklist**:
   ```markdown
   - [ ] Gate 0 pasado
   - [ ] Gate 3 pasado
   - [ ] Linting sin errores
   - [ ] Build exitoso
   - [ ] Probado localmente
   - [ ] Documentación actualizada (si aplica)
   - [ ] Notion sincronizado
   ```

### Revisión de Code

- Al menos 1 aprobación requerida (si hay equipo)
- Resolver todos los comentarios
- Re-ejecutar Gate 3 después de cambios

---

## 💻 Estándares de Código

### TypeScript/React

- **Componentes funcionales** con hooks
- **Props tipadas** con TypeScript interfaces
- **Nombres descriptivos** para variables y funciones
- **Comentarios** solo cuando la lógica no es obvia

### Estilos (Tailwind CSS)

- Usar clases de Tailwind en lugar de CSS custom
- Mantener consistencia en spacing (`p-4`, `m-2`, etc.)
- Responsive design: mobile-first (`sm:`, `md:`, `lg:`)

### Estructura de Archivos

- Un componente por archivo
- Nombres de archivos en PascalCase para componentes
- Agrupar archivos relacionados en carpetas

### Linting

Ejecutar antes de commit:
```bash
npm run lint
```

Configuración en `.eslintrc` (si existe) o en `package.json`.

---

## 🔐 Seguridad

### Secretos

- **NUNCA** commitear archivos `.env`
- Usar `.env.template` para documentar variables requeridas
- Gate 3 valida que no haya secretos en código

### Variables de Entorno

Formato en `.env`:
```env
NOTION_API_TOKEN=secret_...
NOTION_DATABASE_ID=...
```

---

## 📞 Soporte

Si tienes dudas sobre el proceso:

1. Revisar [`METHODOLOGY.md`](./METHODOLOGY.md) para detalles de la metodología
2. Revisar [`README.md`](./README.md) para comandos y setup
3. Consultar con el equipo o mantainer del proyecto

---

**¡Gracias por contribuir siguiendo la Metodología Antay! 🚀**
