import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WorkTab from './WorkTab';

describe('WorkTab Component', () => {
  it('renders all work items', () => {
    render(<WorkTab />);

    expect(screen.getByText('FloodManager (Flood Reporting App)')).toBeInTheDocument();
    expect(screen.getByText('Baytal')).toBeInTheDocument();
    expect(screen.getByText('GitHub Malware & Security Research')).toBeInTheDocument();
    expect(screen.getByText('Swift Developer Tooling & iOS Utilities')).toBeInTheDocument();
  });

  it('renders link for projects that have one', () => {
    render(<WorkTab />);

    const floodLink = screen.getByRole('link', { name: /floodmanager/i });
    expect(floodLink).toHaveAttribute('href', 'https://github.com/ArcticXO/FloodManager');
  });
});
