import { screen, render } from '@testing-library/react';
import PricingText from '../../../components/pricing/pricingText';
import React from 'react';

describe('<PricingText />', () => {
  test('renders correctly', () => {
    render(<PricingText />);

    const header1 = screen.getByRole('heading', {
      name: /learn how to properly trade/i,
    });
    const header2 = screen.getByRole('heading', {
      name: /discover how to master the following skills/i,
    });
    const header3 = screen.getByRole('heading', {
      name: /frequently asked questions/i,
    });

    expect(header1).toBeInTheDocument();
    expect(header2).toBeInTheDocument();
    expect(header3).toBeInTheDocument();
  });
});
