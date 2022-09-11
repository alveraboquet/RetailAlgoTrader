import type { NextPage } from 'next';
import SEO from '../components/SEO/seo';
import Layout from '../components/layout/layout';
import BlogContent from '../components/blog/blogContent';

// Renders blog page with collection of articles and guides
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
        keywords="RetailAlgoTrader guides, Algorithmic trading guides, Algorithmic trading articles"
      />
      <Layout>
        <h1 className="text-center mt-3">
          RetailAlgoTrader&apos;s Articles and Guides
        </h1>
        <BlogContent />
      </Layout>
    </div>
  );
};

export default Blog;
