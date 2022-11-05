import { render, screen } from '@testing-library/react';
import Form from '../components/Forms';


// Ejemplo de control de datos en formulario:
// Test 1:
test('Compruebo que están todos los campos en el formulario', () => {
  render(<Form />);
  const fNameField = screen.getByText(/First Name/i);
  const lNameField = screen.getByText(/Last Name/i);
  const usernameField = screen.getByText(/Username/i);
  const emailField = screen.getByText(/E-mail/i);
  expect(fNameField).toBeInTheDocument();
  expect(lNameField).toBeInTheDocument();
  expect(usernameField).toBeInTheDocument();
  expect(emailField).toBeInTheDocument();
});

// Test 2:
test('Una mejor manera de comprobar los campos del formulario', () => {
  render(<Form />);
  const fields = [/First Name/i, /Last Name/i, /Username/i, /E-mail/i]
  fields.map((field) => {
    expect(screen.getByText(field)).toBeInTheDocument()
    return null
  })
});