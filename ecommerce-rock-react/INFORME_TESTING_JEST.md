# Informe de Testing: Pruebas Unitarias con Jest en React

## 1. Configuración del entorno de pruebas

Para asegurar la calidad y correcto funcionamiento de los componentes del proyecto, se implementó un entorno de pruebas unitarias utilizando **Jest** y **React Testing Library**.

### Pasos realizados:
- Instalación de dependencias:
  - `jest`: framework de testing.
  - `@testing-library/react`: utilidades para testear componentes React.
  - `@testing-library/jest-dom`: matchers adicionales para aserciones en el DOM.
  - `babel-jest`: para transformar código JSX/ES6.
  - `identity-obj-proxy`: para ignorar imports de CSS en los tests.
- Creación del archivo `jest.config.js` para configurar Jest:
  - Se especificó el entorno `jsdom` (simula un navegador).
  - Se configuró el transformador de Babel para soportar JSX.
  - Se agregó un mapeo para ignorar archivos CSS.
- Se agregó el script `"test:jest": "jest"` en `package.json` para ejecutar las pruebas fácilmente.

## 2. Ejemplo de prueba unitaria realizada

Se creó el archivo `src/components/Catalogo.test.jsx` para probar el componente `Catalogo`.

```jsx
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Catalogo from './Catalogo';

describe('Catalogo Component', () => {
  it('renderiza el título del catálogo', () => {
    render(<Catalogo />);
    expect(screen.getByText(/Nuestro Catálogo/i)).toBeInTheDocument();
  });

  it('renderiza productos', () => {
    render(<Catalogo />);
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
  });

  it('llama a onAddToCart al hacer click en el botón', () => {
    const mockAddToCart = jest.fn();
    render(<Catalogo onAddToCart={mockAddToCart} />);
    const button = screen.getAllByRole('button', { name: /añadir al carrito/i })[0];
    fireEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalled();
  });
});
```

### Explicación de las pruebas:
- **Renderiza el título:** Verifica que el texto "Nuestro Catálogo" aparece en pantalla.
- **Renderiza productos:** Comprueba que se muestran imágenes de productos (al menos una).
- **Función de añadir al carrito:** Simula un click en el botón "Añadir al Carrito" y verifica que se llama la función correspondiente.

## 3. Ejecución de las pruebas

Para ejecutar las pruebas, se utiliza el comando:
```
npm run test:jest
```
Esto ejecuta todas las pruebas y muestra el resultado en la terminal, indicando si los componentes funcionan correctamente.

## 4. Beneficios del testing automatizado
- Permite detectar errores antes de subir cambios al proyecto.
- Garantiza que los componentes respondan correctamente a las acciones del usuario.
- Facilita el mantenimiento y la calidad del código.

---

Este proceso asegura que el frontend del proyecto sea robusto, confiable y fácil de mantener.
