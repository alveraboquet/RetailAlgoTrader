import { screen, render } from '@testing-library/react';
import Home from '../../pages/index';
import React from 'react';

describe('<Home />', () => {
  test('renders components correctly', () => {
    render(<Home />);

    const headerAndFooterLinks = screen.getAllByRole('link', {
      name: /home/i,
    });
    const banner = screen.getByRole('button', {
      name: /sign up today! no credit card required/i,
    });
    const pageText = screen.getByText(/develop algorithms to help you/i);
    const quiz = screen.getByRole('button', { name: '$0-$1000' });
    const cardText = screen.getByText(/increased automation/i);
    const freeGuideButton = screen.getByRole('button', {
      name: /receive a free profitable algorithm guide/i,
    });
    const portfolioChartPhone = screen.getByTestId('portfolioChartPhone');
    const portfolioChartDesktop = screen.getByTestId('portfolioChartDesktop');
    const noviceResourcesButton = screen.getByRole('button', {
      name: /beginner resources/i,
    });
    const experiencedResourcesButton = screen.getByRole('button', {
      name: /experienced resources/i,
    });
    const programmerResourcesButton = screen.getByRole('button', {
      name: /programmer resources/i,
    });
    const article1 = screen.getAllByText(
      /what are market makers and how do they work?/i
    );
    const article2 = screen.getAllByText(/article2/i);
    const article3 = screen.getAllByText(/article3/i);
    const readMoreButtons = screen.getAllByRole('button', {
      name: /read more/i,
    });

    expect(headerAndFooterLinks).toHaveLength(2);
    expect(banner).toBeInTheDocument();
    expect(pageText).toBeInTheDocument();
    expect(quiz).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();
    expect(freeGuideButton).toBeInTheDocument();
    expect(portfolioChartPhone).toBeInTheDocument();
    expect(portfolioChartDesktop).toBeInTheDocument();
    expect(noviceResourcesButton).toBeInTheDocument();
    expect(experiencedResourcesButton).toBeInTheDocument();
    expect(programmerResourcesButton).toBeInTheDocument();
    expect(article1).toHaveLength(2);
    expect(article2).toHaveLength(2);
    expect(article3).toHaveLength(2);
    expect(readMoreButtons).toHaveLength(6);
  });
});
