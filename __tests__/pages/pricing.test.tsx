import { render, screen } from '@testing-library/react';
import Pricing from '../../pages/pricing';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('<Pricing />', () => {
  test('renders page and monthly/annual buttons change price', async () => {
    const user = userEvent.setup();
    render(<Pricing />);

    const header = screen.getByRole('link', { name: /pricing/i });
    const logoutButton = screen.getByRole('button', { name: /login/i });
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
    const signupButtons = screen.getAllByRole('button', { name: /sign up/i });

    expect(header).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(monthlyButton).toBeInTheDocument();
    expect(annualButton).toBeInTheDocument();
    expect(pricingTable).toBeInTheDocument();
    expect(pricingText).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(signupButtons).toHaveLength(2);

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
});
