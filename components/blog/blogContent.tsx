import PostCard from '../../components/post/postCard';

const BlogContent = () => {
  return (
    <article className="container">
      <div className="row">
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/website/genericStock.webp"
            imageHeight={1306}
            imageWidth={2295}
            imageAlt="Picture of market candles"
            cardTitle="What are market makers and how do they work?"
            cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
            postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
          />
        </aside>
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/website/genericStock.webp"
            imageHeight={1306}
            imageWidth={2295}
            imageAlt="Picture of market candles"
            cardTitle="How much money can I make trading?"
            cardText="Many people imagine trading as an easy path to riches. Discover how much money you can reasonably make while trading."
            postPath="/posts/howMuchMoneyCanIMakeTrading"
          />
        </aside>
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/website/genericStock.webp"
            imageHeight={1306}
            imageWidth={2295}
            imageAlt="Picture of market candles"
            cardTitle="The mistake all new retail traders should avoid"
            cardText="Do not repeat one of the most common mistakes we see with novice retail traders."
            postPath="/posts/mistakeAllNewRetailTradersShouldAvoid"
          />
        </aside>
      </div>
      <div className="row mb-5 ">
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/website/genericStock.webp"
            imageHeight={1306}
            imageWidth={2295}
            imageAlt="Picture of market candles"
            cardTitle="Find out if it is actually possible to succeed as a retail algorithmic trader"
            cardText="Many people seem to believe that it is not possible to succeed long-term at trading. Find out why that is not accurate."
            postPath="/posts/isItActuallyPossibleToSucceedAsARetailTrader"
          />
        </aside>
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/website/genericStock.webp"
            imageHeight={1306}
            imageWidth={2295}
            imageAlt="Picture of market candles"
            cardTitle="Pinescript Guide"
            cardText="Learn how to develop your own indicators and strategies in Pinescript effortlessly. Algorithmic trading 
                      does not have to be difficult. Get started today."
            postPath="/posts/pinescriptGuide"
          />
        </aside>
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/website/genericStock.webp"
            imageHeight={1306}
            imageWidth={2295}
            imageAlt="Picture of market candles"
            cardTitle="article6"
            cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
            postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
          />
        </aside>
      </div>
    </article>
  );
};

export default BlogContent;
