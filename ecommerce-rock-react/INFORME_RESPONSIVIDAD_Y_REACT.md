# Informe: Uso de React y Responsividad en el Proyecto E-commerce Poleras de Rock

## 1. Uso de un Framework de JavaScript Moderno (React)

El proyecto fue desarrollado utilizando **React**, un framework moderno de JavaScript que permite construir aplicaciones web de manera modular, eficiente y escalable. React facilita la creación de interfaces de usuario a través de componentes reutilizables, lo que mejora la organización y el mantenimiento del código. Además, React permite una actualización eficiente del DOM y una experiencia de usuario fluida.

## 2. Desarrollo de Componentes React: Gestión de Props y Estado

Cada sección principal del sitio (Catálogo, Carrito, Blog, Nosotros, Contacto, Registro, Login) se implementó como un componente React independiente. 

- **Props:** Se utilizan para pasar datos y funciones entre componentes. Por ejemplo, el componente `Catalogo` recibe la función `onAddToCart` como prop para añadir productos al carrito.
- **Estado:** Se gestiona con el hook `useState` para manejar información dinámica, como la lista de productos, el contenido del carrito o los mensajes de confirmación.

**Ejemplo en `Catalogo.jsx`:**
```jsx
const [productos, setProductos] = useState([]);
const [toast, setToast] = useState('');
```
Esto permite que la interfaz reaccione automáticamente a las acciones del usuario, mostrando mensajes o actualizando la lista de productos en tiempo real.

**Personalización y funcionamiento correcto:**
- Los props permiten reutilizar componentes y pasar funciones/datos entre ellos.
- El estado (`useState`) permite que los componentes reaccionen a cambios y actualicen la UI dinámicamente.
- Se asegura así un funcionamiento correcto y personalizado de cada parte de la aplicación.

## 3. Implementación de Diseño Responsivo con Bootstrap

Para asegurar que la aplicación sea usable en cualquier dispositivo, se integró **Bootstrap** junto con CSS personalizado.

- Se emplean clases de Bootstrap como `container`, `row`, `col`, `btn`, etc., para estructurar y estilizar los componentes.
- El catálogo de productos utiliza un grid responsivo:
```css
#productos-lista {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem 1.5rem;
}
@media (max-width: 900px) {
  #productos-lista {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  #productos-lista {
    grid-template-columns: 1fr;
  }
}
```
- Los formularios y botones también usan clases Bootstrap para adaptarse a pantallas pequeñas y grandes.

**Ejemplo de visualización responsiva:**
- En un computador, el catálogo muestra 3 productos por fila; en tablet, 2; y en móvil, 1, asegurando una experiencia óptima en todos los dispositivos.
- La Navbar se transforma en menú hamburguesa en móviles.
- El aside de noticias y las tarjetas se adaptan a diferentes anchos de pantalla.

---

Este enfoque garantiza una experiencia de usuario moderna, profesional y adaptable a cualquier dispositivo, cumpliendo con los estándares actuales de desarrollo frontend.
