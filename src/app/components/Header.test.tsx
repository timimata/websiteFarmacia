import { fireEvent, render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renderiza a navegação principal', () => {
    render(<Header />);

    expect(screen.getByRole('button', { name: 'Início' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Serviços' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Contactos' })).toBeInTheDocument();
  });

  it('abre e fecha o menu mobile', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: 'Menu' });
    fireEvent.click(menuButton);

    expect(screen.getAllByText('Contacte-nos').length).toBeGreaterThan(1);

    fireEvent.click(menuButton);
    expect(screen.getByRole('button', { name: 'Menu' })).toBeInTheDocument();
  });
});
