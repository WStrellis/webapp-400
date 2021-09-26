import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/today is \d\/\d\d\/[\d]{4}/i);
  expect(linkElement).toBeInTheDocument();
});
