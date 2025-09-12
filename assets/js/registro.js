// registro.js

document.addEventListener("DOMContentLoaded", () => {
  const registroForm = document.getElementById("registro-form");

  registroForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;

    // Validar que las contraseñas coincidan
    if (password !== password2) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Obtener usuarios existentes
    const users = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verificar si ya existe el email
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      alert("El correo ya está registrado.");
      return;
    }

    // Agregar nuevo usuario
    const newUser = { nombre, email, password };
    users.push(newUser);
    localStorage.setItem("usuarios", JSON.stringify(users));

    alert("Registro exitoso! Ahora puedes iniciar sesión.");
    window.location.href = "login.html";
  });
});

