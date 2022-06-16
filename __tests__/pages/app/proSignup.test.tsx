import { render, screen } from '@testing-library/react';
import ProSignup from '../../../pages/app/proSignup';
import { SessionProvider } from 'next-auth/react';
import userEvent from '@testing-library/user-event';

describe('<ProSignup />', () => {
  test('renders page and monthly/annual buttons change price', async () => {
    const user = userEvent.setup();
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
        <ProSignup />
      </SessionProvider>
    );

    const header = screen.getByRole('link', { name: /ea generator/i });
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    const title = screen.getByRole('heading', {
      name: /retailalgotrader pro membership/i,
    });
    const monthlyButton = screen.getByRole('radio', {
      name: /monthly billing/i,
    });
    const annualButton = screen.getByRole('radio', {
      name: /annual billing/i,
    });
    const pricingTable = screen.getByText(/all future content/i);
    const pricingText = screen.getByRole('heading', {
      name: /learn how to properly trade/i,
    });
    const footer = screen.getByRole('heading', { name: /about us/i });
    const proUpgradeBar = screen.getByRole('button', {
      name: /upgrade to pro/i,
    });
    expect(header).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(monthlyButton).toBeInTheDocument();
    expect(annualButton).toBeInTheDocument();
    expect(pricingTable).toBeInTheDocument();
    expect(pricingText).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(proUpgradeBar).toBeInTheDocument();

    // Displayed price defaults to $40/mo
    let displayedPrice = screen.getByText('$40/mo');
    expect(displayedPrice).toBeInTheDocument();

    // Annual button changes price to $30/mo
    await user.click(annualButton);
    displayedPrice = screen.getByText('$30/mo');
    expect(displayedPrice).toBeInTheDocument();

    // Monthly button changes price to $40/mo
    await user.click(monthlyButton);
    displayedPrice = screen.getByText('$40/mo');
    expect(displayedPrice).toBeInTheDocument();
  });

  test('renders pro signup bar for non pro users', async () => {
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
        <ProSignup />
      </SessionProvider>
    );
    const user = userEvent.setup();

    const proSignupButton = screen.getByRole('button', {
      name: /upgrade to pro/i,
    });
    expect(proSignupButton).toBeInTheDocument();
    await user.click(proSignupButton);
    expect(proSignupButton).toBeDisabled();
  });

  test('renders already pro user bar for pro users', () => {
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
        <ProSignup />
      </SessionProvider>
    );

    const proText = screen.getByText(/You are already a Pro user/i);
    expect(proText).toBeInTheDocument();
  });
});
