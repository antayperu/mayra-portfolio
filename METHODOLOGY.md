# Metodología Antay Fábrica de Software

Documentación completa de la Metodología Antay aplicada al proyecto **mayra-portfolio**.

---

## 📖 Índice

- [Principios Fundamentales](#principios-fundamentales)
- [DOCOPS: Documentation Operations](#docops-documentation-operations)
- [Gates de Calidad](#gates-de-calidad)
- [Versionado Semántico](#versionado-semántico)
- [Handoff entre Agentes](#handoff-entre-agentes)
- [Flujo de Trabajo Completo](#flujo-de-trabajo-completo)

---

## 🎯 Principios Fundamentales

La Metodología Antay se basa en tres pilares:

### 1. Single Source of Truth (SSOT)

- **Notion**: SSOT para requisitos, tareas y documentación de negocio
- **GitHub**: SSOT para código fuente y control de versiones

### 2. Sincronización Bidireccional (DOCOPS)

Automatización que mantiene Notion y GitHub sincronizados en todo momento.

### 3. Calidad por Diseño (Gates)

Validaciones automáticas en puntos críticos del desarrollo para garantizar calidad.

---

## 🔄 DOCOPS: Documentation Operations

DOCOPS es el sistema de sincronización entre Notion (requisitos) y GitHub (código).

### Arquitectura

```
┌─────────────────┐         DOCOPS          ┌─────────────────┐
│                 │  ◄─────────────────────► │                 │
│     Notion      │    Sincronización       │     GitHub      │
│   (Requisitos)  │      Bidireccional      │     (Código)    │
│                 │                         │                 │
└─────────────────┘                         └─────────────────┘
        │                                            │
        │                                            │
        ▼                                            ▼
  Tareas, Status                              Commits, Tags
  Prioridades                                 Pull Requests
```

### Componentes DOCOPS

#### 1. `docops/docops_config.json`

Schema contract que define:
- IDs de bases de datos Notion
- Nombres de propiedades
- Estados válidos
- Configuración de gates

#### 2. `docops/antay_docops.py`

Biblioteca Python con funciones core:

| Función | Descripción |
|---------|-------------|
| `preflight_check()` | Gate 0: Validación de configuración |
| `query_ready()` | Consulta tareas en estado "Ready" |
| `move_card()` | Actualiza estado de tareas en Notion |
| `append_log()` | Registro de actividades |
| `update_handoff()` | Actualiza handoff entre agentes |

#### 3. Comandos DOCOPS

```bash
# Ver estado de tareas
npm run docops:status

# Sincronizar con Notion
npm run docops:sync
```

### Configuración

1. **Obtener credenciales de Notion**:
   - Crear integración en https://www.notion.so/my-integrations
   - Copiar API token
   - Compartir base de datos con la integración
   - Copiar Database ID de la URL

2. **Configurar `.env`**:
   ```env
   NOTION_API_TOKEN=secret_...
   NOTION_DATABASE_ID=...
   ```

3. **Instalar dependencias**:
   ```bash
   pip install -r docops/requirements.txt
   ```

---

## 🚪 Gates de Calidad

Los Gates son puntos de validación automática que garantizan calidad.

### Gate 0: Preflight Check

**Momento**: Antes de iniciar cualquier trabajo

**Propósito**: Validar que el entorno está correctamente configurado

**Comando**:
```bash
npm run gate0
```

**Validaciones**:

| Check | Descripción | Crítico |
|-------|-------------|---------|
| `.env` existe | Archivo de configuración presente | ✅ Sí |
| Variables de entorno | `NOTION_API_TOKEN`, `NOTION_DATABASE_ID` | ✅ Sí |
| Conexión Notion | API responde correctamente | ✅ Sí |
| Git status | Working tree limpio | ⚠️ Warning |
| Directorios | `docops/`, `scripts/`, `src/` existen | ✅ Sí |

**Resultado**:
- `PASS`: Continuar con el trabajo
- `FAIL`: Corregir problemas antes de proceder

---

### Gate 3: Verification

**Momento**: Antes de hacer commit

**Propósito**: Validar que los cambios cumplen estándares de calidad

**Comando**:
```bash
npm run gate3
```

**Validaciones**:

| Check | Descripción | Crítico |
|-------|-------------|---------|
| Linting | ESLint sin errores | ✅ Sí |
| Build | Compilación exitosa | ✅ Sí |
| Secrets | No hay credenciales en código | ✅ Sí |
| Notion sync | Sincronización exitosa | ⚠️ Warning |

**Resultado**:
- `PASS`: Hacer commit
- `FAIL`: Corregir problemas antes de commit

---

### Otros Gates (Referencia)

La metodología completa incluye:

- **Gate 1**: Análisis de requisitos
- **Gate 2**: Diseño técnico
- **Gate 4**: Testing funcional
- **Gate 5**: Deployment

Para este proyecto, implementamos Gate 0 y Gate 3 como mínimo viable.

---

## 🏷️ Versionado Semántico

### Formato de Tags

```
vMAJOR.MINOR.PATCH-stable-description
```

**Ejemplos**:
- `v1.0.0-stable-initial-release`
- `v1.1.0-stable-lazy-loading-feature`
- `v1.1.1-stable-navbar-bugfix`

### Incremento de Versión

| Tipo | Cuándo | Ejemplo |
|------|--------|---------|
| **MAJOR** | Cambios incompatibles (breaking changes) | `v1.0.0` → `v2.0.0` |
| **MINOR** | Nueva funcionalidad compatible | `v1.0.0` → `v1.1.0` |
| **PATCH** | Corrección de bugs | `v1.0.0` → `v1.0.1` |

### Crear Tag

```bash
# Después de commit
git tag -a v1.0.0-stable-initial-release -m "Initial release with Antay methodology"

# Push tag
git push origin v1.0.0-stable-initial-release
```

### Listar Tags

```bash
git tag -l
```

---

## 🤝 Handoff entre Agentes

Cuando un agente de IA termina su sesión, debe actualizar el handoff para el próximo agente.

### Estructura de Handoff

```json
{
  "timestamp": "2026-01-10T20:00:00",
  "agent": "Antigravity",
  "session_id": "abc123",
  "tasks_completed": [
    "Implementar DOCOPS",
    "Crear documentación"
  ],
  "next_steps": [
    "Configurar credenciales Notion",
    "Ejecutar Gate 0"
  ],
  "notes": "Metodología Antay implementada completamente"
}
```

### Actualizar Handoff

Desde código Python:
```python
from docops.antay_docops import AntayDOCOPS

docops = AntayDOCOPS()
docops.update_handoff({
    "agent": "Antigravity",
    "session_id": "session-123",
    "tasks_completed": ["Tarea 1", "Tarea 2"],
    "next_steps": ["Siguiente paso"],
    "notes": "Notas adicionales"
})
```

---

## 🔄 Flujo de Trabajo Completo

### Para Agentes de IA

```bash
# 1. Cargar contexto
npm run docops:status
git log -5 --oneline

# 2. Ejecutar Gate 0
npm run gate0

# 3. Realizar trabajo
# ... editar código ...

# 4. Ejecutar Gate 3
npm run gate3

# 5. Commit con convención
git add .
git commit
# (Usar plantilla de commit)

# 6. Tag (si es release)
git tag -a v1.0.0-stable-description -m "Release notes"

# 7. Push
git push origin master
git push origin --tags

# 8. Actualizar handoff
python -c "from docops.antay_docops import AntayDOCOPS; ..."
```

### Para Desarrolladores Humanos

```bash
# 1. Pull latest
git pull origin master

# 2. Crear branch (opcional)
git checkout -b feature/mi-feature

# 3. Gate 0
npm run gate0

# 4. Desarrollar
npm run dev
# ... hacer cambios ...

# 5. Gate 3
npm run gate3

# 6. Commit
git commit -m "feat(scope): descripción"

# 7. Push
git push origin feature/mi-feature

# 8. Pull Request (si aplica)
```

---

## 📊 Métricas de Calidad

La metodología Antay rastrea:

- **Gate Pass Rate**: % de gates pasados sin errores
- **Commit Quality**: Adherencia a convenciones
- **Sync Status**: Estado de sincronización Notion-GitHub
- **Build Success Rate**: % de builds exitosos

Estas métricas se pueden consultar en Notion y en logs de DOCOPS.

---

## 🔐 Seguridad

### Manejo de Secretos

1. **Nunca** commitear `.env`
2. Usar `.env.template` para documentar
3. Gate 3 valida ausencia de secretos
4. Rotar credenciales si se exponen

### Validación de Secretos

Gate 3 busca patrones como:
- `NOTION_API_TOKEN=secret_...`
- `password=...`
- `api_key=...`

---

## 📚 Referencias

- **Notion**: https://www.notion.so
- **Conventional Commits**: https://www.conventionalcommits.org
- **Semantic Versioning**: https://semver.org

---

## 🆘 Troubleshooting

### Gate 0 falla en conexión Notion

```bash
# Verificar credenciales
cat .env | grep NOTION

# Verificar conectividad
python -c "from docops.antay_docops import AntayDOCOPS; AntayDOCOPS().preflight_check()"
```

### Gate 3 falla en build

```bash
# Ver errores detallados
npm run build

# Limpiar y reinstalar
rm -rf node_modules dist
npm install
npm run build
```

### DOCOPS no sincroniza

```bash
# Verificar instalación de dependencias
pip install -r docops/requirements.txt

# Ejecutar manualmente
python docops/antay_docops.py sync
```

---

**Metodología Antay Fábrica de Software - v1.0**  
© 2026 Antay Peru - Consultoría
