import { screen, render } from '@testing-library/react';
import EaGenerator from '../../../pages/app/eaGenerator';
import { SessionProvider } from 'next-auth/react';

describe('<EaGenerator />', () => {
  test('renders page correctly with pro signup banner for non pro user', () => {
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
        <EaGenerator />
      </SessionProvider>
    );

    const header = screen.getByRole('link', { name: /account info/i });
    const loginButton = screen.getByRole('button', { name: /logout/i });
    const riskPercentageButton = screen.getByRole('button', {
      name: /risk percentage/i,
    });
    const platformInput = screen.getByLabelText('platformSelect');
    const footer = screen.getByRole('heading', { name: /about us/i });

    expect(header).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(riskPercentageButton).toBeInTheDocument();
    expect(platformInput).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    // There will be two banners displayed. 1 at top of page and 1 in footer
    const proSignupBanner = screen.getAllByText(
      /if you would like to upgrade to a pro membership please click/i
    );
    const proUpgradeButton = screen.getAllByRole('button', {
      name: /upgrade to pro/i,
    });

    expect(proSignupBanner).toHaveLength(2);
    expect(proUpgradeButton).toHaveLength(2);
  });

  test('does not render pro signup banner for pro user', () => {
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
        <EaGenerator />
      </SessionProvider>
    );

    const proSignupBanner = screen.queryByText(
      /if you would like to upgrade to a pro membership please click/i
    );
    const proUpgradeButton = screen.queryByRole('button', {
      name: /upgrade to pro/i,
    });

    expect(proSignupBanner).not.toBeInTheDocument();
    expect(proUpgradeButton).not.toBeInTheDocument();
  });
});
