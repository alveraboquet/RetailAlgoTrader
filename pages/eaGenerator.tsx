import { NextPage } from 'next';
import Layout from '../components/layout/layout';
import EaTemplateTool from '../components/eaGenerator/eaTemplateTool';
import SEO from '../components/SEO/seo';

// Renders EA generator page for non-signed in users
const EaGenerator: NextPage = () => {
  return (
    <div>
      <SEO
        url="https://retailalgotrader.com/eaGenerator"
        openGraphType="website"
        schemaType="website"
        title="Create a custom template for your trading strategy"
        description="With just a few clicks download an algorithmic trading template for your chosen trading platform. This tool
        saves traders months of work and ensures no vital features are missed."
        image="https://retailalgotrader.com/images/website/bulltrader.webp"
        keywords="Algorithmic trading templates, Expert advisor generator, Algorithmic trading generator"
      />
      <Layout>
        <div className="container">
          <EaTemplateTool />
        </div>
      </Layout>
    </div>
  );
};

export default EaGenerator;
