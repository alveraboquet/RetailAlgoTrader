import { screen, render } from '@testing-library/react';
import Header from '../../../components/header/header';
import React from 'react';

describe('<Header />', () => {
  test('renders correctly', () => {
    render(<Header />);

    const companyTitle = screen.getByRole('link', {
      name: /retailalgotrader/i,
    });
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const blogLink = screen.getByRole('link', { name: /blog/i });
    const loginLink = screen.getByRole('button', { name: /login/i });
    const eaGeneratorLink = screen.getByRole('link', { name: /ea generator/i });

    expect(companyTitle).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(eaGeneratorLink).toBeInTheDocument();
  });
});
