import type { NextPage } from 'next';
import SEO from '../../components/SEO/seo';
import Layout from '../../components/layout/layout';
import Link from 'next/link';
import Image from 'next/image';
import CallToAction from '../../components/post/callToAction';

const BlogPost: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://retailalgotrader.com/posts/whatAreMarketMakersAndHowDoTheyWork"
        openGraphType="website"
        schemaType="website"
        title="What are market makers and how do they work?"
        description="There is a lot of confusion and inaccurate beliefs around market
        makers and their roles in the market. This article aims to establish the role of market makers at a
        foundational level."
        image="https://retailalgotrader.com/images/posts/whatAreMarketMakers/MarketMaker-Cover.webp"
      />
      <Layout>
        <div className="container">
          <article className="row fs-5 m-2" style={{ color: '#3c484e' }}>
            <div className="p-0 p-md-5 pt-md-3 pb-md-3 rounded">
              <h1 className="text-center mt-3 mt-md-5 fw-bold text-dark">
                Essential Facts of Market Makers in Today&apos;s Markets
              </h1>
              <figure className="text-center mt-4 mt-md-5">
                <Image
                  src="/images/posts/whatAreMarketMakers/MarketMaker-Cover.webp"
                  className="rounded"
                  height={1288}
                  width={2326}
                  alt=""
                />
              </figure>
              <p>
                There is a lot of confusion and inaccurate beliefs around market
                makers and their roles in the market.
              </p>
              <p>
                This article aims to establish the role of market makers at a
                foundational level.
              </p>
              <CallToAction></CallToAction>
              <h2 className="fw-bold text-dark">
                What are market makers and how do they work?
              </h2>
              <p>
                Market makers are the entities that have largely made trading
                available to retail traders.
              </p>
              <p>
                When you buy or sell an asset, the order is almost certainly
                being routed through a market maker. Market makers have a
                massive inventory of assets.
              </p>
              <p>
                For each asset they provide a bid price (the price to sell an
                instrument) and an ask price (the price to buy an instrument).
                These are the prices you see on your trading platforms.
              </p>
              <figure className="text-center m-md-5">
                <Image
                  src="/images/posts/whatAreMarketMakers/Bid-vs-Ask.webp"
                  className="card-img-top"
                  height={120}
                  width={576}
                  alt=""
                />
                <figcaption className="text-secondary">
                  Bid vs Ask Spread of TSLA
                </figcaption>
              </figure>
              <p>
                In the example above, Tesla’s bid price is $799.52 while the ask
                price is $800.95. The market maker is offering to buy TSLA
                shares at $799.52 and sell TSLA shares at $800.95.
              </p>
              <p>
                When you purchase a certain volume of an asset, the market maker
                takes that asset from their inventory and transfers ownership to
                you.
              </p>
              <p>
                Prices set by the market maker are non-negotiable. If you
                believe that the price of TSLA stock is way too high the market
                maker does not care. You can either buy at their quoted price or
                wait for what you believe to be a fair price.
              </p>
              <p>
                The benefit of this system (and it is a huge benefit) is that
                you know for certain that the market maker is willing to buy or
                sell at anytime. There is not the risk that you will be unable
                to find a buyer or a seller for your asset.
              </p>
              <p>
                Market makes provide immense liquidity in a market. This is why
                anytime the market is open you can submit orders and be
                confident they will be fulfilled at the correct price.
              </p>
              <p>
                Before market makers, buyers would have to be matched up with
                sellers and vice versa. This was a much more difficult process
                and one of the reasons that trading was not open to retail
                investors.
              </p>
              <p>
                Market makers make money on the bid-ask spread. Let’s take
                another look at that example from earlier. Bid price of $799.52
                and ask price of $800.95.
              </p>
              <p>
                The difference between the ask price and the bid price is the
                spread ($1.43 in this example). So they make a profit of $1.43
                for every share of TSLA they trade. This may not seem like a lot
                but when you consider the immense volume of TSLA it adds up very
                quickly.
              </p>
              <figure className="text-center m-md-5">
                <Image
                  src="/images/posts/whatAreMarketMakers/Bid-vs-Ask.webp"
                  className="card-img-top"
                  height={120}
                  width={576}
                  alt=""
                />
                <figcaption className="text-secondary">
                  Bid vs Ask Spread of TSLA
                </figcaption>
              </figure>
              <h2 className="text-dark fw-bold">
                Are market makers regulated?
              </h2>
              <p>
                Market makers are highly regulated by the{' '}
                <Link href="https://www.sec.gov/">
                  <a>Securities and Exchange commission (SEC)</a>
                </Link>{' '}
                and{' '}
                <Link href="https://www.finra.org/#/">
                  <a>Financial Industry Regulatory Authority (FINRA)</a>
                </Link>
                . They must continuously provide fair and accurate prices for
                any and all instruments they have agreed to act as market makers
                for.
              </p>
              <figure>
                <Image
                  src="/images/posts/whatAreMarketMakers/Finra.webp"
                  className="card-img-top"
                  height={1614}
                  width={2832}
                  alt="FINRA HomePage"
                />
              </figure>
              <p>
                Some exchanges use a network of market makers that compete to
                set the bid and ask prices.
              </p>
              <p>
                Other exchanges, such as the New York Stock exchange, use a
                single market maker that sets a fair bid and ask price.
              </p>
              <p>Market makers can take a couple different forms:</p>
              <ul>
                <li>
                  They may be an individual firm that partners with one or more
                  brokerages
                </li>
                <li>
                  Your broker may have its own market maker entity to facilitate
                  trading
                </li>
                <li>
                  There are even individuals that act as market makers depending
                  on the market
                </li>
              </ul>
              <p>
                Most market makers are very large institutions as the
                infrastructure cost and required volume of assets to be held is
                very large.
              </p>
              <h2 className="fw-bold text-dark">
                Risks of acting as a market maker
              </h2>
              <p>
                The primary risk in acting as a market maker is that they are
                required to hold a large quantity of assets in their inventory.
                For an illiquid asset with low trading volume, it is possible
                the price of the security significantly drops before they can
                sell the shares to a trader.
              </p>
              <p>
                Now they are buying high and selling low which will result in
                losses.
              </p>
              <p>
                This is why market makers charge a fee or a spread. They need to
                cover this risk.
              </p>
              <p>
                This risk is why you will see the spread of an asset constantly
                changing. If an asset has a low trading volume or is very
                volatile this is a risky asset for the market maker to hold.
                Therefore they will increase the spread.
              </p>
              <p>This has two objectives:</p>
              <ul>
                <li>
                  Financially offset their increased risk in holding these
                  assets
                </li>
                <li>
                  Discourage trading of the asset. Traders dislike a large
                  spread. So as the spread widens trading slows down which
                  decreases the volatility of the asset
                </li>
              </ul>
              <p>
                Market makers also use more advanced techniques of managing risk
                such as hedging with options or futures.
              </p>
              <p>
                The goal of a market maker is to be market neutral. They exist
                solely to provide liquidity and are not directional players in
                the market.
              </p>
              <CallToAction></CallToAction>
              <p>
                Market makers ensure smooth and efficient operation of the
                markets. Without them retail trading would not be possible.
              </p>
            </div>
          </article>
        </div>
      </Layout>
    </div>
  );
};

export default BlogPost;
