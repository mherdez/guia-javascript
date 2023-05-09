# Introducción


## Qué es Javascript ?

JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web.

<div style="text-align: center;">
<img src = "https://64.media.tumblr.com/e211eb18c18f92b474895b6bcb5ef44a/4e735dd086807a66-39/s500x750/b9ec4fd7fabc0212c56f0bc265921fb334718229.png" />
</div>

- **HTML** es el lenguaje de marcado que usamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o insertando imágenes y videos en la página.
- **CSS** es un lenguaje de reglas de estilo que usamos para aplicar estilo a nuestro contenido HTML, por ejemplo, establecer colores de fondo y tipos de letra, y distribuir nuestro contenido en múltiples columnas.
- **JavaScript** es un lenguaje de secuencias de comandos que te permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y prácticamente todo lo demás. (Está bien, no todo, pero es sorprendente lo que puedes lograr con unas pocas líneas de código JavaScript).

## Agregando Javascript

JavaScript se aplica a las páginas HTML de manera similar a CSS. Solo que en lugar de usar `<link>` y `<style>` se utiliza el elemento `<script>`.

### JavaScript interno

Se agrega en el `head`, justo antes de tu etiqueta de cierre `</head>`.

```html
<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<script>
			alert('1, 2, 3... probando.');
		</script>
	</head>

	<body>
		<h1>Fundamentos de JavaScript</h1>
	</body>
</html>
```

### JavaScript externo

En un archivo externo con la extensión `.js`, ya que así es como se reconoce como JavaScript.

```html
<script src="script.js" defer></script>
```

::: tip Estrategia para cargar de script

En los ejemplos internos y externos, JavaScript se carga y se ejecuta en el encabezado del documento, antes de analizar el cuerpo HTML. Esto podría causar un error, por lo que se ha utilizado algunas construcciones para solucionarlo.

Se usa una función de JavaScript más moderno para resolver el problema, el atributo `defer`, que le dice al navegador que continúe descargando el contenido HTML una vez que se ha alcanzado la etiqueta del elemento
`<script>`.

En este caso, tanto el script como el HTML se cargarán simultáneamente y el código funcionará.

:::

:::warning Como se hacía antes
Una solución pasada de moda a este problema solía ser colocar tu elemento script justo en la parte inferior del cuerpo (por ejemplo, justo antes de la etiqueta `</body>`), para que se cargara después de haber procesado todo el HTML. El problema con esta solución es que la carga/procesamiento del script está completamente bloqueado hasta que se haya cargado el DOM HTML. En sitios muy grandes con mucho JavaScript, esto puede causar un importante problema de rendimiento y ralentizar tu sitio.
:::

### JavaScript en línea

:::danger Evitar

En ocasiones se puede encontrar fragmentos de código JavaScript real dentro de HTML.

Sin embargo, se considera mala práctica y se debe evitar su uso de esta manera.
:::

```html
<button onclick="createParagraph()">Click me!</button>

<script>
	function createParagraph() {
		let para = document.createElement('p');
		para.textContent = 'You clicked the button!';
		document.body.appendChild(para);
	}
</script>
```

## Comentarios

Los comentarios son muy útiles y deberías utilizarlos con frecuencia, especialmente para aplicaciones grandes. Hay dos tipos:

- Un comentario de una sola línea se escribe después de una doble barra inclinada (//)

```js
// soy un comentario
```

- Se escribe un comentario de varias líneas entre las cadenas /\* y \*/

```js
/*
  Yo también soy
  un comentario
  pero multilíneas
*/
```

## Manejo de la consola

A través del inspector de elementos, se encuentra la pestaña de consola. La consola es una herramienta que nos ayuda a depurar el desarrollo y ejecución.

La consola web aparece en la parte inferior de la ventana del navegador. En la parte inferior de la consola hay una línea de entrada que puedes usar para ingresar JavaScript.

```js
console.log('Hola mundo 👋');
```
