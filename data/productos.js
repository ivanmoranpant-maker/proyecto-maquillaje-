// ============================================================
// CATÁLOGO DE PRODUCTOS
// ============================================================
// Para agregar un producto nuevo:
//   1. Copia UN bloque { ... } completo (incluye la coma final).
//   2. Pégalo antes del "];" de más abajo.
//   3. Cambia los valores de cada línea.
//   4. Sube sus fotos a: assets/productos/<id-del-producto>/
//      (usa el mismo "id" que pusiste abajo como nombre de carpeta)
//
// No necesitas tocar css/styles.css ni js/script.js: la tarjeta del
// producto se dibuja sola a partir de esta lista.
// ============================================================

const PRODUCTOS = [
  {
    id: "humide-serum-concealer",        // carpeta de imágenes: assets/productos/humide-serum-concealer/
    marca: "MONTOC",
    nombre: "HUMIDE Serum Concealer",
    precio: 38000,                       // solo el número, sin puntos ni signo $
    descripcion: "Corrector en gel con 59% de agua, Centella Asiática, moringa y macadamia. Difumina ojeras e imperfecciones con un acabado húmedo y natural.",
    tonos: 11,                           // cantidad de tonos disponibles (pon 0 si no aplica)
    imagen: "assets/productos/humide-serum-concealer/1.jpg",
  },

  // 👇👇 COPIA DESDE AQUÍ PARA AGREGAR EL SIGUIENTE PRODUCTO 👇👇
  // {
  //   id: "nombre-en-minusculas-sin-espacios",
  //   marca: "NOMBRE DE LA MARCA",
  //   nombre: "Nombre del producto",
  //   precio: 00000,
  //   descripcion: "Descripción corta y atractiva del producto (2-3 líneas máximo).",
  //   tonos: 0,
  //   imagen: "assets/productos/nombre-en-minusculas-sin-espacios/1.jpg",
  // },
];
