// assets/js/main.js

// Array para guardar productos en el carrito
let carrito = [];

// Selecciona todos los botones "Añadir al Carrito"
const botones = document.querySelectorAll(".add-to-cart-btn");
const contadorCarrito = document.getElementById("cart-count");

// Evento a cada botón
botones.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const producto = {
            id: index + 1,
            nombre: btn.parentElement.querySelector(".card-title").innerText,
            precio: 15000, // puedes cambiar por precios reales
            cantidad: 1
        };

        // Verificar si ya está en el carrito
        const existente = carrito.find(item => item.id === producto.id);
        if (existente) {
            existente.cantidad++;
        } else {
            carrito.push(producto);
        }

        actualizarCarrito();
    });
});

// Función para actualizar contador del carrito
function actualizarCarrito() {
    let totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contadorCarrito.innerText = totalItems;

    // Guardar en localStorage para persistencia
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Cargar carrito al iniciar
document.addEventListener("DOMContentLoaded", () => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"));
    if (carritoGuardado) {
        carrito = carritoGuardado;
        actualizarCarrito();
    }
});



document.addEventListener("DOMContentLoaded", () => {
  // Actualizar contador del carrito
  const contadorCarrito = document.getElementById("cart-count");
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  if(contadorCarrito) {
    contadorCarrito.textContent = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  }

  // Manejar usuario logueado
  const usuario = JSON.parse(localStorage.getItem("user"));
  const loginLink = document.getElementById("login-link");
  const registroLink = document.getElementById("registro-link");
  const logoutLink = document.getElementById("logout-link");

  if(usuario) {
    if(loginLink) loginLink.classList.add("d-none");
    if(registroLink) registroLink.classList.add("d-none");
    if(logoutLink) logoutLink.classList.remove("d-none");
  }

  // Botón cerrar sesión
  const logoutBtn = document.getElementById("logout-btn");
  if(logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user");
      alert("Has cerrado sesión");
      window.location.href = "index.html";
    });
  }
});


