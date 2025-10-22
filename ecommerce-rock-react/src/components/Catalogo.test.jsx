import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // <-- Import jest-dom aquí
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
