# Javeriana Lead Manager

Aplicación web para explorar programas académicos de la Pontificia Universidad Javeriana y captar prospectos (leads) a través de un formulario de registro.



## Instalación y ejecución local

```bash
# 1. Clona el repositorio o descomprime el zip
cd javeriana-prueba

# 2. Instala las dependencias
pnpm install

# 3. Inicia el servidor de desarrollo
pnpm dev
```

La aplicación estará disponible en `http://localhost:5173`.

### Otros comandos disponibles

```bash
pnpm build      # Compila para producción (TypeScript + Vite)
pnpm preview    # Sirve el build de producción localmente
pnpm lint       # Ejecuta ESLint sobre todo el proyecto
```

---

## Estructura del proyecto

```
src/
├── app/
│   ├── layout/          # MainLayout: estructura base con Header
│   ├── pages/           # HomePage y LeadsPage
│   └── providers/       # ThemeProvider y contexto de tema
├── features/
│   ├── leads/           # Formulario, schema Zod, hook de storage, tipos
│   └── programs/        # Cards, mock data, tipos de programa
└── shared/
    ├── components/      # Componentes reutilizables (filtros, paginación, modales)
    ├── hooks/           # useAdvancedFilter, useDebounce, useFetch
    └── lib/utils/       # normalizeText
```

---

## Decisiones técnicas

### Stack principal

- **React 19 + TypeScript** — tipado estático en toda la aplicación, desde los modelos de datos hasta las props de los componentes.
- **Vite 8** — bundler con HMR instantáneo. Se eligió sobre CRA por su velocidad tanto en desarrollo como en build.
- **Tailwind CSS v4** — integrado como plugin de Vite (`@tailwindcss/vite`), eliminando la necesidad de un archivo de configuración separado. Los tokens de diseño (colores, sombras, bordes) se definen como variables CSS personalizadas para facilitar el theming claro/oscuro.

### Enrutamiento

- **React Router DOM v7** con rutas declarativas en `App.tsx`. Las rutas no reconocidas redirigen a `/` con `<Navigate replace />`.

### Formularios y validación

- **React Hook Form** junto con **Zod** para la validación del formulario de leads. El schema centraliza las reglas (nombre, email con dominio `@javeriana.edu.co`, programa) y los mensajes de error, manteniendo el componente de formulario libre de lógica de validación.

### Persistencia de leads

- Los leads se guardan en `localStorage` mediante el hook `useLeadStorage`. Al registrar un lead se verifica duplicidad por email antes de permitir el guardado.

### Carga de programas

- El hook `useFetch` consume la API externa de Mockaroo. Si la petición falla (red caída, cuota agotada), carga automáticamente el mock local `PROGRAMS_FALLBACK`, garantizando que la UI nunca quede vacía.

### Filtrado y búsqueda

- `useAdvancedFilter` combina búsqueda por texto y filtro por categoría dentro de un `useMemo`, evitando recálculos innecesarios.
- La búsqueda usa `normalizeText`, que aplica `NFD` + eliminación de diacríticos y `toLowerCase`, permitiendo buscar `matematica` y encontrar `Matemática`.
- El input de búsqueda tiene debounce de 400 ms (`useDebounce`) para no disparar el filtro en cada keystroke.

### Arquitectura por features

El código se organiza en `features/` (lógica de dominio: leads, programs) y `shared/` (componentes y hooks reutilizables sin acoplamiento al dominio). Esto facilita escalar el proyecto añadiendo nuevas features sin contaminar la capa compartida.
