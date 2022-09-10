import type { NextPage } from 'next';
import SEO from '../components/SEO/seo';
import Layout from '../components/layout/layout';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Quiz from '../components/quiz/quiz';
import StrategyChart from '../components/charts/strategyChartContainer';
import PostCard from '../components/post/postCard';
import routerConfig from '../lib/routerConfig';

// Homepage
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
        keywords="RetailAlgoTrader, RetailAlgoTrader benefits, Algorithmic trading courses"
      />
      <Layout>
        {/*Banner Section */}
        <header className={`${styles.homeBanner}`}>
          <div className="pt-3 container text-center">
            <h1 className="text-white fs-1 mt-md-5 pt-md-3 fw-bold">
              Increase your Profitability through Algorithmic Trading
            </h1>
            <p className="text-white mt-3 fs-5">
              Discover how to trade intelligently and sustainably
            </p>
            <Link href="/auth/signup">
              <button className="btn btn-warning p-md-3 fs-3">
                Sign Up Today! No Credit Card Required
              </button>
            </Link>
            <div className="text-white d-none d-md-block fs-5 mt-5 pb-5">
              <h2 className="fw-bold">Our Trading Philosophy</h2>
              <p>
                Profitable trading is not limited to Hedge Funds and Market
                Makers.
              </p>
              <p>
                We focus on educating retail traders on how they can
                intelligently and profitably trade the markets.
              </p>
              <p>
                This can range from fully automated technical analysis
                strategies that fire their own trades to web scrapping bots that
                text trade alerts.
              </p>
            </div>
            <div className="d-md-none text-white mt-3 pb-3">
              <h2 className="fw-bold">Our Trading Philosophy</h2>
              <p>Profitable trading is not limited to Hedge Funds.</p>
              <p>There are opportunities everyday for retail traders.</p>
              <p>
                Create fully automated strategies that fire their own trades or
                web scrapping bots that text trade alerts.
              </p>
            </div>
          </div>
        </header>
        <article>
          {/*Quiz Section */}
          <section className="bg-light">
            <div className="container">
              <div className="row pt-md-4 pb-md-4 d-md-flex align-items-center">
                <section className="col-md-6 text-center">
                  <h2 className="m-3 fw-bold">
                    Discover the best plan and resources for your unique
                    situation.
                  </h2>
                  <p>
                    There are thousands of resources and techniques out there
                    for trading.
                  </p>
                  <p>
                    We understand that trying to figure out how to get started
                    is one of the most difficult steps in the process.{' '}
                  </p>
                  <p>
                    Answer all of the questions below to determine what
                    strategies, resources, and trading platforms are right for
                    your unique situation.
                  </p>
                </section>
                <div className="col-md-6">
                  <Quiz></Quiz>
                </div>
              </div>
            </div>
          </section>

          {/*RAT Benefits Section */}
          <section className="container">
            <div className="row">
              <h2 className="text-center mt-3 mb-md-3 mt-md-4 fw-bold">
                How RetailAlgoTrading can Benefit Your Trading
              </h2>
              <div className="col-md-4 mt-2 mt-md-0">
                <article className="card h-100 ms-3 me-3 bg-dark text-white">
                  <figure>
                    <Image
                      src="/images/website/improvedStrategies.webp"
                      className="card-img-top"
                      height={1306}
                      width={2295}
                      alt="Improve your strategies"
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
                      alt="Daytrader at computer"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title">Increased Automation</h3>
                    <p className="card-text">
                      Learn how to create algorithms and automated tools to
                      maximize your profitability while minimizing time and
                      effort required.
                    </p>
                  </div>
                </article>
              </div>
              <div className="col-md-4 mt-4 mt-md-0">
                <article className="card h-100 ms-3 me-3 bg-dark text-white">
                  <figure>
                    <Image
                      src="/images/website/upcomingResources.webp"
                      className="card-img-top"
                      height={1306}
                      width={2295}
                      alt="Brainstorming for upcoming resources"
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
          </section>

          {/*Free Guide Section */}
          <aside className="bg-light">
            <div className="container">
              <div className="row text-center mt-3 mt-md-5 p-3">
                <h2 className="fw-bold">
                  Develop algorithms to help you profitably trade as a retail
                  trader.
                </h2>
                <p className="fs-5 text-secondary">
                  Receive a free guide to developing a simple trading algorithm
                  on TradingView
                </p>
                <div>
                  <button className="btn btn-warning">
                    <a
                      className="text-decoration-none text-dark"
                      href={`${routerConfig()}/files/freeAlgoGuide.txt`}
                      download="Free Algorithmic Trading Guide"
                    >
                      Receive a Free Profitable Algorithm Guide
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/*Portfolio Chart*/}
          <section className="container text-center ps-md-3 pe-md-3 fs-5">
            <h2 className="m-3 fw-bold text-dark">
              See how various strategies performed in recent markets
            </h2>
            <p>
              These are two separate strategies across different markets that
              were run over the past two years.
            </p>
            <p>
              Notice that the stategies complement each other. When one performs
              poorly the other performs well.
            </p>
            <p>
              This results in a consistently positive portfolio performance. It
              is able to diversify and smooth out the equity curve.
            </p>
            <p>
              In our program you will learn the importance of a smooth equity
              curve, how to properly balance a portfolio of strategies, and how
              to properly manage risk so that a losing strategy has a small
              impact on your profitability.
            </p>
            <div className="bg-light">
              <StrategyChart></StrategyChart>
            </div>
          </section>

          {/*People program can benefit*/}
          <section className="bg-light mt-5 pb-5">
            <div className="container">
              <div className="row">
                <h2 className="text-center pt-3 mb-md-3 fw-bold">
                  People that our program can benefit
                </h2>
                <div className="col-md-4">
                  <article className="card bg-dark text-white mb-3 mb-md-0">
                    <div className="card-body">
                      <p className="card-title fw-bold">Novice Traders</p>
                      <p className="card-text">
                        If you have no experience with the markets that is fine.
                        Check out our recommended resources to get started.
                      </p>
                      <Link href="/quiz/tradingAcademy">
                        <button className="btn btn-warning w-100">
                          Beginner Resources
                        </button>
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-4">
                  <article className="card bg-dark text-white mb-3 mb-md-0">
                    <div className="card-body">
                      <p className="card-title fw-bold">Experienced Traders</p>
                      <p className="card-text">
                        Do you have experience trading already? Discover how you
                        can create tools to increase your profitability and
                        efficiency.
                      </p>
                      <Link href="/quiz/algorithmicTradingAcademy">
                        <button className="btn btn-warning w-100">
                          Experienced Resources
                        </button>
                      </Link>
                    </div>
                  </article>
                </div>
                <div className="col-md-4">
                  <article className="card bg-dark text-white">
                    <div className="card-body">
                      <p className="card-title fw-bold">Programmers</p>
                      <p className="card-text">
                        Already know how to program? Discover how you can put
                        your programming skills to use to generate additional
                        income.
                      </p>
                      <Link href="/quiz/futuresWithQuantConnect">
                        <button className="btn btn-warning w-100">
                          Programmer Resources
                        </button>
                      </Link>
                    </div>
                  </article>
                </div>
              </div>
              <div className="row"></div>
            </div>
          </section>

          {/* Recent Articles Section */}
          <section className="container">
            <div className="row m-0 p-0 mb-5">
              <h2 className="text-center pt-3 mt-4 fw-bold">
                Recent Articles and Guides from Our Team
              </h2>
              <div className="col-md-4">
                <PostCard
                  imagePath="/images/posts/whatAreMarketMakers/MarketMaker-Cover.webp"
                  imageHeight={1000}
                  imageWidth={1500}
                  imageAlt=""
                  cardTitle="Essential Facts of Market Makers in Today's Markets"
                  cardText="There is a lot of confusion and inaccurate beliefs around market makers
                              and their roles in the market."
                  postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
                  buttonText="Read more"
                ></PostCard>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                <PostCard
                  imagePath="/images/posts/possibleToSucceedAsRetailTrader/banner.webp"
                  imageHeight={1000}
                  imageWidth={1500}
                  imageAlt=""
                  cardTitle="Find out if it is actually possible to succeed as a retail trader"
                  cardText="It is absolutely possible to succeed. There are many individual traders with proven track records."
                  postPath="/posts/isItActuallyPossibleToSucceedAsARetailTrader"
                  buttonText="Read more"
                ></PostCard>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                <PostCard
                  imagePath="/images/posts/pinescriptGuide/pineScriptLogo.webp"
                  imageHeight={1000}
                  imageWidth={1500}
                  imageAlt=""
                  cardTitle="Pinescript Guide"
                  cardText="Pinescript is TradingView's proprietary coding language. It is a language designed to allow easy creation of expert advisors."
                  postPath="/posts/pinescriptGuide"
                  buttonText="Read more"
                ></PostCard>
              </div>
            </div>
          </section>
        </article>
      </Layout>
    </div>
  );
};

export default Home;
