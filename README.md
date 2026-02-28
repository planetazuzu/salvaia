# SalvAID - Tu Asistente de Primeros Auxilios 🛡️

> Aplicación web progresiva de primeros auxilios con IA. Acceso offline a guías de emergencia y asistente conversacional.

![Estado](https://img.shields.io/badge/Estado-Activo-green)
![Next.js](https://img.shields.io/badge/Next.js-15-blue)
![PWA](https://img.shields.io/badge/PWA-Ready-green)
![License](https://img.shields.io/badge/License-MIT-green)

## 👤 Autor

Construida con Next.js, Tailwind CSS y Genkit, esta aplicación combina un diseño moderno y una funcionalidad robusta para ser una herramienta confiable en momentos críticos.

## Características Principales

- **Guías de Primeros Auxilios**: Instrucciones paso a paso, claras y concisas para diversas situaciones de emergencia como RCP, atragantamiento, quemaduras y más.
- **Asistente de IA (LIA)**: Un asistente conversacional que responde a preguntas sobre primeros auxilios, preparado para conectarse a un modelo de IA local personalizado.
- **Consejos y Noticias con IA**: Una sección dinámica que muestra consejos de salud, desacredita mitos y presenta noticias relevantes. Incluye un generador de contenido basado en IA.
- **Resúmenes con IA**: Cada guía cuenta con un botón para generar un resumen instantáneo de los puntos clave, utilizando un modelo de IA para extraer la información más importante.
- **Motor de Audio (Texto a Voz)**: Funcionalidad para "leer en voz alta" las guías, mejorando la accesibilidad y permitiendo seguir las instrucciones sin mirar la pantalla.
- **Funcionalidad 100% Offline**: Gracias a **Dexie.js**, todas las guías, consejos e imágenes se almacenan en el navegador después de la primera visita, garantizando que la aplicación sea completamente funcional sin conexión a internet.
- **Instalable como PWA**: La aplicación se puede instalar en cualquier dispositivo (móvil o de escritorio) para un acceso rápido y directo desde la pantalla de inicio.
- **Interfaz Fluida y Moderna**: Transiciones animadas entre páginas y una paleta de colores profesional que hacen la experiencia de usuario agradable y clara.

## Pila Tecnológica

- **Framework**: Next.js (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS con Shadcn/ui para componentes
- **Inteligencia Artificial**: Genkit para la orquestación de flujos de IA
- **Base de Datos Offline**: Dexie.js para almacenamiento en IndexedDB
- **Animaciones**: Framer Motion
- **Servidor de IA Local**: Preparado para conectarse a cualquier modelo de IA local (ej. Ollama).

## Requisitos y Configuración

### Conexión a la IA Local

El asistente de IA (`/lia`) está configurado para hacer llamadas a un endpoint de un modelo de lenguaje que se ejecuta localmente.

Para que funcione, debes:
1.  Asegurarte de que tu servidor de IA local esté en ejecución.
2.  Abrir el archivo `src/ai/flows/educational-assistant-remote.ts`.
3.  Modificar la variable `localAiEndpoint` con la URL y el puerto correctos de tu servidor.

```typescript
// src/ai/flows/educational-assistant-remote.ts

//...
const localAiEndpoint = 'http://localhost:11434/api/chat'; // <-- ¡Cambia esta URL!
//...
```

## Scripts Disponibles

- **`npm run dev`**: Inicia el servidor de desarrollo de Next.js.
- **`npm run build`**: Compila la aplicación para producción.
- **`npm run start`**: Inicia el servidor de producción.
- **`npm run genkit:dev`**: Inicia el servidor de desarrollo de Genkit para los flujos de IA.

---

**Javier Fernández** · [@planetazuzu](https://github.com/planetazuzu)  
TES · Developer · La Rioja 🇪🇸
