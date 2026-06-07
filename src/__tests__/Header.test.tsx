/**
 * @vitest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders the logo with name', () => {
    render(<Header />);
    expect(screen.getByText('Travis Kovar')).toBeInTheDocument();
    expect(screen.getByText('TK')).toBeInTheDocument();
  });

  it('renders all navigation links in desktop nav', () => {
    render(<Header />);
    expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument();
  });

  it('renders the mobile menu toggle button', () => {
    render(<Header />);
    const toggle = screen.getByRole('button', { name: /toggle mobile menu/i, hidden: true });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens mobile menu when toggle is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const toggle = screen.getByRole('button', { name: /toggle mobile menu/i, hidden: true });
    await user.click(toggle);
    expect(screen.getByRole('button', { name: /toggle mobile menu/i, hidden: true })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2);
  });

  it('has correct IDs on nav links', () => {
    render(<Header />);
    expect(document.getElementById('nav-logo')).toBeInTheDocument();
    expect(document.getElementById('nav-about')).toBeInTheDocument();
    expect(document.getElementById('nav-experience')).toBeInTheDocument();
    expect(document.getElementById('nav-skills')).toBeInTheDocument();
    expect(document.getElementById('nav-contact')).toBeInTheDocument();
  });

  it('changes style on scroll', () => {
    render(<Header />);
    const header = document.getElementById('header');
    expect(header).toHaveStyle({ background: 'transparent' });
    
    // Fire scroll
    fireEvent.scroll(window, { target: { scrollY: 100 } });
    
    expect(header).toHaveStyle({ background: 'rgba(6, 8, 16, 0.85)' });
  });
});
