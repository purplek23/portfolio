/**
 * @vitest-environment jsdom
 */
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import TechStackVisualizer from '@/components/TechStackVisualizer';
import type { SkillCategory } from '@/components/TechStackVisualizer';

// Mock IntersectionObserver
vi.stubGlobal('IntersectionObserver', vi.fn().mockImplementation((callback) => ({
  observe: (el: any) => {
    callback([{ isIntersecting: true, target: el }]);
  },
  disconnect: vi.fn(),
  unobserve: vi.fn(),
})));

const MOCK_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '🎨',
    accentColor: '#3b82f6',
    skills: [
      { name: 'TypeScript', level: 90, yearsLabel: '5+ yrs' },
      { name: 'React', level: 85, yearsLabel: '4+ yrs' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    accentColor: '#10b981',
    skills: [
      { name: 'Node.js', level: 80, yearsLabel: '3+ yrs' },
    ],
  },
];

describe('TechStackVisualizer', () => {
  it('renders category tabs', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    expect(screen.getByRole('tab', { name: /frontend/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /backend/i })).toBeInTheDocument();
  });

  it('shows first category panel by default', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('switches to backend panel when backend tab is clicked', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    const backendTab = screen.getByRole('tab', { name: /backend/i });
    fireEvent.click(backendTab);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('displays years labels', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    expect(screen.getByText('5+ yrs')).toBeInTheDocument();
    expect(screen.getByText('4+ yrs')).toBeInTheDocument();
  });

  it('has correct ARIA roles on tabs', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    const tablist = screen.getByRole('tablist');
    expect(tablist).toBeInTheDocument();
    const tabs = screen.getAllByRole('tab');
    expect(tabs).toHaveLength(2);
  });

  it('sets aria-selected on the active tab', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    const frontendTab = screen.getByRole('tab', { name: /frontend/i });
    expect(frontendTab).toHaveAttribute('aria-selected', 'true');
    const backendTab = screen.getByRole('tab', { name: /backend/i });
    expect(backendTab).toHaveAttribute('aria-selected', 'false');
  });

  it('updates aria-selected after switching tabs', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    const backendTab = screen.getByRole('tab', { name: /backend/i });
    fireEvent.click(backendTab);
    expect(backendTab).toHaveAttribute('aria-selected', 'true');
  });

  it('renders skill IDs correctly', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    expect(document.getElementById('skill-typescript')).toBeInTheDocument();
    expect(document.getElementById('skill-react')).toBeInTheDocument();
  });

  it('renders the tabpanel with correct aria-labelledby', () => {
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    const panel = screen.getByRole('tabpanel');
    expect(panel).toHaveAttribute('aria-labelledby', 'tab-frontend');
  });

  it('runs animation after timeout', () => {
    vi.useFakeTimers();
    render(<TechStackVisualizer categories={MOCK_CATEGORIES} />);
    
    // Switch tab to trigger timeout
    const backendTab = screen.getByRole('tab', { name: /backend/i });
    fireEvent.click(backendTab);
    
    // Fast-forward timers
    vi.advanceTimersByTime(100);
    
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    
    vi.useRealTimers();
  });
});
