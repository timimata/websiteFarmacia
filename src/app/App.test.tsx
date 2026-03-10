import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renderiza o conteúdo principal da homepage', () => {
    render(<App />);

    expect(screen.getAllByText('Farmácia Ascensão Nunes').length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /A sua saúde é a nossa/i })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /Contactar/i }).length).toBeGreaterThan(0);
  });
});
