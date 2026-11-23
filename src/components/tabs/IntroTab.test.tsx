import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import IntroTab from './IntroTab';

describe('IntroTab Component', () => {
  it('renders bio paragraphs and CTA button', () => {
    render(<IntroTab />);

    expect(
      screen.getByText(/An Automation & Software Engineer specializing in test automation/i)
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /let's talk/i })).toHaveAttribute(
      'href',
      'mailto:AlAbdullah.ali@hotmail.com'
    );
    expect(screen.getByRole('link', { name: /view cv/i })).toHaveAttribute(
      'href',
      '/assets/cv.pdf'
    );
  });

  it('renders all social and contact links with correct URLs', () => {
    render(<IntroTab />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/arcticxo');

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/ali-al-abdullah-1b4352212'
    );

    const emailLink = screen.getByRole('link', { name: /^email$/i });
    expect(emailLink).toHaveAttribute('href', 'mailto:AlAbdullah.ali@hotmail.com');

    const mediumLink = screen.getByRole('link', { name: /medium/i });
    expect(mediumLink).toHaveAttribute('href', 'https://medium.com/@alabdullah.ali');
  });
});
