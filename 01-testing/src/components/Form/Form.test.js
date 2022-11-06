import { render, screen } from '@testing-library/react';
import { Form, checkEmail, handleSubmit } from './Forms.jsx';

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

// Test 3: Probamos una función cualquiera...
test('Probamos la función checkEmail', () => {
  const fakeEmail = 'juan pablo'
  const realEmail = 'juan_pablo@inove.com.ar'
  expect(checkEmail(realEmail)).toBe(true)
  expect(checkEmail(fakeEmail)).not.toBe(true)
});

// Test 4: Probamos una función cualquiera...
test('Probamos la función handleSubmit', () => {
  const mockedTarget = {
    fName: {
      value: "firstName"
    },
    lName: {
      value: "lastName"
    }, username: {
      value: "username"
    }, email: {
      value: "email@inove.com.ar"
    }
  }
  const mockedInput = {
    target: mockedTarget,
    preventDefault: () => { return null }
  }

  const expectedResult = {
    firstName: "firstName",
    lastName: "lastName",
    username: "username",
    email: "email@inove.com.ar",
  }
  expect(handleSubmit(mockedInput)).toStrictEqual(expectedResult)
});