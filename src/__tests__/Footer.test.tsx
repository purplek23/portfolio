/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders the brand logo and name', () => {
    render(<Footer />);
    expect(screen.getByText('Travis Kovar')).toBeInTheDocument();
    expect(screen.getByText('TK')).toBeInTheDocument();
  });

  it('displays the copyright year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('contains social links', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(document.getElementById('footer-links')).toBeInTheDocument();
    expect(document.getElementById('footer-github')).toBeInTheDocument();
    expect(document.getElementById('footer-linkedin')).toBeInTheDocument();
    expect(document.getElementById('footer-email')).toBeInTheDocument();
  });

  it('has a contentinfo landmark', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
