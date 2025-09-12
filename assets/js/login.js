// login.js

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Obtener usuarios registrados del localStorage
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Buscar usuario
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      alert(`Bienvenido, ${user.nombre}!`);
      // Guardar sesión temporal
      localStorage.setItem("usuarioLogueado", JSON.stringify(user));
      // Redirigir al catálogo
      window.location.href = "catalogo.html";
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  });
});

