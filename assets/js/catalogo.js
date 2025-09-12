/* ================================
   Lógica para agregar productos al carrito por usuario logueado
   ================================ */

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".add-to-cart");
  const cartCount = document.getElementById("cart-count");

  // Obtener usuario logueado
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  if (!usuario) {
    if (botones.length) {
      botones.forEach(btn => {
        btn.addEventListener("click", () => {
          alert("Debes iniciar sesión para añadir productos al carrito.");
          window.location.href = "login.html";
        });
      });
    }
    cartCount.textContent = 0;
    return;
  }

  // Obtener carrito del usuario
  let carrito = JSON.parse(localStorage.getItem(`carrito_${usuario.email}`)) || [];

  // Actualizar contador en navbar
  function actualizarContador() {
    const totalItems = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    if (cartCount) cartCount.textContent = totalItems;
  }

  // Guardar carrito
  function guardarCarrito() {
    localStorage.setItem(`carrito_${usuario.email}`, JSON.stringify(carrito));
    actualizarContador();
  }

  // Evento para agregar producto
  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const producto = {
        nombre: btn.dataset.nombre,
        precio: parseInt(btn.dataset.precio) || 0,
        imagen: btn.dataset.imagen,
        cantidad: 1
      };

      // Si el producto ya está en el carrito, aumentar cantidad
      const existe = carrito.find(p => p.nombre === producto.nombre);
      if (existe) {
        existe.cantidad++;
      } else {
        carrito.push(producto);
      }

      guardarCarrito();
      alert(`${producto.nombre} fue añadido al carrito 🛒`);
    });
  });

  // Inicializar contador al cargar
  actualizarContador();
});


