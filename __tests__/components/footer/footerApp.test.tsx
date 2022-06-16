import { screen, render } from '@testing-library/react';
import FooterApp from '../../../components/footer/footerApp';

describe('<FooterApp />', () => {
  test('renders correctly', () => {
    render(<FooterApp />);

    const slogan = screen.getByText(
      /retailalgotrader - become a profitable retail trader/i
    );
    const aboutUs = screen.getByText(/about us/i);
    const aboutUsText = screen.getByText(
      /retailalgotrading is a resource and community dedicated to retail/i
    );
    const contactUs = screen.getAllByText(/contact us/i);
    const emailIcon = screen.getByRole('img', { name: /email icon/i });
    const emailLink = screen.getAllByText('contact@retailalgotrader.com');
    const homeIcon = screen.getByRole('img', { name: /home icon/i });
    const homeIconLink = screen.getByRole('link', {
      name: 'https://retailalgotrader.com',
    });
    const facebookLink = screen.getByRole('img', { name: /facebook logo/i });
    const twitterLink = screen.getByRole('img', { name: /twitter logo/i });
    const instagramLink = screen.getByRole('img', { name: /instagram logo/i });
    const quoraLink = screen.getByRole('img', { name: /quora logo/i });
    const postsHeader = screen.getByRole('heading', {
      name: /top blog posts/i,
    });
    const article1 = screen.getByText(
      'What are market makers and how do they work?'
    );
    const articleButtons = screen.getAllByRole('button', {
      name: /read more/i,
    });
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    const privacyPolicyLink = screen.getByRole('link', {
      name: /privacy policy/i,
    });
    const termsOfServiceLink = screen.getByRole('link', {
      name: /terms of service/i,
    });
    const logoutLink = screen.getByRole('link', { name: /logout/i });

    expect(slogan).toBeInTheDocument();
    expect(aboutUs).toBeInTheDocument();
    expect(aboutUsText).toBeInTheDocument();
    expect(contactUs).toHaveLength(2);
    expect(emailIcon).toBeInTheDocument();
    expect(emailLink).toHaveLength(2);
    expect(homeIcon).toBeInTheDocument();
    expect(homeIconLink).toBeInTheDocument();
    expect(facebookLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    expect(quoraLink).toBeInTheDocument();
    expect(postsHeader).toBeInTheDocument();
    expect(article1).toBeInTheDocument();
    expect(articleButtons).toHaveLength(3);
    expect(dashboardLink).toBeInTheDocument();
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(termsOfServiceLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
  });
});
