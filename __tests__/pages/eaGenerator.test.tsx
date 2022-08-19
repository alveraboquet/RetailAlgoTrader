import { screen, render } from '@testing-library/react';
import EaGenerator from '../../pages/eaGenerator';
import { SessionProvider } from 'next-auth/react';

describe('<EaGenerator />', () => {
  test('renders page correctly', () => {
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

    const header = screen.getByRole('link', { name: /pricing/i });
    const loginButton = screen.getByRole('button', { name: /login/i });
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
  });
});
