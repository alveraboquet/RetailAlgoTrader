import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';
import { NextPage } from 'next';
import SEO from '../../components/SEO/seo';

// Landing page if quiz result is Trading Academy
const TradingAcademyLandingPage: NextPage = () => {
  return (
    <div className="text-center">
      <SEO
        url="http://retailalgotrader/quiz/tradingAcademy"
        openGraphType="website"
        schemaType="website"
        title="Trading Academy quiz result"
        description={coursesData.tradingAcademy.shortDescription}
        image={`https://retailalgotrader.com/${coursesData.tradingAcademy.imagePath}`}
      />
      <Layout>
        <QuizLandingPage
          title={coursesData.tradingAcademy.title}
          description={coursesData.tradingAcademy.longDescription}
          imagePath={coursesData.tradingAcademy.imagePath}
          altText="Day trader"
          curriculum={coursesData.tradingAcademy.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="equitiesAndCryptoWithTradingview"
        />
      </Layout>
    </div>
  );
};

export default TradingAcademyLandingPage;
