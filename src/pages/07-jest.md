# Jest. Testing

## Introducción

Jest es un marco de prueba de JavaScript mantenido por Meta, diseñado y construido por Christoph Nakazawa con un enfoque en la simplicidad y el soporte para grandes aplicaciones web. Funciona con proyectos que utilizan Babel, TypeScript, Node.js, React, Angular, Vue.js y Svelte.

## Instalación

Instala Jest utilizando tu gestor de paquetes favorito:

**`npm`**

```npm
npm install --save-dev jest
```

**`yarn`**

```
yarn add --dev jest
```

## Mi primer test

Empecemos escribiendo una prueba para una función hipotética que suma dos números.

Primero, crea un archivo **`suma.js`**:

```js
function suma(a, b) {
  return a + b;
}
module.exports = suma;
```

Luego, crea un archivo llamado **`suma.test.js`**. Este contendrá nuestra prueba actual:

```js
const suma = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});
```

Agrega la siguiente sección a tu **`package.json`**:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Por último, ejecuta **`yarn test`** o **`npm test`** y Jest mostrará este mensaje:

```
PASS ./suma.test.js
✓ sumar 1 + 2 es igual a 3 (5ms)
```

¡Acabas de escribir tu primera prueba usando Jest!

## Marcadores más comunes

El camino más simple para comprobar un valor es con una igualdad.

```js
test('dos mas dos son cuatro', () => {
  expect(2 + 2).toBe(4);
});
```

Este código, `expect (2 + 2)` devuelve un objeto de "expectativa". Típicamente no hará mucho con esos objetos de tipo expectations, excepto llamar a matchers en ellos. Este código, `.toBe(4)` es el matcher. Cuando Jest es ejecutado, este sigue la huella de los matchers así que puede imprimir un mensaje de error más agradable.

`toBe` usa `Object.is` para probar la igualdad exacta. Si desea comprobar el valor de un objeto, utilice `toEqual` en su lugar:

```js
test('asignación de un objeto', () => {
  const datos = { uno: 1 };
  datos['dos'] = 2;
  expect(datos).toEqual({ uno: 1, dos: 2 });
});
```

`toEqual` verifica recursivamente cada campo de un objeto o de un arreglo.

También puedes comprobar lo contrario de lo que espera el comparador:

```js
test('agregando un numero positivo que no sea 0', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

## Veracidad

En los tests, a veces es necesario distinguir entre `undefined`, `null`, y `false`, pero en otras ocasiones quizás deseas tratarlos por igual. Jest contiene helpers que te permitirán ser explícito acerca de lo que deseas.

- `toBeNull` coincide solo con `null`
- `toBeUndefined` coincide solo con `undefined`
- `toBeDefinedes` el opuesto a `toBeUndefined`
- `toBeTruthy` coincide con lo que sea que el condicional `if` devuelva como verdadero
- `toBeFalsy` coincide con lo que sea que el condicional `if` devuelva como falso

  Por ejemplo:

```js
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('cero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

Deberías usar el matcher que corresponda de manera más precisa a lo que quiera que su código haga.

## Números

Existen múltiples matchers equivalentes para la comprobación de números.

```js
test('dos mas dos', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe y toEqual son equivalentes para números
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

Para la igualdad de puntos flotantes, usa `toBeCloseTo` en lugar de `toEqual`, porque no quiere que una prueba dependa de un pequeño error de redondeo.

```js
test('agregando números de punto flotante', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3); Esto no funcionará debido al error de redondeo
  expect(value).toBeCloseTo(0.3); // Esto funciona.
});
```

## Cadenas de texto

Puede probar cadenas contra expresiones regulares con `toMatch`:

```js
test('no hay I en Team', () => {
  expect('team').not.toMatch(/I/);
});

test('hay "stop" en Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

## Vectores e iterables

Puedes comprobar si un array o iterable contiene un elemento en particular usando `toContain`:

```js
const listaDeCompras = [
  'pañales',
  'pañuelos',
  'bolsas de basura',
  'toallas de papel',
  'leche',
];

test('la leche se encuentra en la lista de compras', () => {
  expect(listaDeCompras).toContain('leche');
  expect(new Set(listaDeCompras)).toContain('leche');
});
```

Para una lista completa de matchers, revise los documentos de referencia [reference docs.](https://jestjs.io/es-ES/docs/28.0/expect)

## Caso de uso

### El test de `Fizz Buzz` para contratar programadores

Escribir un programa que muestre en pantalla los números del 1 al 100, sustituyendo:

- Los múltiplos de 3 por la palabra **`fizz`**
- Los múltiplos de 5 por **`buzz`**, y
- Los múltiplos de ambos, es decir, los múltiplos de 3 y 5 (o de 15), por la palabra **`fizzbuzz`**.

### fizzbuzz.test.js

#### Estructura básica

```js
const fizzbuzz = require('./fizzbuzz.js');

describe('Pruebas en fizzbuzz.js', () => {

  ...tests

}
```

#### Primer Test

```js
test('se espera que número sea igual a numero', () => {
  const num = 1;
  const expected = fizzbuzz(num);
  const result = num;

  expect(expected).toBe(result);
});
```

#### Segundo Test

```js
test('se espera que 3 sea igual a fizz', () => {
  const num = 3;
  const expected = fizzbuzz(num);
  const result = 'fizz';

  expect(expected).toBe(result);
});
```

#### Tercer Test

```js
test('se espera que los múltiplos de 3 sea igual a fizz', () => {
  const num = 6;
  const expected = fizzbuzz(num);
  const result = 'fizz';

  expect(expected).toBe(result);
});
```

#### Cuarto Test

```js
test('se espera que 5 sea igual a buzz', () => {
  const num = 5;
  const expected = fizzbuzz(num);
  const result = 'buzz';

  expect(expected).toBe(result);
});
```

#### Quinto Test

```js
test('se espera que los múltiplos de 5 sea igual a buzz', () => {
  const num = 10;
  const expected = fizzbuzz(num);
  const result = 'buzz';

  expect(expected).toBe(result);
});
```

#### Sexto Test

```js
test('se espera que los múltiplos de 3 y 5 sea igual a fizzbuzz', () => {
  const num = 15;
  const expected = fizzbuzz(num);
  const result = 'fizzbuzz';

  expect(expected).toBe(result);
});
```

### fizzbuzz.js

#### Versión 1.0. Resolviendo los tests

```js
const fizzbuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num === 3) return 'fizz';
  if (num % 3 === 0) return 'fizz';
  if (num === 5) return 'buzz';
  if (num % 5 === 0) return 'buzz';

  return num;
};

module.exports = fizzbuzz;
```

#### Ejecutando los test

```
npm test
```

#### Resultado de los test

```
> jest-fizzbuzz@1.0.0 test
> jest

 PASS  src/fizzbuzz.test.js
  Pruebas en fizzbuzz.js
    ✓ se espera que número sea igual a numero (2 ms)
    ✓ se espera que 3 sea igual a fizz (1 ms)
    ✓ se espera que los múltiplos de 3 sea igual a fizz
    ✓ se espera que 5 sea igual a buzz
    ✓ se espera que los múltiplos de 5 sea igual a buzz (1 ms)
    ✓ se espera que los múltiplos de 3 y 5 sea igual a fizzbuzz

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.382 s, estimated 1 s
Ran all test suites.
```

#### Versión 2.0. Reduciendo código

```js
const fizzbuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';

  return num;
};

module.exports = fizzbuzz;
```

#### Versión 3.0. Optimización funcional

```js
const fizzbuzz = (num) => {
  const esMultiplo = (num, divisor) => num % divisor === 0;

  if (esMultiplo(num, 3) && esMultiplo(num, 5)) return 'fizzbuzz';
  if (esMultiplo(num, 3)) return 'fizz';
  if (esMultiplo(num, 5)) return 'buzz';
  return num;
};

module.exports = fizzbuzz;
```

### fizzbuzz.js (final)

```js
const fizzbuzz = (num) => {
  const esMultiplo = (num, divisor) => num % divisor === 0;

  if (num === 0) return 0;
  if (esMultiplo(num, 3) && esMultiplo(num, 5)) return 'fizzbuzz';
  if (esMultiplo(num, 3)) return 'fizz';
  if (esMultiplo(num, 5)) return 'buzz';
  return num;
};

const lista = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
};

const args = process.argv.slice(2);
lista(args[0]);

module.exports = fizzbuzz;
```

#### Ejecutando en línea de comando

```
node fizzbuzz 100
```

#### Salida de la consola

```
0: 0
1: 1
2: 2
3: fizz
4: 4
5: buzz
6: fizz
7: 7
8: 8
9: fizz
10: buzz
11: 11
12: fizz
13: 13
14: 14
15: fizzbuzz
16: 16
17: 17
18: fizz
19: 19
20: buzz
21: fizz
22: 22
23: 23
24: fizz
25: buzz
26: 26
27: fizz
28: 28
29: 29
30: fizzbuzz
...
```
