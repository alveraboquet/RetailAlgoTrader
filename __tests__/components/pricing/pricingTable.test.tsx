import { screen, render } from '@testing-library/react';
import PricingTable from '../../../components/pricing/pricingTable';
import React from 'react';

describe('<PricingTable />', () => {
  test('renders signup buttons and annual pricing for non-session user', () => {
    render(<PricingTable signedIn={false} monthly={false} />);

    const tableHeader = screen.getByText(/hobby/i);
    const tableRow = screen.getByText(/template generator/i);
    const checkmark = screen.getAllByRole('img', { name: /checkmark icon/i });
    const signupButtons = screen.getAllByRole('button', { name: /sign up/i });
    const price = screen.getByText('$30/mo');

    expect(tableHeader).toBeInTheDocument();
    expect(tableRow).toBeInTheDocument();
    expect(checkmark).toHaveLength(7);
    expect(signupButtons).toHaveLength(2);
    expect(price).toBeInTheDocument();
  });

  test('renders signup buttons and monthly pricing for non-session user', () => {
    render(<PricingTable signedIn={false} monthly={true} />);

    const tableHeader = screen.getByText(/hobby/i);
    const tableRow = screen.getByText(/template generator/i);
    const checkmark = screen.getAllByRole('img', { name: /checkmark icon/i });
    const signupButtons = screen.getAllByRole('button', { name: /sign up/i });
    const price = screen.getByText('$40/mo');

    expect(tableHeader).toBeInTheDocument();
    expect(tableRow).toBeInTheDocument();
    expect(checkmark).toHaveLength(7);
    expect(signupButtons).toHaveLength(2);
    expect(price).toBeInTheDocument();
  });

  test('renders no buttons and annual pricing for session user', () => {
    render(<PricingTable signedIn={true} monthly={false} />);

    const tableHeader = screen.getByText(/hobby/i);
    const tableRow = screen.getByText(/template generator/i);
    const checkmark = screen.getAllByRole('img', { name: /checkmark icon/i });
    const signupButtons = screen.queryByRole('button', { name: /sign up/i });
    const price = screen.getByText('$30/mo');

    expect(tableHeader).toBeInTheDocument();
    expect(tableRow).toBeInTheDocument();
    expect(checkmark).toHaveLength(7);
    expect(signupButtons).not.toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  test('renders no buttons and monthly pricing for session user', () => {
    render(<PricingTable signedIn={true} monthly={true} />);

    const tableHeader = screen.getByText(/hobby/i);
    const tableRow = screen.getByText(/template generator/i);
    const checkmark = screen.getAllByRole('img', { name: /checkmark icon/i });
    const signupButtons = screen.queryByRole('button', { name: /sign up/i });
    const price = screen.getByText('$40/mo');

    expect(tableHeader).toBeInTheDocument();
    expect(tableRow).toBeInTheDocument();
    expect(checkmark).toHaveLength(7);
    expect(signupButtons).not.toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });
});
