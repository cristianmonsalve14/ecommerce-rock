# Proceso de Testeo Unitario en el Frontend

### a. Herramientas de testeo configuradas y cobertura de funcionalidades principales

- Se configuró **Jest** como herramienta principal de testing, junto con **React Testing Library**.
- Se instalaron todas las dependencias necesarias para soportar pruebas en React, incluyendo el manejo de JSX, imports de CSS y entorno simulado de navegador (`jsdom`).
- Se implementó un polyfill global de TextEncoder/TextDecoder para compatibilidad con Jest.
- Las pruebas unitarias creadas cubren funcionalidades principales de los siguientes componentes:
  - Catalogo
  - Carrito
  - Login
  - Contacto
  - Registro
  - Navbar
  - Footer
  - PanelUsuario
  - AdminPanel
  - ProtectedRoute
  - Blog
  - BlogPost
  - Hero
  - BlogAside

### b. Proceso de testeo unitario implementado y conceptos clave

1. **Configuración del entorno de pruebas**
   - Se creó el archivo `jest.config.js` para definir el entorno de pruebas, transformadores de Babel y mapeo de imports de CSS.
   - Se agregó el script `npm run test:jest` para ejecutar las pruebas fácilmente desde la terminal.
   - Se corrigió la configuración duplicada de Jest en `package.json`.

2. **Escritura de pruebas unitarias**
   - Las pruebas se escriben en archivos `.test.jsx` junto a los componentes.
   - Se utiliza `describe` para agrupar pruebas y `it` para definir cada caso de uso.
   - Se usa `render` de Testing Library para montar el componente y `screen` para consultar elementos del DOM.
   - Se simulan eventos de usuario con `fireEvent`.
   - Se emplean contextos y routers en los tests donde es necesario.

3. **Uso de mocks**
   - Se emplean funciones mock (por ejemplo, `jest.fn()`) para simular callbacks y verificar que se llamen correctamente al interactuar con la UI.
   - Esto permite aislar el comportamiento del componente y asegurar que responde como se espera.

4. **Análisis de resultados**
   - Al ejecutar `npm run test:jest`, Jest muestra en la terminal el resultado de cada prueba, indicando si pasó o falló.
   - Si una prueba falla, Jest muestra el motivo y la línea exacta, facilitando la corrección de errores.
   - El reporte incluye el número de pruebas ejecutadas, pasadas y fallidas.

---

Este proceso asegura que el desarrollo frontend sea robusto, confiable y que los cambios futuros no rompan funcionalidades existentes, cumpliendo con los conceptos clave del testeo moderno en React.
