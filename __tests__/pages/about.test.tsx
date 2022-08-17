import { screen, render } from '@testing-library/react';
import About from '../../pages/about';
import React from 'react';

describe('<About />', () => {
  test('renders header, footer, and articles correctly', () => {
    render(<About />);

    const homeButtons = screen.getAllByRole('link', { name: /home/i });
    const pageTitle = screen.getByText(/about retailalgotrading/i);
    const algoTradingImage = screen.getByRole('img', {
      name: /screen with algorithmic/i,
    });
    const stockLineImage = screen.getAllByRole('img', {
      name: /stock line chart/i,
    });
    const articleFooterButtons = screen.getAllByRole('button', {
      name: /read more/i,
    });

    expect(homeButtons).toHaveLength(2);
    expect(pageTitle).toBeInTheDocument();
    expect(algoTradingImage).toBeInTheDocument();
    expect(stockLineImage).toHaveLength(2); // 2 b/c image is in the DOM twice. 1 for desktops and 1 for mobiles.
    expect(articleFooterButtons).toHaveLength(3);
  });
});
