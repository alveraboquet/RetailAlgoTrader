import { screen, render } from '@testing-library/react';
import CallToAction from '../../../components/post/callToAction';
import React from 'react';

describe('<CallToAction />', () => {
  test('renders correctly', () => {
    render(<CallToAction />);

    const text = screen.getByText(
      /start learning how algorithmic trading can increase your profitability and efficiency for free/i
    );
    const button = screen.getByRole('button', {
      name: /get started for free today/i,
    });

    expect(text).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
