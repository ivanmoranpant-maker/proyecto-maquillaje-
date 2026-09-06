# proyecto-maquillaje-

Página web publicitaria de venta de maquillaje. Producto destacado: **HUMIDE Serum Concealer** de MONTOC.

Diseño minimalista en tonos crema y suaves, pensado para un público femenino.

## Contenido

- `index.html` — estructura de la página (hero, beneficios, descripción, selector de 11 tonos, catálogo, testimonios y sección de compra).
- `css/styles.css` — estilos (paleta crema/blush/terracota, tipografías serif + sans, animaciones al hacer scroll).
- `js/script.js` — lógica de los 11 tonos, catálogo, menú móvil y formulario de compra.
- `data/productos.js` — **lista de productos del catálogo**. Editar este archivo para agregar/quitar productos.
- `assets/productos/<id-del-producto>/` — fotos de cada producto.

## Cómo verla

Abre `index.html` directamente en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8080
```

y visita `http://localhost:8080`.

## Cómo agregar un producto nuevo

1. Abre `data/productos.js`.
2. Copia un bloque `{ ... }` completo y pégalo antes del `];` final.
3. Cambia los valores: `id`, `marca`, `nombre`, `precio`, `descripcion`, `tonos`, `imagen`.
4. Sube las fotos del producto a `assets/productos/<id>/` (usa el mismo `id` como nombre de carpeta).
5. Guarda y listo — la tarjeta aparece sola en la sección "Catálogo" de la página.

No es necesario tocar `index.html`, `css/styles.css` ni `js/script.js` para agregar productos.

## Producto destacado

**HUMIDE Serum Concealer** — corrector en gel con 59% de agua, Centella Asiática, moringa y macadamia. Cobertura media-alta con acabado húmedo y natural. Disponible en 11 tonos. Precio: **$38.000 COP**.
