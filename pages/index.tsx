import type { NextPage } from 'next';
import SEO from '../components/SEO/seo';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Quiz from '../components/quiz/quiz';
import StrategyChart from '../components/charts/strategyChartContainer';
import PostCard from '../components/post/postCard';

const Home: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://retailalgotrader.com/"
        openGraphType="website"
        schemaType="website"
        title="Algorithmic Trading for Retail Traders"
        description="Discover how to intelligently and profitably trade as a retail algorithmic trader."
        image="https://retailalgotrader.com/images/website/bullTraderSocial.webp"
      />
      <Layout>
        <div className="container-fluid fs-5">
          <div
            className={`${styles.homeBanner} jumbotron jumbotron-fluid row vh-100 text-center`}
          >
            <div className="mt-md-5 pt-md-5 pt-3">
              <h1 className="text-white fs-1 mt-md-5 pt-md-3">
                Increase your Profitability through Algorithmic Trading
              </h1>
              <p className="text-white mt-3 fs-5">
                Discover how to trade intelligently and sustainably
              </p>
              <button className="btn btn-warning p-md-3">
                <Link href="/signup">
                  <a className="text-decoration-none text-dark fs-3">
                    Sign Up Today! No Credit Card Required
                  </a>
                </Link>
              </button>
              <div className="text-white d-none d-md-block fs-5 mt-5">
                <h2>Our Trading Philosophy</h2>
                <p>
                  Profitable trading is not limited to Hedge Funds and Market
                  Makers. There are an infinite number of opportunities everyday
                  to extract money from the markets.
                </p>
                <p>
                  We focus on educating retail traders on how they can
                  intelligently and profitably trade the markets. Our specialty
                  is creating systems and algorithms to assist one&apos;s
                  trading strategies. This can range from fully automated
                  technical analysis strategies that fire their own trades to
                  web scrapping bots that text trade alerts.
                </p>
              </div>
              <div className="d-md-none text-white mt-3">
                <h2>Our Trading Philosophy</h2>
                <p>Profitable trading is not limited to Hedge Funds.</p>
                <p>There are opportunities everyday for retail traders.</p>
                <p>
                  Our team focuses on educating retail traders on how they can
                  intelligently and profitably trade the markets.
                </p>
                <p>
                  Our specialty is creating systems and algorithms to assist
                  one&apos;s trading strategies.
                </p>
                <p>
                  This can range from fully automated technical analysis
                  strategies that fire their own trades to web scrapping bots
                  that text trade alerts.
                </p>
              </div>
            </div>
          </div>
          <div className="row bg-light pt-md-4 pb-md-4 d-md-flex align-items-center">
            <section className="col-md-6 text-center">
              <h2 className="m-3 fw-bold">
                Discover the best plan and resources for your unique situation.
              </h2>
              <p>
                There are thousands of resources and techniques out there for
                trading.
              </p>
              <p>
                We understand that trying to figure out how to get started is
                one of the most difficult steps in the process.{' '}
              </p>
              <p>
                Answer all of the questions below to determine what strategies,
                resources, and trading platforms are right for your unique
                situation.
              </p>
            </section>
            <div className="col-md-6">
              <Quiz></Quiz>
            </div>
          </div>
          <div className="row">
            <h2 className="text-center mt-3 mb-md-3 mt-md-4 fw-bold">
              How RetailAlgoTrading can Benefit Your Trading
            </h2>
            <div className="col-md-4 mt-2 mt-md-0">
              <article className="card h-100 ms-3 me-3 bg-dark text-white">
                <figure>
                  <Image
                    src="/images/website/natureInvesting.webp"
                    className="card-img-top"
                    height={1306}
                    width={2295}
                    alt="Investing nature themed"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Improved Strategies</h3>
                  <p className="card-text">
                    Discover how a retail trader can not only survive the
                    markets but maintain consistent profitability.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <article className="card h-100 ms-3 me-3 bg-dark text-white">
                <figure>
                  <Image
                    src="/images/website/daytrading.webp"
                    className="card-img-top"
                    height={1306}
                    width={2295}
                    alt="Bull Trader"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Increased Automation</h3>
                  <p className="card-text">
                    Learn how to create algorithms and automated tools to
                    maximize your profitability while minimizing time and effort
                    required.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <article className="card h-100 ms-3 me-3 bg-dark text-white">
                <figure>
                  <Image
                    src="/images/website/businessPlanning.webp"
                    className="card-img-top"
                    height={1306}
                    width={2295}
                    alt="Bull Trader"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">Upcoming Resources</h3>
                  <p className="card-text">
                    A no-code algorithm application, courses on topics and
                    platforms such as Forex, MT4, QuantConnect, and more.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="row bg-light text-center mt-3 mt-md-5 p-3">
            <h2 className="fw-bold">
              Develop algorithms to help you profitably trade as a retail
              trader.
            </h2>
            <p className="fs-5 text-secondary">
              Receive a free guide to developing a simple trading algorithm on
              TradingView
            </p>
            <div>
              <button className="btn btn-warning">
                <Link href="/demo">
                  <a className="text-decoration-none text-dark">
                    Receive a Free Profitable Algorithm Guide
                  </a>
                </Link>
              </button>
            </div>
          </div>
          <div className="text-center ps-md-3 pe-md-3 fs-5">
            <h2 className="m-3 fw-bold">
              See how various strategies performed in recent markets
            </h2>
            <p>
              These are three separate strategies across different markets that
              were run over the past two years.
            </p>
            <p>
              Notice that two of the strategies performed very well, while one
              strategy actually lost money.
            </p>
            <p>
              However, the overall portfolio performance is very good. It is
              able to diversify and smooth out the equity curve.
            </p>
            <p>
              In our program you will learn the importance of a smooth equity
              curve, how to properly balance a portfolio of strategies, and how
              to properly manage risk so that a losing strategy has a small
              impact on your profitability.
            </p>
          </div>
          <div className="bg-light p-3 m-md-4">
            <div>
              <StrategyChart></StrategyChart>
            </div>
          </div>
          <div className="row">
            <h2 className="text-center pt-3 mb-md-3 fw-bold">
              People that our program can benefit
            </h2>
            <div className="col-md-4">
              <article className="card bg-dark text-white mb-3 mb-md-0">
                <div className="card-body">
                  <h5 className="card-title">Novice Traders</h5>
                  <p className="card-text">
                    If you have no experience with the markets that is fine.
                    Check out our recommended resources to get started.
                  </p>
                  <button className="btn btn-warning w-100">
                    <Link href="/demo">
                      <a className="text-decoration-none text-dark">
                        Beginner Resources
                      </a>
                    </Link>
                  </button>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="card bg-dark text-white mb-3 mb-md-0">
                <div className="card-body">
                  <h5 className="card-title">Experienced Traders</h5>
                  <p className="card-text">
                    Do you have experience trading already? Discover how you can
                    create tools to increase your profitability and efficiency.
                  </p>
                  <button className="btn btn-warning w-100">
                    <Link href="/demo">
                      <a className="text-decoration-none text-dark">
                        Experienced Resources
                      </a>
                    </Link>
                  </button>
                </div>
              </article>
            </div>
            <div className="col-md-4">
              <article className="card bg-dark text-white">
                <div className="card-body">
                  <h5 className="card-title">Programmers</h5>
                  <p className="card-text">
                    Already know how to program? Discover how you can put your
                    programming skills to use to generate additional income.
                  </p>
                  <button className="btn btn-warning w-100">
                    <Link href="/demo">
                      <a className="text-decoration-none text-dark">
                        Programmer Resources
                      </a>
                    </Link>
                  </button>
                </div>
              </article>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <div className="row m-0 p-0 mb-5">
          <h2 className="text-center pt-3 mt-4 fw-bold">
            Recent Articles and Guides from Our Team
          </h2>
          <div className="col-md-4">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="What are market makers and how do they work?"
              cardText="There is a lot of confusion and inaccurate beliefs around market makers
  and their roles in the market."
              postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
            ></PostCard>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="Article2"
              cardText="There is a lot of confusion and inaccurate beliefs around market makers
  and their roles in the market."
              postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
            ></PostCard>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="Article3"
              cardText="There is a lot of confusion and inaccurate beliefs around market makers
  and their roles in the market."
              postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
            ></PostCard>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
