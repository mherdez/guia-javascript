# Javascript básico

## Conceptos básicos

JavaScript distingue entre mayúsculas y minúsculas (es case-sensitive) y utiliza el conjunto de caracteres Unicode.

En JavaScript, las instrucciones se denominan declaraciones y están separadas por punto y coma, aunque no es necesario ponerlas después de una declaración si está escrita en su propia línea.

:::tip Buenas prácticas
Escribir siempre un punto y coma después de una declaración, incluso cuando no sea estrictamente necesario, reduce las posibilidades de que se introduzcan errores en el código.
:::

## Variables

En programación una variable es un espacio de memoria el cual nos servirá para almacenar un tipo de dato con un valor correspondiente.

- **[var](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var)**: Declara una variable, opcionalmente la inicia a un valor. _(se recomienda no usar)_
- **[let](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let)**: Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
- **[const](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const)**: Declara un nombre de constante de solo lectura y ámbito de bloque.

Los nombres de las variables, llamados **identificadores**, se ajustan a ciertas reglas.

1. Debe comenzar con una letra, un guión bajo (\_) o un signo de dólar ($). Los siguientes caracteres también pueden ser dígitos (0-9).
2. Se distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres "A" a "Z" (mayúsculas), así como "a" a "z" (minúsculas).
3. Se puede utilizar la mayoría de las letras ISO 8859-1 o Unicode como å y ü en los identificadores, es decir, permite acentos y caracteres especiales para declarar una variable. Sin embargo, por convención se emplea el idioma inglés como estándar.

### Ámbito de las variables

Cuando declaras una variable fuera de cualquier función, se denomina variable global, porque está disponible para cualquier otro código en el documento actual. Cuando declaras una variable dentro de una función, se llama variable local, porque solo está disponible dentro de esa función.

### Palabras reservadas

[Lista de palabras reservadas](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Lexical_grammar#palabras_clave)

## Tipo de datos

El último estándar ECMAScript define [nueve tipos](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures#estructuras_y_tipos_de_datos)

Empezaremos con los [primitivos](https://developer.mozilla.org/es/docs/Glossary/Primitive):

- **`String`**: se utiliza para representar datos textuales, es decir, cadena de caracteres.
- **`Number`**: valores numéricos (enteros, decimales, etc).
- **`Boolean`**: representa una entidad lógica y puede tener dos valores: `true` y `false`.
- **`Undefined`**: Una variable declarada que aún no se le asigna valor.
- **`Null`**: sin valor en lo absoluto.

## Operadores

- [de asignación](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#asignacion)

Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho. El operador de asignación simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = y asigna el valor de y a x.

- [de comparación](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion)

Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser valores numéricos, de cadena, lógicos u objetos.

- [aritméticos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#aritmeticos)

Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus operandos y devuelve un solo valor numérico. Los operadores aritméticos estándar son suma (+), resta (-), multiplicación (*) y división (/).

- [lógicos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#logico)

Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo son, devuelven un valor booleano. Sin embargo, los operadores && y || en realidad devuelven el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano.

- [de cadena](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#cadena)

Además de los operadores de comparación, que se pueden usar en valores de cadena, el operador de concatenación (+) concatena dos valores de cadena, devolviendo otra cadena que es la unión de los dos operandos de cadena.

- [condicional (ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#condicional)

El operador condicional es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de dos valores según una condición. La sintaxis es:

~~~js
condition ? val1 : val2
~~~

Si condition es true, el operador tiene el valor de val1. De lo contrario, tiene el valor de val2. Puedes utilizar el operador condicional en cualquier lugar donde normalmente utilizas un operador estándar.

- [relacionales](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational)

Un operador relacional compara sus operandos y devuelve un valor Boolean basado en si la comparación es verdadera.

## Estructura de control

### Declaración de bloque

La declaración de bloque se utiliza para agrupar instrucciones. El bloque está delimitado por un par de llaves.

```js
{
  statement_1;
  statement_2;
  ⋮
  statement_n;
}
```

Las declaraciones de bloque se utilizan comúnmente con declaraciones de control de flujo (if, for, while).

### Expresiones condicionales

Una expresión condicional es un conjunto de instrucciones que se ejecutarán si una condición especificada es verdadera. JavaScript admite dos expresiones condicionales: if...else y switch.

### Expresión if...else

Utiliza la expresión **`if`** para ejecutar una instrucción si una condición lógica es **`true`**. Utiliza la cláusula opcional **`else`** para ejecutar una instrucción si la condición es **`false`**.

```js
if (condition) {
	statement_1;
} else {
	statement_2;
}
```

También puedes componer las declaraciones usando **`else if`** para que se prueben varias condiciones en secuencia:

```js
if (condition_1) {
	statement_1;
} else if (condition_2) {
	statement_2;
} else if (condition_n) {
	statement_n;
} else {
	statement_last;
}
```

En el caso de múltiples condiciones, solo se ejecutará la primera condición lógica que se evalúe como **`true`**. Para ejecutar múltiples declaraciones, se agrupan dentro de una declaración de bloque ({ … }).

### Valores falsos

Los siguientes valores se evalúan como `false` (también conocidos como valores Falsy:

- false
- undefined
- null
- 0 (cero)
- NaN
- la cadena vacía ("") ('') (``)

Todos los demás valores, incluidos todos los objetos, se evalúan como `true` cuando se pasan a una declaración condicional.

### Declaración switch

Una instrucción **`switch`** permite que un programa evalúe una expresión e intente hacer coincidir el valor de la expresión con una etiqueta case. Si la encuentra, el programa ejecuta la declaración asociada.

```js
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
```

## Ciclos

Los ciclos o bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.

### Declaración for

Un ciclo `for` se repite hasta que una condición especificada se evalúe como `false`.

```js
for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización]) {
	instrucción;
}
```

### Declaración do...while

La instrucción `do...while` se repite hasta que una condición especificada se evalúe como falsa.

```js
do {
	expresión;
} while (condición);
```

### Declaración while

Una declaración `while` ejecuta sus instrucciones siempre que una condición especificada se evalúe como `true`.

```js
while (condición) {
	expresión;
}
```

## Funciones

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

### Declaración de función

Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave **`function`**, seguida de:

- El nombre de la función.
- Una lista de parámetros de la función, entre paréntesis y separados por comas.
- Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

```js
function cuadrado(numero) {
	return numero * numero;
}
```

### Llamar funciones

Definir una función no la ejecuta. Definirla simplemente nombra la función y especifica qué hacer cuando se llama a la función.

Llamar a la función en realidad lleva a cabo las acciones especificadas con los parámetros indicados. Por ejemplo, si defines la función cuadrado, podrías llamarla de la siguiente manera:

```js
cuadrado(5);
```

### Tipo de funciones

Funciones simple:

```js
function saludar() {
	console.log('Hola Mundo');
}

saludar();
```

Funciones con parámetros:

```js
function saludar(nombre) {
	console.log('Saludos ' + nombre);
}

saludar('Juan');
```

Funciones con valor de retorno:

```js
function saludar(nombre) {
	return 'Saludos ' + nombre;
}

console.log(saludar('Juan'));
```

:::tip Nota
Una característica fundamental de las funciones es que se pueden reutilizar.
:::

## Arreglos

Los arreglos o `arrays` son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables.

```js
let heroes = ['Batman', 'Superman', 'Flash'];
let numeros = [2, 4, 6, 8, 10];
```


### Acceso a elementos de un array

Los índices de los arrays de JavaScript comienzan en cero, es decir, el índice del primer elemento de un array es 0, y el del último elemento es igual al valor de la propiedad length del array restándole 1.

Si se utiliza un número de índice no válido, se obtendrá `undefined`.


### Propiedad array.prototype.length

La propiedad `length` de un objeto que es una instancia de tipo Array establece o devuelve la cantidad de elementos en esa matriz.


### [Operaciones habituales](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#operaciones_habituales)


#### Crear un Array

~~~js
	let frutas = ["Manzana", "Banana"]

	console.log(frutas.length)
	// 2
~~~

####  Acceder a un elemento de Array mediante su índice

~~~js
	let primero = frutas[0]
	// Manzana

	let ultimo = frutas[frutas.length - 1]
	// Banana
~~~

#### Recorrer un Array

~~~js
	frutas.forEach(function(elemento, indice, array) {
			console.log(elemento, indice);
	})
	// Manzana 0
	// Banana 1
~~~

#### Añadir un elemento al final de un Array

~~~js
	let nuevaLongitud = frutas.push('Naranja') // Añade "Naranja" al final
	// ["Manzana", "Banana", "Naranja"]
~~~

#### Eliminar el último elemento de un Array

~~~js
	let ultimo = frutas.pop() // Elimina "Naranja" del final
	// ["Manzana", "Banana"]
~~~

#### Añadir un elemento al principio de un Array

~~~js
	let nuevaLongitud = frutas.unshift('Fresa') // Añade "Fresa" al inicio
	// ["Fresa" ,"Manzana", "Banana"]
~~~

#### Eliminar el primer elemento de un Array

~~~js
	let primero = frutas.shift() // Elimina "Fresa" del inicio
	// ["Manzana", "Banana"]
~~~

#### Encontrar el índice de un elemento del Array

~~~js
	frutas.push('Fresa')
	// ["Manzana", "Banana", "Fresa"]

let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar
// 1
~~~

#### Eliminar un único elemento mediante su posición

**Ejemplo:**
Eliminamos "Banana" del array pasándole dos parámetros: la posición del primer elemento que se elimina y el número de elementos que queremos eliminar. De esta forma, `.splice(pos, 1)` empieza en la posición que nos indica el valor de la variable `pos` y elimina 1 elemento. En este caso, como `pos` vale 1, elimina un elemento comenzando en la posición 1 del array, es decir "Banana".

~~~js
	let elementoEliminado = frutas.splice(pos, 1)
	// ["Manzana", "Fresa"]
~~~

#### Eliminar varios elementos a partir de una posición

:::tip Nota:
Con .splice() no solo se puede eliminar elementos del array, si no que también podemos extraerlos guardándolo en un nuevo array. ¡Ojo! que al hacer esto estaríamos modificando el array de origen.
:::

~~~js
	let vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']
	console.log(vegetales)
	// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

	let pos = 1, numElementos = 2

	let elementosEliminados = vegetales.splice(pos, numElementos)
	// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

	console.log(vegetales)
	// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales"
~~~

#### Copiar un Array

~~~js
	let copiaArray = vegetales.slice();
	// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"
~~~

### Métodos iterables

### Declaración for

```js
const array = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < array.length; i++) {
	instrucción;
}
```

### Declaración for...in

La instrucción `for...in` itera una variable especificada sobre todas las propiedades enumerables de un objeto. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas.

```js
for (variable in objeto) {
	instrucción;
}
```

### Declaración for...of

La declaración `for...of` crea un bucle que se repite sobre objetos iterables (incluidos `Array`, `Map`, `Set`, objetos `arguments` y así sucesivamente), invocando un bucle de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad.

```js
for (variable of objeto) {
	expresión;
}
```

### Método array.prototype.forEach()

`forEach()` ejecuta la función callback una vez por cada elemento presente en el `array` en orden ascendente. No es invocada para índices que han sido eliminados o que no hayan sido inicializados

```js
array.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[, thisArg]);
```


## Objetos

[dev.to](https://dev.to/duxtech/es6-objetos-literales-en-javascript-58np)

JavaScript está diseñado en un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos.

Sintácticamente un objeto en JavaScript es un conjunto agrupado entre llaves de claves y valores:

```js
let nombreDelObjeto = {
	clave_1: valor_1,
	clave_2: valor_2,
	clave_3: valor_3,
	clave_n: valor_n,
};
```

```js
let myCar = {
	make: 'Ford',
	model: 'Mustang',
	year: 1969,
};
```

### Objeto literal

Se denomina objeto literal al objeto cuyas propiedades están declaradas textualmente en el código.

```js
let perro = {
	nombre: 'Hércules', //string
	color: 'Negro', //string
	edad: 2, //number
	macho: true, //bolean
};
```

### Acceder a valores de un objeto

Existen 2 maneras simples para poder acceder a los valores de un objeto:

### Notación de punto

Consiste en escribir el nombre del objeto seguido de un punto y el nombre de la propiedad a la cual se quiere acceder: objeto.clave

```js
let perro = {
	nombre: 'Hércules', //string
	color: 'Negro', //string
	edad: 2, //number
	macho: true, //bolean
};
console.info(perro.nombre); // Hércules
console.info(perro.edad); // 2
```

### Notación de corchetes / llaves cuadradas o brackets

Consiste en escribir el nombre del objeto anteponiendo entre corchetes la clave a la que se quiere acceder: objeto[clave]

```js
let perro = {
	nombre: 'Hércules', //string
	color: 'Negro', //string
	edad: 2, //number
	macho: true, //bolean
};

console.info(perro['nombre']); // Hércules
console.info(perro['edad']); // 2
```

:::tip Nota
Ambas maneras retornan los mismos resultados, por lo tanto se pueden considerar homónimas, pero en la práctica se acostumbra a usar más la notación de punto.
:::

### Métodos en un objeto

Un objeto no solo se limita a la agrupación de claves valores, es posible también incorporar métodos de la siguiente manera:

```js
let perro = {
	nombre: 'Hércules',
	color: 'Negro',
	edad: 2,
	macho: true,
	ladrar: function () {
		return `${this.nombre} puede ladrar`;
	},
};

console.log(perro.ladrar()); // Hércules puede ladrar
```

:::tip Nota
Por motivos de scope de variables, para acceder los campos de un objeto dentro de un método, se debe usar la palabra reservada `this`.
:::

### Crear de campos

```js
perro.peso = 20;
```

### Consultar campos

```js
console.log(perro);
```

### Actualizar campos

```js
perro.edad = 3;
```

### Eliminar campos

```js
delete perro.peso;
```

### Objetos anidados

```js
let perro = {
	nombre: 'Hércules',
	color: 'Negro',
	edad: 2,
	macho: true,
	alimentos: {
		desayuno: 'carne',
		comida: ['croquetas', 'vitaminas', 'proteinas'],
		cena: {
			entrada: 'granos',
			fuerte: 'proteina',
			final: 'líquidos',
		},
	},
	ladrar: function () {
		return `${this.nombre} puede ladrar`;
	},
};
```

### Entendiendo POO con analogías y ejemplos

![pokemon](https://mherdez.github.io/guia-poo-pokemon/img/pokemones.jpg)

Consulta la guía: [Entendiendo Programación Orientada a Objetos con Pokemones](https://mherdez.github.io/guia-poo-pokemon/)




