# Javascript DOM

[es.javascript.info](https://es.javascript.info/)

## Document

La interfaz Document representa cualquier página web cargada en el navegador y sirve como punto de entrada al contenido de la página web, que es el árbol DOM (Document Object Model).

## Elementos

### Creación

```js
document.createElement(tag);
```

Crea un nuevo nodo elemento con la etiqueta HTML dada.

Ejemplo

```js
let div = document.createElement('div');

document.createTextNode(text);
```

Crea un nuevo nodo texto con el texto dado:

```js
let textNode = document.createTextNode('Aquí estoy');
```

La mayoría de las veces se necesitan crear _nodos de elemento_, como el `div` para el mensaje.

### Creando el mensaje

Crear el div de mensaje toma 3 pasos:

```js
// 1. Crear elemento <div>
let div = document.createElement('div');

// 2. Establecer su clase a "alert"
div.className = 'alert';

// 3. Agregar el contenido
div.innerHTML = '<strong>¡Hola!</strong> Usted ha leído un importante mensaje.';
```

### Inserción

El método `appendChild()` agrega un nodo al final de la lista de hijos de un nodo padre especificado.

```js
node.appendChild(aChild);
```

Ejemplo

```js
// Create a new paragraph element, and append it to the end of the document body

let p = document.createElement('p');
document.body.appendChild(p);
```

### Eliminación

```js
node.remove();
```

Ejemplo

```html
<style>
	.alert {
		padding: 15px;
		border: 1px solid #d6e9c6;
		border-radius: 4px;
		color: #3c763d;
		background-color: #dff0d8;
	}
</style>

<script>
	let div = document.createElement('div');
	div.className = 'alert';
	div.innerHTML =
		'<strong>¡Hola!</strong> Usted ha leído un importante mensaje.';

	document.body.append(div);
	setTimeout(() => div.remove(), 1000);
</script>
```

## Selección

### document.querySelector()

Devuelve el primer elemento del documento que coincide con el grupo especificado de selectores.

Sintaxis

```js
element = document.querySelector(selectores);
```

- Selector de tipo
- Selector de clase
- Selector de id
- Selector de atributos

### document.querySelectorAll()

Devuelve una lista de los elementos del documento que coinciden con el grupo especificado de selectores.

Sintaxis

```js
elements = document.querySelectorAll(selectores);
```

## Eventos

Un evento es una señal de que algo ocurrió. Todos los nodos del DOM generan dichas señales (pero los eventos no est{an limitados sólo al DOM).

Aquí hay una lista con los eventos del DOM más utilizados, solo para echar un vistazo:

### Eventos del mouse:

- `click` – cuando el mouse hace click sobre un elemento (los dispositivos touch lo generan con un toque).
- `contextmenu` – cuando el mouse hace click derecho sobre un elemento.
- `mouseover` / `mouseout` – cuando el cursor del mouse ingresa/abandona un elemento.
- `mousedown` / `mouseup` – cuando el botón del mouse es presionado/soltado sobre un elemento.
- `mousemove` – cuando el mouse se mueve.

### Eventos del teclado:

- `keydown` / `keyup` – cuando se presiona/suelta una tecla.

### Eventos del elemento form:

- `submit` – cuando el visitante envía un `<form>`.
- `focus` – cuando el visitante se centra sobre un elemento, por ejemplo un `<input>`.

### Eventos del documento:

- `DOMContentLoaded` --cuando el HTML es cargado y procesado, el DOM está completamente construido

### Eventos del CSS:

- `transitionend` – cuando una animación CSS concluye.

### Controladores de eventos

Para reaccionar con eventos podemos asignar un handler (controlador) el cual es una función que se ejecuta en caso de un evento.

Los handlers son una forma de ejecutar código JavaScript en caso de acciones por parte del usuario.

### Atributo HTML

Un handler puede ser establecido en el HTML con un atributo llamado `on<event>`.

Por ejemplo, para asignar un handler _click_ para un `input` podemos usar `onclick`, como aquí:

```html
<input value="Click me" onclick="alert('Click!')" type="button" />
```

Al hacer click, el código dentro de `onclick` se ejecuta.

### Propiedad del DOM

Podemos asignar un handler usando una propiedad del DOM `on<event>`.

Por ejemplo, **elem.onclick**:

```html
<input id="elem" type="button" value="Haz click en mí" />
<script>
	elem.onclick = function () {
		alert('¡Gracias!');
	};
</script>
```

### addEventListener()

El problema fundamental de las formas ya mencionadas para asignar handlers es que no podemos asignar multiples handlers a un solo evento.

Digamos que una parte de nuestro código quiere resaltar un botón al hacer click, y otra quiere mostrar un mensaje en el mismo click.

Asignar dos handlers de eventos iguales, la segunda sobrescribirá la que ya existe:

```js
input.onclick = function () {
	alert(1);
};
// ...
input.onclick = function () {
	alert(2);
}; // reemplaza el handler anterior handler
```

Una forma alternativa de administrar los handlers es utilizando el método `addEventListener`.

La sintaxis para agregar un handler:

```js
element.addEventListener(event, handler, [options]);
```

Ejemplo

```html
<input id="elem" type="button" value="Haz click en mí" />

<script>
	function handler1() {
		alert('¡Gracias!');
	}

	function handler2() {
		alert('¡Gracias de nuevo!');
	}

	elem.onclick = () => alert('Hola');
	elem.addEventListener('click', handler1); // Gracias!
	elem.addEventListener('click', handler2); // Gracias de nuevo!
</script>
```

### Acciones predeterminadas del navegador

Muchos eventos conducen automáticamente a determinadas acciones realizadas por el navegador.

Por ejemplo:

- Un clic en un enlace: inicia la navegación a su URL.
- Un clic en el botón de envío de un formulario inicia su envío al servidor.
- Al presionar un botón del ratón sobre un texto y moverlo, se selecciona el texto.

Si manejamos un evento en JavaScript, es posible que no queramos que suceda la acción correspondiente del navegador e implementar en cambio otro comportamiento.

### Evitar las acciones del navegador

Hay dos formas de decirle al navegador que no queremos que actúe:

- La forma principal es utilizar el objeto event. Hay un método `event.preventDefault()`.
- Si el controlador se asigna usando `on<event>` (no por `addEventListener`), entonces devolver `false` también funciona igual.

En este HTML, un clic en un enlace no conduce a la navegación. El navegador no hace nada:

```html
<a href="/" onclick="return false">Haz clic aquí</a>

<a href="/" onclick="event.preventDefault()">aquí</a>
```
