export function getProductos() {
  const data = localStorage.getItem('productos');
  if (data) return JSON.parse(data);
  return [
    {
      id: 1,
      nombre: "Polera Deep Purple",
      descripcion: "Polera de rock de alta calidad con diseño exclusivo inspirado en Deep Purple.",
      precio: 15990,
      stock: 10,
      imagen: "/img/deep-purple.jpg"
    },
    {
      id: 2,
      nombre: "Polera Guns N' Roses",
      descripcion: "Polera con el icónico diseño de Guns N' Roses.",
      precio: 14990,
      stock: 8,
      imagen: "/img/guns-roses.jpg"
    }
  ];
}

export function saveProductos(productos) {
  localStorage.setItem('productos', JSON.stringify(productos));
}

export function addProducto(producto) {
  const productos = getProductos();
  productos.push({ ...producto, id: Date.now() });
  saveProductos(productos);
  return productos;
}

export function updateProducto(producto) {
  let productos = getProductos();
  productos = productos.map(p => p.id === producto.id ? producto : p);
  saveProductos(productos);
  return productos;
}

export function deleteProducto(id) {
  let productos = getProductos();
  productos = productos.filter(p => p.id !== id);
  saveProductos(productos);
  return productos;
}
