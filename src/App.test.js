import { render, screen } from '@testing-library/react';
import App from './App';

test('Test Pass', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Test Pass/i);
  expect(linkElement).toBeInTheDocument();
});
