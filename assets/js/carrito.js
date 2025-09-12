/* ================================
   Lógica del Carrito de Compras por usuario
   ================================ */

document.addEventListener("DOMContentLoaded", () => {
  const carritoItems = document.getElementById("carrito-items");
  const totalPrecio = document.getElementById("total-precio");
  const btnComprar = document.getElementById("btn-comprar");

  // Obtener usuario logueado
  const usuario = JSON.parse(localStorage.getItem("usuarioLogueado"));
  if (!usuario) {
    carritoItems.innerHTML = "<p>Debes iniciar sesión para ver tu carrito.</p>";
    totalPrecio.textContent = "$0";
    if (btnComprar) btnComprar.disabled = true;
    return;
  }

  // Obtener carrito del usuario
  let carrito = JSON.parse(localStorage.getItem(`carrito_${usuario.email}`)) || [];

  // Guardar carrito en localStorage
  function guardarCarrito() {
    localStorage.setItem(`carrito_${usuario.email}`, JSON.stringify(carrito));
  }

  // Renderizar productos en el carrito
  function renderCarrito() {
    carritoItems.innerHTML = "";

    if (carrito.length === 0) {
      carritoItems.innerHTML = "<p>Tu carrito está vacío 🛒</p>";
      totalPrecio.textContent = "$0";
      return;
    }

    let total = 0;

    carrito.forEach((producto, index) => {
      total += producto.precio * producto.cantidad;

      const item = document.createElement("div");
      item.classList.add("carrito-item");

      item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="carrito-info">
          <h3>${producto.nombre}</h3>
          <p>Cantidad: ${producto.cantidad}</p>
        </div>
        <span class="carrito-precio">$${producto.precio * producto.cantidad}</span>
        <div class="carrito-acciones">
          <button class="eliminar" data-index="${index}">Eliminar</button>
        </div>
      `;

      carritoItems.appendChild(item);
    });

    totalPrecio.textContent = `$${total}`;
    guardarCarrito();
  }

  // Eliminar producto del carrito
  carritoItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
      const index = e.target.dataset.index;
      carrito.splice(index, 1);
      renderCarrito();
    }
  });

  // Finalizar compra
  if (btnComprar) {
    btnComprar.addEventListener("click", () => {
      if (carrito.length === 0) {
        alert("Tu carrito está vacío, agrega productos antes de comprar.");
        return;
      }

      alert(`¡Gracias por tu compra, ${usuario.nombre}! 🎸🤘`);
      carrito = [];
      renderCarrito();
    });
  }

  // Inicializar render
  renderCarrito();
});


