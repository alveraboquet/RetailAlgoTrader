import { screen, render } from '@testing-library/react';
import BlogPost from '../../../pages/posts/whatAreMarketMakersAndHowDoTheyWork';

describe('<BlogPost />', () => {
  test('renders correctly', () => {
    render(<BlogPost />);

    const title = screen.getByRole('heading', {
      name: /essential facts of market makers in today's markets/i,
    });
    const images = screen.getAllByRole('img');
    const ctas = screen.getAllByRole('button', {
      name: /get started for free today/i,
    });
    const randomText = screen.getByText('This has two objectives:');

    expect(title).toBeInTheDocument();
    expect(images).toHaveLength(12);
    expect(ctas).toHaveLength(2);
    expect(randomText).toBeInTheDocument();
  });
});
