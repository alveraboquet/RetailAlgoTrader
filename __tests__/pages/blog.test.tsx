import { screen, render } from '@testing-library/react';
import Blog from '../../pages/blog';

describe('<Blog />', () => {
  test('renders header, footer, and articles correctly', () => {
    render(<Blog />);

    const homeButtons = screen.getAllByRole('link', { name: /home/i });
    const articleTitle1 = screen.getByText(
      /what are market makers and how do they work?/i
    );
    const articleButtons = screen.getAllByRole('button', {
      name: /read more/i,
    });

    expect(homeButtons).toHaveLength(2);
    expect(articleTitle1).toBeInTheDocument();
    expect(articleButtons).toHaveLength(6);
  });
});
