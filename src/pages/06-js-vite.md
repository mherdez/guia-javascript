# Javascript con Vite

## Introducción

Javascript con Vite es una combinación de tecnologías que permite construir aplicaciones web modernas de forma rápida y eficiente.

Vite es un paquete de construcción rápido y liviano para aplicaciones web que utiliza el módulo nativo de ES en el navegador para compilar y entregar código rápidamente durante el desarrollo. Esto hace que la recarga en caliente y la actualización de módulos sean extremadamente rápidas, lo que a su vez mejora significativamente la productividad del desarrollador.

Junto con Vite, JS se utiliza para desarrollar aplicaciones web modernas con una arquitectura escalable, modular y mantenible.

## Instalación

1. Asegurarse de tener Node.js instalado. Se puede descargar e instalar desde su sitio oficial: [https://nodejs.org/](https://nodejs.org/)

2. Abrir una terminal o línea de comando y ejecutar el siguiente comando para crear una nueva aplicación de Vite:

```
npm create vite@latest
```

3. Seguir las instrucciones para configurar la aplicación. Eligir la opción "vanilla" para crear una aplicación con Vanilla JS y seguir las instrucciones para configurar las opciones de tu proyecto.

4. Una vez que se complete la configuración, ingresar a la carpeta del proyecto con el siguiente comando:

```
cd nombre-de-tu-proyecto
```

5. Ejecutar el siguiente comando para instalar las dependencias del proyecto:

```
npm install
```

6. Iniciar el servidor de desarrollo de Vite ejecutando el siguiente comando:

```
npm run dev
```

7. Abrir el navegador web en `http://localhost:3000/` se debe visualizar la página de inicio del aplicación.

De esta forma se ha realizado la instalación de Vanilla JS con Vite.

Se puede editar los archivos en la carpeta `src` y el servidor de desarrollo de Vite se actualizará automáticamente para reflejar los cambios.

## Estructura

La estructura de directorios y archivos de un proyecto de Vanilla JS con Vite suele ser la siguiente:

```
- node_modules/
- public/
  - index.html
- src/
  - assets/
  - components/
  - pages/
  - index.js
- package.json
- vite.config.js
```

- `node_modules/`: Carpeta que contiene las dependencias instaladas a través de npm.
- `public/`: Carpeta que contiene archivos públicos, como el archivo HTML principal (`index.html`) y otros recursos como imágenes o archivos de estilos. Esta carpeta se sirve estáticamente desde el servidor de desarrollo o de producción.
- `src/`: Carpeta que contiene el código fuente de la aplicación.
  - `assets/`: Carpeta que contiene los archivos estáticos que se importan en los componentes y páginas, como imágenes, fuentes, iconos, etc.
  - `components/`: Carpeta que contiene los componentes de la aplicación. Los componentes son elementos visuales reutilizables que se utilizan en diferentes partes de la aplicación.
  - `pages/`: Carpeta que contiene las páginas de la aplicación. Las páginas son componentes que representan rutas específicas en la aplicación.
  - `index.js`: Archivo JavaScript principal que importa e inicializa la aplicación.
- `package.json`: Archivo de configuración de npm que contiene la información del proyecto, así como las dependencias y scripts necesarios para la construcción y ejecución de la aplicación.
- `vite.config.js`: Archivo de configuración de Vite que define la configuración de la aplicación, como la configuración del servidor de desarrollo, la configuración de construcción, las opciones de procesamiento de archivos, etc.

## Ventajas

Algunas ventajas de utilizar Vanilla JS con Vite son:

1. **Rápido tiempo de compilación y recarga en caliente:** Vite utiliza una arquitectura de servidor de desarrollo basada en ESM (Módulos de JavaScript) que permite compilar y recargar rápidamente el código en el navegador sin necesidad de recargar la página completa. Esto resulta en un flujo de trabajo más eficiente y rápido durante el desarrollo.

2. **Configuración mínima:** Vite proporciona una configuración mínima predeterminada para proyectos de Vanilla JS que incluye una configuración de servidor de desarrollo rápida y fácil de usar, así como una configuración de construcción optimizada para producir archivos finales más pequeños y eficientes.

3. **Soporte nativo para módulos de JavaScript:** Vite utiliza los módulos de JavaScript nativos para el manejo de dependencias. Esto significa que no es necesario utilizar herramientas adicionales como webpack o rollup para manejar la modularidad en el código.

4. **Soporte para preprocesadores:** Vite tiene soporte integrado para preprocesadores como Sass, Less y Stylus, lo que permite utilizar estilos más avanzados en la aplicación.

5. **Soporte para plugins personalizados:** Vite permite la creación de plugins personalizados para extender su funcionalidad. Esto permite a los desarrolladores crear soluciones específicas para sus proyectos que pueden aumentar la productividad y mejorar la calidad del código.

Vite es una herramienta eficiente y fácil de usar para desarrollar aplicaciones de Vanilla JS. Ofrece una experiencia de desarrollo fluida y rápida, una configuración mínima y soporte nativo para módulos de JavaScript, así como una amplia gama de características y funcionalidades para mejorar la productividad del desarrollador.

## Limitantes

Aunque Vite ofrece muchas ventajas, también tiene algunas limitaciones, como:

1. **Limitado soporte para navegadores antiguos:** Vite utiliza los módulos de JavaScript nativos, que no son compatibles con todos los navegadores. Por lo tanto, si se necesita dar soporte a navegadores antiguos, se necesitará una solución de compatibilidad, lo que puede aumentar la complejidad del proyecto.

2. **Falta de experiencia en comparación con otras herramientas:** Vite es una herramienta relativamente nueva, por lo que la comunidad y la documentación pueden no ser tan amplias o maduras como otras herramientas de desarrollo. Esto puede dificultar el proceso de resolución de problemas y la búsqueda de soluciones a problemas específicos.

3. **Dependencia de la configuración de Vite:** Al utilizar Vite, los desarrolladores pueden depender en gran medida de la configuración predeterminada proporcionada por Vite. Aunque esta configuración es muy buena para la mayoría de los casos de uso, puede ser difícil de personalizar y adaptar a necesidades específicas.

4. **Mayor curva de aprendizaje:** Aunque Vite es relativamente fácil de usar, el aprendizaje de una nueva herramienta puede llevar tiempo y requerir cierta curva de aprendizaje, lo que puede ser un obstáculo para los desarrolladores nuevos o menos experimentados.

En general, a pesar de estas limitantes, Vite sigue siendo una herramienta sólida y efectiva para el desarrollo de aplicaciones de Javascript, y las ventajas superan en gran medida las limitaciones en la mayoría de los casos de uso.