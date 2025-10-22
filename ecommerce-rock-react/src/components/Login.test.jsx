import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { TextEncoder, TextDecoder } from 'util';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

describe('Login Component', () => {
  it('renderiza el formulario de login', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/Correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña/i)).toBeInTheDocument();
  });

  it('muestra mensaje de error si los campos están vacíos', async () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /ingresar/i }));
    expect(await screen.findByText(/Usuario y contraseña son obligatorios/i)).toBeInTheDocument();
  });

  it('muestra mensaje de error si las credenciales son incorrectas', () => {
    const mockOnLogin = jest.fn(() => false);
    render(
      <MemoryRouter>
        <AuthProvider>
          <Login onLogin={mockOnLogin} />
        </AuthProvider>
      </MemoryRouter>
    );
    fireEvent.change(screen.getByLabelText(/Correo/i), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), { target: { value: 'wrongpass' } });
    fireEvent.click(screen.getByRole('button', { name: /ingresar/i }));
    expect(screen.getByText(/Credenciales incorrectas/i)).toBeInTheDocument();
  });
});
