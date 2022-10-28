import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Expense Tracker header', () => {
  render(<App />);
  const linkElement = screen.getByText('Expense Tracker');
});
