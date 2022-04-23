import { screen, render } from '@testing-library/react';
import Header from '../../../components/header/header';

describe('<Header />', () => {
  test('renders correctly', () => {
    render(<Header />);

    const companyTitle = screen.getByText(/retailalgotrader/i);
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const blogLink = screen.getByRole('link', { name: /blog/i });
    const loginLink = screen.getByRole('link', { name: /login/i });

    expect(companyTitle).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
  });
});
