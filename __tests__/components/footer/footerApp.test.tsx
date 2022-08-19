import { screen, render } from '@testing-library/react';
import FooterApp from '../../../components/footer/footerApp';
import { SessionProvider } from 'next-auth/react';

describe('<FooterApp />', () => {
  test('renders correctly with no pro signup banner', () => {
    render(
      <SessionProvider
        session={{
          expires: '1',
          user: {
            id: 'testId',
            email: 'testEmail@email.com',
            name: 'testUser',
            stripeCustomerId: 'testStripeid',
            isPro: true,
          },
        }}
      >
        <FooterApp />
      </SessionProvider>
    );

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
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i });
    const privacyPolicyLink = screen.getByRole('link', {
      name: /privacy policy/i,
    });
    const termsOfServiceLink = screen.getByRole('link', {
      name: /terms of service/i,
    });
    const logoutLink = screen.getByRole('link', { name: /logout/i });
    const proSignupBanner = screen.queryByText(
      /if you would like to upgrade to a pro membership please click/i
    );
    const proUpgradeButton = screen.queryByRole('button', {
      name: /upgrade to pro/i,
    });

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
    expect(dashboardLink).toBeInTheDocument();
    expect(privacyPolicyLink).toBeInTheDocument();
    expect(termsOfServiceLink).toBeInTheDocument();
    expect(logoutLink).toBeInTheDocument();
    expect(proSignupBanner).not.toBeInTheDocument();
    expect(proUpgradeButton).not.toBeInTheDocument();
  });

  test('renders pro signup banner', () => {
    render(
      <SessionProvider
        session={{
          expires: '1',
          user: {
            id: 'testId',
            email: 'testEmail@email.com',
            name: 'testUser',
            stripeCustomerId: 'testStripeid',
            isPro: false,
          },
        }}
      >
        <FooterApp />
      </SessionProvider>
    );

    const proSignupBanner = screen.getByText(
      /if you would like to upgrade to a pro membership please click/i
    );
    const proUpgradeButton = screen.getByRole('button', {
      name: /upgrade to pro/i,
    });

    expect(proSignupBanner).toBeInTheDocument();
    expect(proUpgradeButton).toBeInTheDocument();
  });
});
