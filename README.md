# Práctica: Presentación de un producto en Angular

Página que presenta un producto (un celular) de la tienda **JesusStore**.

## Cómo ejecutar

```bash
npm install
npm start
```

Abrir http://localhost:4200

## 1. Datos (`src/app/app.ts`)

- Interfaz `Producto` (antes de `@Component`) con `nombre: string`, `precio: number`, `disponible: boolean`.
- En la clase `App`: `nombreTienda`, `encargado`, `numeroSucursal`, `tiendaAbierta`, `categorias` y el objeto `producto`.

## 2. Presentación (`src/app/app.html`)

Muestra el nombre de la tienda, "Tienda abierta" / "Tienda cerrada" con `@if`,
las categorías en una lista con `@for`, el nombre y precio del producto, y
"Producto disponible" / "Producto agotado" con `@if`.

## 3. Comprobación del funcionamiento

| Cambio en `app.ts` | Antes | Después | Resultado en la página |
|---|---|---|---|
| `tiendaAbierta` | `true` | `false` | Cambia a "Tienda cerrada" |
| `producto.disponible` | `true` | `false` | Cambia a "Producto agotado" |
| `categorias` | 3 categorías | se agrega "Tablets" | La lista muestra 4 elementos |
| `producto` | Samsung Galaxy A55 – Bs. 3200 | iPhone 15 – Bs. 7500 | Se muestran el nuevo nombre y precio |

Los cambios están en un commit aparte del historial para poder comparar el antes y el después.

## 4. Preguntas

**1. ¿Qué función cumple `@Component`?**
Es un decorador que convierte la clase `App` en un componente de Angular. Le indica
a Angular cuál es su selector (`app-root`, la etiqueta que se usa en `index.html`),
qué plantilla HTML usa (`templateUrl`) y qué estilos aplica (`styleUrl`).

**2. ¿Para qué sirve la interfaz `Producto`?**
Define la "forma" que debe tener un producto: qué propiedades tiene y de qué tipo
es cada una. Así TypeScript avisa con un error si al objeto le falta una propiedad,
tiene una de más o se le asigna un tipo incorrecto (por ejemplo, un texto en `precio`).

**3. ¿Qué hace `{{ }}`?**
Es la interpolación: muestra en el HTML el valor de una propiedad de la clase. Por
ejemplo `{{ nombreTienda }}` imprime "JesusStore". Si el valor cambia en `app.ts`,
la página se actualiza automáticamente.

**4. ¿Qué diferencia existe entre `@if` y `@for`?**
`@if` es condicional: muestra un bloque solo si la condición es verdadera (y con
`@else` muestra otro si es falsa). `@for` es repetitivo: recorre un arreglo y
genera el bloque una vez por cada elemento, como los `<li>` de las categorías.

**5. ¿Por qué `tiendaAbierta` utiliza el tipo `boolean`?**
Porque la tienda solo puede estar en dos estados: abierta (`true`) o cerrada
(`false`). Un booleano representa exactamente eso y se puede usar directamente
como condición en `@if`.
