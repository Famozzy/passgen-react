import { render, screen } from '@testing-library/react';
import App from './App';

test('render App elements', () => {
  render(<App />);
  const titleLement = screen.getByText(/PassGen/i);
  expect(titleLement).toBeInTheDocument();
});
