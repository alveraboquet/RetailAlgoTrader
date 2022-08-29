import PostCard from '../../components/post/postCard';

const BlogContent = () => {
  return (
    <article className="container">
      <div className="row">
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/posts/whatAreMarketMakers/MarketMaker-Cover.webp"
            imageHeight={1000}
            imageWidth={1500}
            imageAlt=""
            cardTitle="What are market makers and how do they work?"
            cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
            postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
            buttonText="Read More"
          />
        </aside>
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/posts/howMuchMoney/growingMoney.webp"
            imageHeight={1000}
            imageWidth={1500}
            imageAlt=""
            cardTitle="How much money can I make trading?"
            cardText="Many people imagine trading as an easy path to riches. Discover how much money you can reasonably make while trading."
            postPath="/posts/howMuchMoneyCanIMakeTrading"
            buttonText="Read More"
          />
        </aside>
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/posts/mistakeAllNewTraders/path.webp"
            imageHeight={1000}
            imageWidth={1500}
            imageAlt=""
            cardTitle="The mistake all new retail traders should avoid"
            cardText="Do not repeat one of the most common mistakes we see with novice retail traders."
            postPath="/posts/mistakeAllNewRetailTradersShouldAvoid"
            buttonText="Read More"
          />
        </aside>
      </div>
      <div className="row mb-5 ">
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/posts/possibleToSucceedAsRetailTrader/banner.webp"
            imageHeight={1000}
            imageWidth={1500}
            imageAlt=""
            cardTitle="Find out if it is actually possible to succeed as a retail algorithmic trader"
            cardText="Many people seem to believe that it is not possible to succeed long-term at trading. Find out why that is not accurate."
            postPath="/posts/isItActuallyPossibleToSucceedAsARetailTrader"
            buttonText="Read More"
          />
        </aside>
        <aside className="col-md-4 mb-3">
          <PostCard
            imagePath="/images/posts/pinescriptGuide/pineScriptLogo.webp"
            imageHeight={1000}
            imageWidth={1500}
            imageAlt=""
            cardTitle="Pinescript Guide"
            cardText="Learn how to develop your own indicators and strategies in Pinescript effortlessly. Algorithmic trading 
                      does not have to be difficult. Get started today."
            postPath="/posts/pinescriptGuide"
            buttonText="Read More"
          />
        </aside>
      </div>
    </article>
  );
};

export default BlogContent;
