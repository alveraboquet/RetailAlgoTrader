import { screen, render } from '@testing-library/react';
import PostCard from '../../../components/post/postCard';

describe('<PostCard />', () => {
  test('renders correctly', () => {
    render(
      <PostCard
        imagePath="/images/website/genericStock.webp"
        imageHeight={1306}
        imageWidth={2295}
        imageAlt="Picture of market candles"
        cardTitle="What are market makers and how do they work?"
        cardText="There is a lot of confusion and inaccurate beliefs around market makers and their roles in the market."
        postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
        buttonText="Read more"
      />
    );

    const image = screen.getByRole('img', {
      name: /picture of market candles/i,
    });
    const cardTitle = screen.getByText(
      /what are market makers and how do they work?/i
    );
    const cardText = screen.getByText(
      /there is a lot of confusion and inaccurate/i
    );
    const button = screen.getByRole('button', { name: /read more/i });

    expect(image).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
