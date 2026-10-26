# Respuestas Teoría - Unidad 2: Programación Funcional (2º SMX)

---

## 2.3.2 EJERCICIO: Encontrar un ejemplo de función pura y explicar por qué lo es

### Ejemplo de función pura:

```javascript
function calcularCuadrado(numero) {
  return numero * numero;
}

console.log(calcularCuadrado(5));
console.log(calcularCuadrado(3));
```

### ¿Por qué es una función pura?

Esta función es pura porque cumple los requisitos vistos en clase:

1. **Siempre devuelve el mismo resultado (es predecible):** Si le pasas el número `5`, siempre devolverá `25`, sin importar cuántas veces se ejecute ni en qué momento. Solo depende del argumento que recibe entre paréntesis.
2. **No tiene efectos secundarios:**
   - No modifica variables de fuera (no toca variables globales).
   - No modifica el parámetro que recibe.
   - No utiliza `this`.
   - No realiza operaciones externas como alterar el DOM (HTML), mostrar alertas ni conectarse a internet. Solo realiza la operación matemática y devuelve el resultado con `return`.

---

## 2.4.1 EJERCICIO: Encontrar lenguajes de programación que puedan trabajar "funcionalmente" y explicar ventajas respecto a la programación imperativa

### 1. Lenguajes que pueden trabajar de forma funcional:

- **JavaScript:** Aunque es multiparadigma, permite trabajar de forma funcional usando funciones flecha (`=>`) y métodos de array como `.map()`, `.filter()` o `.reduce()`.
- **Python:** Permite trabajar con funciones `lambda` y funciones de orden superior como `map()` y `filter()`.
- **Haskell:** Es el lenguaje funcional puro por excelencia (todo el código se basa en funciones puras).
- **Scala** y **Kotlin:** Lenguajes modernos que combinan orientación a objetos con programación funcional.

---

### 2. Ventajas de la programación funcional frente a la imperativa:

1. **Código más corto y limpio (Declarativo):**
   - En lugar de escribir un bucle `for` manual paso a paso con contadores (`let i = 0; i < array.length; i++`), indicamos directamente *qué queremos obtener* (por ejemplo con `.map()`).
2. **Menos errores (bugs):**
   - Al no modificar variables globales ni alterar el estado de otras partes del programa, es mucho más difícil que una función estropee otra parte del código por accidente.
3. **Más fácil de entender y de probar (Testing):**
   - Las funciones actúan como piezas aisladas. Se pueden probar fácilmente comprobando qué entra y qué sale, sin depender del estado externo del sistema.
