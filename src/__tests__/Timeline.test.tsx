/**
 * @vitest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Timeline from '@/components/Timeline';
import type { TimelineEntry } from '@/components/Timeline';

// Mock IntersectionObserver
const mockDisconnect = vi.fn();
vi.stubGlobal('IntersectionObserver', vi.fn().mockImplementation((callback) => ({
  observe: (el: any) => {
    callback([{ isIntersecting: true, target: el }]);
  },
  disconnect: mockDisconnect,
  unobserve: vi.fn(),
})));

const MOCK_ENTRIES: TimelineEntry[] = [
  {
    id: 'role-a',
    title: 'Senior Engineer',
    company: 'TechCorp',
    companyType: 'SaaS',
    duration: '2 yrs',
    dateRange: '2022 – 2024',
    achievements: ['Built a product', 'Led a team of <strong>5 engineers</strong>'],
    technologies: ['TypeScript', 'React'],
    accentColor: '#3b82f6',
    icon: '🚀',
  },
  {
    id: 'role-b',
    title: 'Junior Developer',
    company: 'StartupXYZ',
    companyType: 'Startup',
    duration: '1 yr',
    dateRange: '2021 – 2022',
    achievements: ['Wrote code'],
    technologies: ['JavaScript'],
    accentColor: '#8b5cf6',
    icon: '💻',
  },
];

describe('Timeline', () => {
  it('renders all timeline entries', () => {
    render(<Timeline entries={MOCK_ENTRIES} />);
    expect(screen.getByText('Senior Engineer')).toBeInTheDocument();
    expect(screen.getByText('Junior Developer')).toBeInTheDocument();
  });

  it('renders company names', () => {
    render(<Timeline entries={MOCK_ENTRIES} />);
    expect(screen.getByText('TechCorp')).toBeInTheDocument();
    expect(screen.getByText('StartupXYZ')).toBeInTheDocument();
  });

  it('renders date ranges', () => {
    render(<Timeline entries={MOCK_ENTRIES} />);
    expect(screen.getByText('2022 – 2024')).toBeInTheDocument();
    expect(screen.getByText('2021 – 2022')).toBeInTheDocument();
  });

  it('renders duration badges', () => {
    render(<Timeline entries={MOCK_ENTRIES} />);
    expect(screen.getByText('2 yrs')).toBeInTheDocument();
    expect(screen.getByText('1 yr')).toBeInTheDocument();
  });

  it('renders technology badges', () => {
    render(<Timeline entries={MOCK_ENTRIES} />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('renders icons', () => {
    render(<Timeline entries={MOCK_ENTRIES} />);
    expect(screen.getByText('🚀')).toBeInTheDocument();
    expect(screen.getByText('💻')).toBeInTheDocument();
  });

  it('renders with correct IDs', () => {
    render(<Timeline entries={MOCK_ENTRIES} />);
    expect(document.getElementById('timeline')).toBeInTheDocument();
    expect(document.getElementById('timeline-item-role-a')).toBeInTheDocument();
    expect(document.getElementById('timeline-item-role-b')).toBeInTheDocument();
  });

  it('sets up IntersectionObserver on mount', () => {
    render(<Timeline entries={MOCK_ENTRIES} />);
    expect(window.IntersectionObserver).toHaveBeenCalled();
  });

  it('renders empty state without errors', () => {
    const { container } = render(<Timeline entries={[]} />);
    expect(container).toBeInTheDocument();
  });
});
