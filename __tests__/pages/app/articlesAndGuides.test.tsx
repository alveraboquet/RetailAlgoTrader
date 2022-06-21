import { screen, render } from '@testing-library/react';
import ArticlesAndGuides from '../../../pages/app/articlesAndGuides';
import { SessionProvider } from 'next-auth/react';

describe('<ArticlesAndGuides />', () => {
  test('renders header, footer, articles and pro signup banner for non pro user', () => {
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
        <ArticlesAndGuides />
      </SessionProvider>
    );

    const accountInfoButton = screen.getByRole('link', {
      name: /account info/i,
    });
    const privacyPolicyButton = screen.getByRole('link', {
      name: /privacy policy/i,
    });
    const articleTitle1 = screen.getByText(
      /what are market makers and how do they work?/i
    );
    const articleButtons = screen.getAllByRole('button', {
      name: /read more/i,
    });

    expect(accountInfoButton).toBeInTheDocument();
    expect(privacyPolicyButton).toBeInTheDocument();
    expect(articleTitle1).toBeInTheDocument();
    expect(articleButtons).toHaveLength(6);

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
        <ArticlesAndGuides />
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
