import { render, screen } from '@testing-library/react';
import Dashboard from '../../../pages/app/dashboard';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

describe('<Dashboard />', () => {
  // Trading Academy course card will be enrolled and completed at 50%
  // Futures with Quantconnect course card will be enrolled and completed at 0%
  // all other course cards will be unenrolled
  test('renders all 6 course cards', async () => {
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
        <Dashboard />
      </SessionProvider>
    );

    // Header, Footer, Body, and pro upgrade bar
    const header = screen.getByRole('link', { name: /ea generator/i });
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    const signedInAs = screen.getByText(/signed in as testUser/i);
    const courseCatalog = screen.getByRole('heading', {
      name: /course catalog/i,
    });
    const footer = screen.getByRole('heading', { name: /about us/i });
    const proUpgradeBar = screen.getByRole('button', {
      name: /upgrade to pro/i,
    });
    expect(header).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(signedInAs).toBeInTheDocument();
    expect(courseCatalog).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(proUpgradeBar).toBeInTheDocument();

    // Course Cards
    const tradingAcademy = screen.getByText(/if you have no or little/i);
    const algorithmicTradingAcademy = screen.getByRole('heading', {
      name: /algorithmic trading academy/i,
    });
    const tradingview = screen.getByRole('heading', {
      name: /equities and crypto with tradingview/i,
    });
    const mt4 = screen.getByRole('heading', {
      name: /forex trading with mt4/i,
    });
    const quantconnect = screen.getByRole('heading', {
      name: /futures with quantconnect/i,
    });
    const researchWithPython = screen.getByRole('heading', {
      name: /market research with python/i,
    });

    expect(tradingAcademy).toBeInTheDocument();
    expect(algorithmicTradingAcademy).toBeInTheDocument();
    expect(tradingview).toBeInTheDocument();
    expect(mt4).toBeInTheDocument();
    expect(quantconnect).toBeInTheDocument();
    expect(researchWithPython).toBeInTheDocument();

    // Buttons display continue course and begin course
    const continueButtons = await screen.findAllByRole('button', {
      name: /continue course/i,
    });
    const beginButtons = await screen.findAllByRole('button', {
      name: /begin course/i,
    });
    expect(continueButtons).toHaveLength(2);
    expect(beginButtons).toHaveLength(4);

    // Progress bars display 50%, 25%, and 0% for remaining four
    const twentyFivePercentComplete = await screen.findByText('25%');
    const fiftyPercentComplete = await screen.findByText('50%');
    const zeroPercentComplete = await screen.findAllByText('0%');
    expect(twentyFivePercentComplete).toBeInTheDocument();
    expect(fiftyPercentComplete).toBeInTheDocument();
    expect(zeroPercentComplete).toHaveLength(4);
  });

  test('renders upgrade pro bar for non pro member', () => {
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
        <Dashboard />
      </SessionProvider>
    );

    const proUpgradeBar = screen.queryByRole('button', {
      name: /upgrade to pro/i,
    });
    expect(proUpgradeBar).not.toBeInTheDocument();
  });
});
