import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';
import { NextPage } from 'next';
import SEO from '../../components/SEO/seo';

// Landing page if quiz result is Forex Trading with MT4
const ForexTradingWithMT4LandingPage: NextPage = () => {
  return (
    <div className="text-center">
      <SEO
        url="http://retailalgotrader/quiz/forexTradingWithMT4"
        openGraphType="website"
        schemaType="website"
        title="Forex Trading with MT4 quiz result"
        description={coursesData.forexTradingWithMT4.shortDescription}
        image={`https://retailalgotrader.com/${coursesData.forexTradingWithMT4.imagePath}`}
        keywords="Algorithmic trading with MT4, forex algorithmic trading, MQL4 algorithmic trading"
      />
      <Layout>
        <QuizLandingPage
          title={coursesData.forexTradingWithMT4.title}
          description={coursesData.forexTradingWithMT4.longDescription}
          imagePath={coursesData.forexTradingWithMT4.imagePath}
          altText="MT4 logo"
          curriculum={coursesData.forexTradingWithMT4.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="equitiesAndCryptoWithTradingView"
        />
      </Layout>
    </div>
  );
};

export default ForexTradingWithMT4LandingPage;
