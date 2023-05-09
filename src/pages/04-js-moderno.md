# Javascript moderno

## Programación funcional

La programación funcional es otro enfoque común en el desarrollo de software (paradigma de programación). En programación funcional, el código está organizado en funciones más pequeñas y básicas que se pueden combinar para construir programas de mayor complejidad.

## array.at()

El método **`at()`** recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del arreglo.

Sintaxis

```js
at(índice);
```

Ejemplo

```js
const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(
	`Using an index of ${index} the item returned is ${array1.at(index)}`
);
// expected output: "Using an index of 2 the item returned is 8"

index = -2;

console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);
// expected output: "Using an index of -2 item returned is 130"
```

## array.concat()

El método **`concat()`** se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo arreglo.

Sintaxis

```js
var nuevo_array = viejo_array.concat(valor1[, valor2[, ...[, valorN]]])
```

```js
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```

:::tip Nota
Al concatenar arreglos o valores no se modificarán los originales. Además, las operaciones en el nuevo arreglo (excepto las operaciones en elementos que son referencias a objetos) no tendrán efecto en el arreglo original, y viceversa.
:::

## array.every()

El método **`every()`** determina si todos los elementos en el arreglo satisfacen una condición.

Sintaxis

```js
arr.every(callback(element[, index[, array]])[, thisArg])

```

Ejemplo

```js
const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every((i) => i < 50));
// expected output: true
```

:::warning Nota
¡Llamar este método en un arreglo vacío devuelve true para cualquier condición!
:::

## array.fill()

El método **`fill()`** cambia todos los elementos en un arreglo por un valor estático, desde el **índice start** (por defecto 0) hasta el **índice end** (por defecto array.length). Devuelve el arreglo modificado.

Sintaxis

```js
arr.fill(value[, start = 0[, end = this.length]])
```

Ejemplo

```js
const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
```

## array.filter()

El método **`filter()`** crea un nuevo arreglo con todos los elementos que cumplan la condición implementada por la función dada.

Sintaxis

```js
var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
```

Ejemplo

```js
const words = [
	'spray',
	'limit',
	'elite',
	'exuberant',
	'destruction',
	'present',
];

const result = words.filter((word) => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]
```

## array.find()

El método **`find()`** devuelve el valor del primer elemento del arreglo que cumple la función de prueba proporcionada.

Sintaxis

```js
arr.find(callback(element[, index[, array]])[, thisArg])

```

Ejemplo

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);
// expected output: 12
```

## array.findIndex()

El método **`findIndex()`** devuelve el índice del primer elemento de un arreglo que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.

Sintaxis

```js
arr.findIndex(callback( element[, index[, array]] )[, thisArg])
```

Ejemplo

```js
const array1 = [5, 12, 8, 130, 44];

console.log(array1.findIndex((element) => element > 13));
// expected output: 3
```

## array.flat()

El método **`flat()`** crea una nuevo arreglo con todos los elementos de sub-arreglo concatenados recursivamente hasta la profundidad especificada, se le dice, aplanar arreglos anidados.

Sintaxis

```js
var newArray = arr.flat([depth]);
```

Ejemplo

```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
```

## array.includes()

El método **`includes()`** determina si una arreglo incluye un determinado elemento, devuelve **true** o **false** según corresponda.

```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false
```

## array.join()

El método **`join()`** une todos los elementos de un arreglo (o un objeto similar a un arreglo) en una cadena y devuelve esta cadena.

Sintaxis

```js
arr.join([separator]);
```

Ejemplo

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

:::warning Nota
Si un elemento no está definido o es nulo, se convierte en la cadena vacía.
:::

## array.map()

El método **`map()`** crea un nuevo arreglo con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

Sintaxis

```js
var nuevo_array = arr.map(function callback(currentValue, index, array) {
    // Elemento devuelto de nuevo_array
}[, thisArg])
```

Ejemplo

```js
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function (x) {
	return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]
```

## array.of()

El método **`Array.of()`** crea una nueva instancia Array con un número variable de elementos pasados como argumento, independientemente del número o del tipo.

Sintaxis

```js
Array.of(elemento0[, elemento1[, ...[, elementoN]]])
```

La diferencia entre **Array.of()** y el **constructor Array** reside en como maneja los parámetros de tipo entero: Array.of(7) crea un array con un solo elemento, 7, mientras que Array(7) crea un array vacío con una propiedad length de 7 (Nota: esto implica un array de 7 ranuras vacías, no ranuras con valores undefined).

Ejemplo

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]
```

## array.reduce()

El método **`reduce()`** ejecuta una función reductora sobre cada elemento de un arregki, devolviendo como resultado un único valor.

Sintaxis

```js
arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
```

La función reductora recibe cuatro argumentos:

- Acumulador (acc)
- Valor Actual (cur)
- Índice Actual (idx)
- Array (src)

El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración del arreglo y, en última instancia, se convierte en el valor final, único y resultante.

Ejemplo

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
	(previousValue, currentValue) => previousValue + currentValue,
	initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

## array.reverse()

El método **`reverse()`** invierte el orden de los elementos de un arreglo _in place_. El primer elemento pasa a ser el último y el último pasa a ser el primero.

Sintaxis

```js
a.reverse();
```

Ejemplo

```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// expected output: "array1:" Array ["three", "two", "one"]
```

## array.slice()

El método **`slice()`** devuelve una copia de una parte del arreglo dentro de un nuevo arreglo empezando por inicio hasta fin (fin no incluido). El arreglo original no se modificará.

Sintaxis

```js
arr.slice([inicio [, fin]])
```

Parámetros

**inicio**.

- Índice donde empieza la extracción. El primer elemento corresponde con el índice 0.
- Si el índice especificado es negativo, indica un desplazamiento desde el final del array. slice(-2)extrae los dos últimos elementos del array
- Si inicio es omitido el valor por defecto es 0.
- Si inicio es mayor a la longitud del array, se devuelve un array vacío.

**fin**.

- Índice que marca el final de la extracción. slice extrae hasta, pero sin incluir el final.
- slice(1,4) extrae desde el segundo elemento hasta el cuarto (los elementos con índices 1, 2, y 3).
- Con un índice negativo, fin indica un desplazamiento desde el final de la secuencia. slice(2,-1) extrae desde el tercer hasta el penúltimo elemento en la secuencia.
- Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length).
- Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length).

Ejemplo

```js
var nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
var masculinos = nombres.slice(1, 3);

// masculinos contiene ['Pedro','Miguel']
```

## array.some()

El método **`some()`** comprueba si al menos un elemento del arreglo cumple con la condición implementada por la función proporcionada.

Sintaxis

```js
arr.some(callback(element[, index[, array]])[, thisArg])

```

:::warning Nota
Este método devuelve false para cualquier condición puesta en un arreglo vacío.
:::

Ejemplo

```js
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true
```

## array.sort()

El método **`sort()`** ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado. El modo de ordenación por defecto responde a la posición del valor del string de acuerdo a su valor Unicode.

Sintaxis

```js
arr.sort([compareFunction]);
```

Ejemplo

```js
var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21];
puntos.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.

var cosas = ['word', 'Word', '1 Word', '2 Words'];
cosas.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// En Unicode, los números vienen antes que las letras mayúsculas
// y estas vienen antes que las letras minúsculas.
```

El metodo sort puede ser usado convenientemente con _function expressions_

```js
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
	return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

## array.split()

El método **`splice()`** cambia el contenido de un arreglo eliminando elementos existentes y/o agregando nuevos elementos.

Sintaxis

```js
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

```

Parámetros

**start**

- Índice donde se comenzará a cambiar el array (con 0 como origen). Si es mayor que la longitud del array, el punto inicial será la longitud del array. Si es negativo, empezará esa cantidad de elementos contando desde el
  final.

**deleteCount Opcional**

- Un entero indicando el número de elementos a eliminar del array antiguo.
- Si deleteCount se omite, o si su valor es mayor que arr.length - start (esto significa, si es mayor que el número de elementos restantes del array, comenzando desde start), entonces todos los elementos desde start hasta el final del array serán eliminados.
- Si deleteCount es igual a 0 o negativo, no se eliminará ningún elemento. En este caso, se debe especificar al menos un nuevo elemento (ver más abajo).

**item1, item2, ... Opcional**

- Los elementos que se agregarán al array, empezando en el índice start. Si no se especifica ningún elemento, splice() solamente eliminará elementos del array.

Ejemplos

**Eliminar 0 elementos desde el índice 2 e insertar "drum"**

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

**Eliminar 1 elemento desde el índice 3**

```js
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
```

**Eliminar 1 elemento desde el índice 2 e insertar "trumpet"**

```js
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, 'trumpet');

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]
```

**Eliminar 2 elementos desde el índice 0 e insertar "parrot", "anemone" y "blue"**

```js
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

**Eliminar 2 elementos desde el índice 2**

```js
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

// myFish is ["parrot", "anemone", "sturgeon"]
// removed is ["blue", "trumpet"]
```

**Eliminar 1 elemento desde el índice -2**

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// myFish is ["angel", "clown", "sturgeon"]
// removed is ["mandarin"]
```

**Eliminar todos los elementos tras el índice 2 (incl.)**

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// myFish is ["angel", "clown"]
// removed is ["mandarin", "sturgeon"]
```
