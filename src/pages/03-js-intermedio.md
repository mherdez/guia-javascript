# Javascript intermedio

## Promise
Una Promise (promesa en español) es un objeto de JavaScript que representa el resultado pendiente de una operación asíncrona. Las operaciones asíncronas son aquellas que no se ejecutan inmediatamente, sino que se programan para ejecutarse en el futuro, como una solicitud de red o una lectura de archivo.

Las promesas se utilizan para manejar operaciones asíncronas de manera más elegante y fácil de leer. En lugar de utilizar devoluciones de llamada (callbacks), las promesas permiten encadenar múltiples operaciones asíncronas y manejar los errores de manera más sencilla.

Para crear una promesa, se utiliza el constructor Promise. Este constructor recibe una función con dos parámetros, resolve y reject, que deben llamarse para resolver o rechazar la promesa. La función debe contener el código para la operación asíncrona.

~~~js
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('¡Hola, mundo!');
  }, 1000);
});

miPromesa.then((resultado) => {
  console.log(resultado); // Imprime "¡Hola, mundo!" después de 1 segundo
});

~~~

## Fetch

Fetch es una función de JavaScript que permite realizar solicitudes HTTP asíncronas a servidores web. Es una API moderna que proporciona una interfaz más sencilla y flexible que la antigua API XMLHttpRequest.

fetch devuelve una promesa que se resuelve con la respuesta de la solicitud HTTP. La respuesta es un objeto Response que contiene la información de la respuesta del servidor, como el código de estado HTTP, los encabezados y el cuerpo de la respuesta.

La sintaxis básica de fetch es la siguiente:

~~~js
fetch(url)
  .then(response => {
    // manejar la respuesta del servidor
  })
  .catch(error => {
    // manejar el error de la solicitud
  });

~~~

Donde `url` es la dirección del servidor al que se realiza la solicitud HTTP. La función `fetch` devuelve una promesa que se resuelve con el objeto `Response` de la respuesta del servidor. La función `then` maneja la respuesta del servidor y la función `catch` maneja cualquier error que ocurra durante la solicitud.

## Async / Await

`Async` / `Await` es una forma sencilla y elegante de escribir código asíncrono en JavaScript. Es una característica que permite escribir código asíncrono de manera más sencilla, eliminando la necesidad de encadenar funciones `then` y `catch`.

~~~js
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
}

getData();
~~~

La palabra clave `async` se utiliza para definir una función asíncrona que devuelve una promesa. Dentro de la función asíncrona, se puede utilizar la palabra clave `await` para esperar a que una promesa se resuelva antes de continuar con la ejecución del código.

La sintaxis básica de async/await es la siguiente:

~~~js
async function miFuncion() {
  try {
    const resultado = await promesa;
    // manejar el resultado de la promesa
  } catch (error) {
    // manejar el error de la promesa
  }
}

~~~

En este ejemplo, `miFuncion` es una función asíncrona que utiliza la palabra clave `await` para esperar a que la promesa `promesa` se resuelva antes de continuar con la ejecución del código. La función también utiliza la palabra clave `try/catch` para manejar errores que puedan ocurrir durante la ejecución de la promesa.

`async/await` simplifica la escritura de código asíncrono al hacer que se parezca más al código síncrono. Por ejemplo, el siguiente código utiliza `async/await` para esperar a que se resuelvan dos promesas antes de imprimir los resultados:

~~~js
async function miFuncion() {
  try {
    const resultado1 = await promesa1;
    const resultado2 = await promesa2;
    console.log(resultado1, resultado2);
  } catch (error) {
    console.log(error);
  }
}

~~~

En este ejemplo, se espera a que se resuelva `promesa1` antes de continuar con la ejecución de la función. Luego, se espera a que se resuelva `promesa2` antes de imprimir los resultados en la consola.


## API Rest

API REST (Representational State Transfer) es un estilo de arquitectura de software para sistemas distribuidos, que se utiliza para diseñar y crear servicios web. Un servicio web RESTful es aquel que implementa una API REST.

Las APIs RESTful utilizan el protocolo HTTP para comunicarse y enviar/recibir datos en formato JSON o XML. Los recursos en una API REST son identificados por una URI (Uniform Resource Identifier), y se pueden realizar operaciones CRUD (Create, Read, Update, Delete) en ellos utilizando los métodos HTTP estándar:

GET: para obtener un recurso o una colección de recursos.
POST: para crear un nuevo recurso.
PUT: para actualizar un recurso existente.
DELETE: para eliminar un recurso existente.
Además de estos métodos estándar, una API REST también puede definir métodos personalizados que se utilizan para realizar operaciones específicas en los recursos.

Un recurso en una API REST se representa típicamente en formato JSON o XML, y puede incluir metadatos, datos de estado y enlaces a otros recursos relacionados. Los recursos son direccionables mediante su URI, y se pueden utilizar parámetros de consulta para filtrar, ordenar y paginar los resultados.

### Comunicación con una API Rest

`Promise`, `fetch` y `async/await` son herramientas útiles para manejar operaciones asíncronas en una `API Rest`.

Las promesas (`Promise`) son una herramienta útil para manejar operaciones asíncronas en una API REST. Por ejemplo, cuando se realiza una consulta a una base de datos, se puede utilizar una promesa para esperar a que se complete la operación antes de continuar con la ejecución del código.

El método `fetch` es una forma de realizar peticiones HTTP en JavaScript. En una API REST, se utiliza el método `fetch` para enviar y recibir datos desde y hacia el servidor. El método `fetch` devuelve una promesa, lo que permite manejar la respuesta del servidor de manera asíncrona.

`async/await` es una forma de trabajar con promesas de manera más sencilla y legible. En una API REST, se puede utilizar `async/await` para manejar operaciones asíncronas de manera más clara y concisa. Por ejemplo, se puede utilizar `async/await` para esperar a que una respuesta del servidor se resuelva antes de continuar con la ejecución del código.



## [Plantillas literales](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)

Las plantillas literales o template string, son cadenas literales que habilitan el uso de expresiones incrustadas. Con ellas, es posible utilizar cadenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres.

En ediciones anteriores de la especificación ES2015, solían llamarse "plantillas de cadenas de caracteres".

Las plantillas literales se delimitan con el caracter de comillas o tildes invertidas (\` \`), en lugar de las comillas sencillas o dobles.

Las plantillas de cadena de caracteres pueden contener marcadores, identificados por el signo de dólar y envueltos en llaves `${expresión}`. Las expresiones contenidas en los marcadores, junto con el texto entre ellas, son enviados como argumentos a una función.


Sintaxis
~~~js
`texto de cadena de caracteres`

`línea 1 de la cadena de caracteres
 línea 2 de la cadena de caracteres`

`texto de cadena de caracteres ${expresión} texto adicional`

tagFuntion`texto de cadena de caracteres ${expresión} texto adicional`
~~~

## [Operador ternario](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción **`if`**.

Sintaxis

```js
condición ? expr1 : expr2;
```

Ejemplos

```js
'La Cuota es de:  ' + (esMiembro ? '$2.00' : '$10.00');
```

```js
let valorDePi = Math.PI > 4 ? 'Sip' : 'Nop';
```

Operador ternario anidado

```js
let firstCheck = false,
	secondCheck = false,
	access = firstCheck
		? 'Acceso Denegado'
		: secondCheck
		? 'Acceso Denegado'
		: 'Acceso Permitido';

console.log(access); // muestra "Acceso Permitido"
```

## Función de Flecha

Es una alternativa compacta a una expresión de función tradicional.

```js
// Función Tradicional
function name() {
	...
	return val
}

// Función de Flecha
const name = () => val
```

### Sintaxis

**Sintaxis básica**

Un parámetro. Con una expresión simple no se necesita return:

```js
(param) => expression;
```

Varios parámetros requieren paréntesis. Con una expresión simple no se necesita return:

```js
(param1, paramN) => expression;
```

Las declaraciones de varias líneas requieren corchetes y return:

```js
(param) => {
	let a = 1;
	return a + b;
};
```

Varios parámetros requieren paréntesis. Las declaraciones de varias líneas requieren corchetes y return:

```js
(param1, paramN) => {
	let a = 1;
	return a + b;
};
```

**Sintaxis avanzada**

Para devolver una expresión de objeto literal, se requieren paréntesis alrededor de la expresión:

```js
(params) => ({ foo: 'a' }); // devuelve el objeto {foo: "a"}
```

Los parámetros rest son compatibles:

```js
(a, b, ...r) => expression;
```

Se admiten los parámetros predeterminados:

```js
(a = 400, b = 20, c) => expression;
```

Desestructuración dentro de los parámetros admitidos:

```js
([a, b] = [10, 20]) => a + b; // el resultado es 30
({ a, b } = { a: 10, b: 20 }) => a + b; // resultado es 30
```


## Parámetros con valor por defecto

Los parámetros con valor por defecto son una forma de definir valores predeterminados para los parámetros de una función en caso de que no se les pase un valor en la llamada de la función.

Los parámetros con valor por defecto se definen en la lista de parámetros de la función, utilizando la sintaxis `nombreParametro = valorPorDefecto`. Por ejemplo:

```js
function saludar(nombre = 'amigo') {
  console.log(`¡Hola, ${nombre}!`);
}
```

En esta función, se define un parámetro `nombre` con un valor por defecto de `'amigo'`. Esto significa que si no se le pasa un valor para `nombre` en la llamada de la función, se utilizará el valor por defecto `'amigo'`.

Por ejemplo:

```js
saludar(); // logs "¡Hola, amigo!"
saludar('Juan'); // logs "¡Hola, Juan!"
```

En el primer caso, como no se le pasó un valor para `nombre`, se utilizó el valor por defecto `'amigo'`. En el segundo caso, se le pasó el valor `'Juan'`, por lo que se utilizó ese valor en lugar del valor por defecto.

La ventaja de utilizar parámetros con valor por defecto es que se pueden escribir funciones más concisas y menos propensas a errores al no tener que preocuparse por manejar casos en los que los valores de los parámetros no estén definidos o sean `undefined`. También hace que el código sea más legible y fácil de entender, ya que se puede ver claramente qué valores por defecto se utilizan para los parámetros.

## Parámetros posicionales

Una función con parámetros posicionales es una función que espera que se le pasen ciertos valores en un orden específico, en el que la posición de los argumentos en la llamada de la función determina a qué parámetro se asigna cada valor.

Por ejemplo, consideremos la siguiente función:

```js
function sum(a, b) {
  return a + b;
}
```

Esta función toma dos parámetros posicionales: "a" y "b". Cuando se llama a la función, los valores pasados como argumentos se asignan a estos parámetros en orden. Por ejemplo:

```js
sum(2, 3); // devuelve 5
```

En este ejemplo, la función sum toma los valores 2 y 3 y los asigna a los parámetros "a" y "b" respectivamente. La función luego devuelve la suma de estos valores (5).

Es importante tener en cuenta que los parámetros posicionales deben pasarse en el orden correcto. Si se intercambian los valores de los argumentos, el resultado de la función puede ser incorrecto:

```js
sum(3, 2); // devuelve 5 (correcto)
sum(2, 3); // devuelve 5 (correcto)
sum(3, 2); // devuelve 5 (incorrecto)
```

En resumen, una función con parámetros posicionales es simplemente una función que espera que los valores de sus argumentos se pasen en un orden específico, y es importante asegurarse de pasar los argumentos en el orden correcto para obtener el resultado deseado.

## Parámetros nombrados

Los parámetros nombrados son una forma de definir los parámetros de una función de manera que no dependan del orden en que se pasan los argumentos en la llamada de la función.

Los parámetros nombrados se definen utilizando la sintaxis de objeto literal `({})` en la lista de parámetros de la función, donde el nombre de cada propiedad se utiliza como el nombre del parámetro. Por ejemplo:

```js
function greet({ name, message }) {
  console.log(`${message}, ${name}!`);
}
```

En esta función, se define un parámetro nombrado "name" y otro parámetro nombrado "message". Cuando se llama a la función, en lugar de pasar los argumentos en un orden específico, se los pasa como un objeto que tiene propiedades con los nombres correspondientes:

```js
greet({ name: 'Juan', message: 'Hola' }); // logs "Hola, Juan!"
```

En este ejemplo, se pasa un objeto con dos propiedades ("name" y "message") como argumento a la función "greet". Dentro de la función, se desestructura el objeto y se utilizan las propiedades correspondientes como valores para los parámetros nombrados "name" y "message".

La ventaja de utilizar parámetros nombrados es que se puede pasar un objeto con propiedades arbitrarias, y la función solo utilizará las propiedades que corresponden a los parámetros nombrados. Esto también hace que el código sea más legible y fácil de entender, ya que los nombres de los parámetros se utilizan para indicar claramente qué valores se esperan como argumentos.


## [Asignadores lógicos](https://es.javascript.info/logical-operators)

### Operador OR '||'. Encuentra el primer valor verdadero

[Asignación OR lógica (||=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)

Dado múltiples valores aplicados al operador OR:

```js
result = value1 || value2 || value3;
```

Una cadena de OR "||" devuelve el primer valor verdadero o el último si ningún verdadero es encontrado.

Por ejemplo:

1. Obtener el primer valor verdadero de una lista de variables o expresiones.

```js
alert(1 || 0); // 1 (1 es un valor verdadero)

alert(null || 1); // 1 (1 es el primer valor verdadero)
alert(null || 0 || 1); // 1 (el primer valor verdadero)

alert(undefined || null || 0); // 0 (todos son valores falsos, retorna el último valor)
```

```js
let firstName = '';
let lastName = '';
let nickName = 'SuperCoder';

alert(firstName || lastName || nickName || 'Anonymous'); // SuperCoder
```

2. Evaluación del camino más corto.

Otra característica de OR || operador es la evaluación de “el camino más corto”.

Esto significa que || procesa sus argumentos hasta que se alcanza el primer valor verdadero, y luego el valor se devuelve inmediatamente, sin siquiera tocar el otro argumento.

La importancia de esta característica se vuelve obvia si un operando no es solo un valor, sino una expresión con un efecto secundario, como una asignación de variable o una llamada a función.

En el siguiente ejemplo, solo se imprime el segundo mensaje:

```js
true || alert('not printed');
false || alert('printed');
```

```js
let nombre;
let id = 10;

nombre ||= id;

// nombre = 10
```

```js
let nombre = 'Ana';
let id = 10;

nombre ||= id;

// nombre = 'Ana'
```

### Operador AND '&&'. Encuentra el primer valor falso

[Asignación lógica AND (&&=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)

Dado múltiples valores aplicados al operador AND:

```js
result = value1 && value2 && value3;
```

AND retorna el primer valor falso o el último valor si ninguno fue encontrado.

```js
// si el primer operando es un valor verdadero,
// AND retorna el segundo operando:
alert(1 && 0); // 0
alert(1 && 5); // 5

// si el primer operando es un valor falso,
// AND lo retorna. El segundo operando es ignorado
alert(null && 5); // null
alert(0 && 'cualquier valor'); // 0
```

```js
let nombre = 'Ana';
let id = 10;

nombre &&= id;

// nombre = 10
```

### Operador Nullish Coalescing '??'

[Asignación lógica nula (??=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)

?? devuelve el primer argumento cuando este no es null ni undefined. En caso contrario, devuelve el segundo.

```js
let user;

alert(user ?? 'Anonymous'); // Anonymous (user no definido)
```

```js
let user = 'John';

alert(user ?? 'Anonymous'); // John (user definido)
```

El operador “nullish coalescing” ?? brinda una manera concisa de seleccionar un valor “definido” de una lista.

Es usado para asignar valores por defecto a las variables:

```js
// Asignar height=100, si height es null o undefined

height ??= 100; // height = height ?? 100;
```

## [Encadenamiento opcional](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

El operador de encadenamiento opcional `?.` leer el valor de una propiedad ubicada en lo profundo de una cadena de objetos conectados sin tener que verificar que cada referencia en la cadena sea válida.

Sintaxis

```js
obj.val?.prop;
obj.val?.[expr];
obj.arr?.[index];
obj.func?.(args);
```

Ejemplo

```js
const adventurer = {
	name: 'Alice',
	cat: {
		name: 'Dinah',
	},
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```

### Descripción

El operador de encadenamiento opcional proporciona una manera de simplificar el acceso a valores a través de objetos conectados cuando es posible que una referencia o función sea `undefined` o `null`.

Por ejemplo, considere un objeto objque tiene una estructura anidada. Sin el encadenamiento opcional, buscar una subpropiedad profundamente anidada requiere validar las referencias intermedias, como:

```js
let nestedProp = obj.first && obj.first.second;
```

Se confirma que el valor de obj.first es no null (y no undefined) antes de acceder al valor de obj.first.second. Esto evita el error que ocurriría si accediera obj.first.second directamente sin probar obj.first.

Sin embargo, con el operador de encadenamiento opcional ( ?.), no tiene que probar y cortocircuitar explícitamente en función del estado obj.first antes de intentar acceder a obj.first.second:

```js
let nestedProp = obj.first?.second;
```

Al usar el ?.operador en lugar de solo ., JavaScript sabe que debe verificar implícitamente para asegurarse de obj.first que no es nullo undefined antes de intentar acceder obj.first.second. Si obj.first es null o undefined, la expresión se cortocircuita automáticamente y devuelve undefined.

Esto es equivalente a lo siguiente, excepto que la variable temporal de hecho no se crea:

```js
let temp = obj.first;
let nestedProp = temp === null || temp === undefined ? undefined : temp.second;
```

## [Sintaxis Spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de función) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.

Sintaxis

Para llamadas de funciones:

```js
myFunction(...iterableObj);
```

Para arreglos literales o cadenas de caracteres:

```js
[...iterableObj, '4', 'five', 6];
```

Para objetos literales (nuevo en ECMAScript 2018):

```js
let objClone = { ...obj };
```

## [Desestructuración](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

La sintaxis de desestructuración es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.

Sintaxis

```js
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Propuesta de etapa 4 (terminada)
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```
