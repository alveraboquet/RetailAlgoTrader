import type { NextPage } from 'next';
import SEO from '../components/SEO/seo';
import Layout from '../components/layout/layout';
import PostCard from '../components/post/postCard';

const Blog: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://retailalgotrader.com/blog"
        openGraphType="website"
        schemaType="website"
        title="Guides and articles from the RetailAlgoTrader Team"
        description="A comprehensive library of guides and articles created by the RetailAlgoTrader team. 
        Explore in-depth guides that cover topics ranging from basic trading algorithms in Pinescript to webscrapping 
        bots with Python"
        image="https://retailalgotrader.com/images/website/bulltrader.webp"
      />
      <Layout>
        <div className="row">
          <div className="col-md-4 mb-3">
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
          </div>
          <div className="col-md-4 mb-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="article3"
              cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
              postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
            />
          </div>
          <div className="col-md-4 mb-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="article4"
              cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
              postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
            />
          </div>
        </div>
        <div className="row mb-5 ">
          <div className="col-md-4 mb-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="article5"
              cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
              postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
            />
          </div>
          <div className="col-md-4 mb-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="article2"
              cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
              postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
            />
          </div>
          <div className="col-md-4 mb-3">
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
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Blog;
