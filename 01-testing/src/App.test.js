import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); // Es una regex flag: https://www.codeguage.com/courses/regexp/flags 
  expect(linkElement).toBeInTheDocument();
});
