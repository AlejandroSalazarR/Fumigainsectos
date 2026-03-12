# 🦟 FUMIGAINSECTOS S.A.S. - Landing Page

Landing Page profesional desarrollada en React para la empresa de control de plagas **FUMIGAINSECTOS S.A.S.**.

## 🚀 Características

- ✅ Single Page Application (SPA) completamente funcional
- ✅ Diseño moderno y responsive (Mobile First)
- ✅ Navegación fluida con scroll suave
- ✅ Carrusel de imágenes totalmente funcional en Hero
- ✅ Carrusel de plagas con tarjetas desplegables
- ✅ Botón flotante de WhatsApp con menú de opciones
- ✅ Animaciones suaves y transiciones elegantes
- ✅ Optimizado para SEO y accesibilidad
- ✅ Sin dependencias de base de datos

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.jsx              # Barra de navegación fija
│   ├── Navbar.css
│   ├── Hero.jsx                # Hero con carrusel automático
│   ├── Hero.css
│   ├── QuienesSomos.jsx        # Sección Quiénes Somos
│   ├── QuienesSomos.css
│   ├── Servicios.jsx           # Portafolio de servicios
│   ├── Servicios.css
│   ├── Plagas.jsx              # Carrusel de plagas
│   ├── Plagas.css
│   ├── Footer.jsx              # Footer con información
│   ├── Footer.css
│   ├── WhatsAppButton.jsx      # Botón flotante de WhatsApp
│   └── WhatsAppButton.css
├── App.jsx                     # Componente principal
├── App.css                     # Estilos globales
├── main.jsx                    # Punto de entrada
└── index.css                   # Estilos base
```

## 🎨 Secciones de la Página

### 1. **Navbar**
- Logo de la empresa con animación
- Navegación fluida a todas las secciones
- Responsive con menú hamburguesa en móvil
- Botón destacado con teléfono de contacto

### 2. **Hero Section (Carrusel)**
- 3 slides con auto-avance cada 5 segundos
- Botones de navegación (anterior/siguiente)
- Indicadores de posición clickeables
- CTA principal hacia WhatsApp
- Estadísticas de la empresa

### 3. **Quiénes Somos**
- Información de la empresa
- Misión y Visión en tarjetas elegantes
- Valores corporativos con iconos
- Política Integrada
- Años de experiencia destacados

### 4. **Servicios**
- Grid de 7 servicios principales
- Tarjetas interactivas con hover effects
- Certificaciones y garantías
- CTA para cotización

### 5. **Plagas (Con Carrusel)**
- 3 categorías: Rastreros, Voladores, Roedores
- Carrusel en móvil, grid en desktop
- Tarjetas desplegables con lista de plagas
- Descripciones detalladas
- CTA para servicio urgente

### 6. **Footer**
- Información completa de contacto
- Dirección de oficina en Medellín
- Horarios de atención
- Enlaces rápidos
- Botones de contacto (WhatsApp, teléfono, email)
- Redes sociales

### 7. **Botón WhatsApp Flotante**
- Siempre visible al hacer scroll
- Menú desplegable con opciones rápidas
- 3 tipos de mensajes predefinidos
- Acceso directo a números de contacto

## 🎯 Funcionalidades Interactivas

### Carrusel Hero
- ✅ Auto-avance cada 5 segundos
- ✅ Botones de navegación funcionales
- ✅ Indicadores clickeables
- ✅ Transiciones suaves entre slides

### Carrusel de Plagas
- ✅ Navegación por categorías
- ✅ Tarjetas desplegables (expandir/contraer)
- ✅ Responsive: carrusel en móvil, grid en desktop
- ✅ Animaciones fluidas

### Navegación
- ✅ Scroll suave entre secciones
- ✅ Navbar fija con efecto al hacer scroll
- ✅ Menú móvil funcional

## 📱 Responsive Design

- **Desktop (>968px)**: Layout completo con todas las columnas
- **Tablet (768px-968px)**: Adaptación a 2 columnas
- **Mobile (<768px)**: Vista de 1 columna, menú hamburguesa

## 🎨 Paleta de Colores

- **Principal**: `#8fbc3f` (Verde corporativo)
- **Secundario**: `#2c3e50` (Azul oscuro)
- **Acentos**: Gradientes modernos en cada sección
- **Fondo**: Blanco y variaciones de gris

## 🚀 Cómo Ejecutar el Proyecto

### Instalación
```bash
# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev
```
El proyecto estará disponible en `http://localhost:5173`

### Build para Producción
```bash
# Crear build optimizado
npm run build
```

### Preview del Build
```bash
# Previsualizar el build
npm run preview
```

## 📦 Dependencias

- **React 19.2.0**: Framework principal
- **Vite 7.3.1**: Build tool y dev server
- Solo usa CSS puro (sin librerías adicionales de estilos)

## 💡 Mejoras Futuras Sugeridas

1. **Imágenes Reales**
   - Reemplazar los fondos de gradiente por imágenes reales
   - Agregar fotos del equipo y trabajos realizados
   - Logo de la empresa en formato imagen

2. **Optimizaciones**
   - Lazy loading de componentes
   - Optimización de imágenes
   - Service Worker para PWA

3. **Animaciones**
   - Agregar Intersection Observer para animaciones al scroll
   - Más efectos visuales en las transiciones

4. **SEO**
   - Agregar meta tags
   - Implementar Schema.org markup
   - Sitemap XML

5. **Forms**
   - Formulario de contacto
   - Sistema de cotización online

## 📞 Información de Contacto

- **NIT**: 902.033.262-7
- **WhatsApp**: 317-268-18-57
- **Celular**: 317-790-13-50
- **Email**: serviciosfumigainsectossas@gmail.com
- **Dirección**: Carrera 45 N° 92-21 Oficina 401, Barrio Aranjuez, Medellín - Antioquia

## 📄 Licencia

© 2026 FUMIGAINSECTOS S.A.S. Todos los derechos reservados.

---

Desarrollado con ❤️ y React
