import { screen, render } from '@testing-library/react';
import HeaderApp from '../../../components/header/headerApp';

describe('<HeaderApp />', () => {
  test('renders correctly', () => {
    render(<HeaderApp />);

    const companyTitle = screen.getByRole('link', {
      name: /retailalgotrader/i,
    });
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    const eaGeneratorLink = screen.getByRole('link', { name: /ea generator/i });
    const blogLink = screen.getByRole('link', { name: /articles & guides/i });
    const logoutLink = screen.getByRole('button', { name: /logout/i });
    const accountInfoLink = screen.getByRole('link', { name: /account info/i });

    expect(companyTitle).toBeInTheDocument();
    expect(dashboardLink).toBeInTheDocument();
    expect(eaGeneratorLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
    expect(accountInfoLink).toBeInTheDocument();
  });
});
