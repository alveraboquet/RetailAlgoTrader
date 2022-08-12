import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';
import { NextPage } from 'next';
import SEO from '../../components/SEO/seo';

// Landing page if quiz result is Equities and Crypto with TradingView
const EquitiesAndCryptoWithTradingviewLandingPage: NextPage = () => {
  return (
    <div className="text-center">
      <SEO
        url="http://retailalgotrader/quiz/equitiesAndCryptoWithTradingView"
        openGraphType="website"
        schemaType="website"
        title="Equities and Crypto with TradingView quiz result"
        description={
          coursesData.equitiesAndCryptoWithTradingView.shortDescription
        }
        image={`https://retailalgotrader.com/${coursesData.equitiesAndCryptoWithTradingView.imagePath}`}
      />
      <Layout>
        <QuizLandingPage
          title={coursesData.equitiesAndCryptoWithTradingview.title}
          description={
            coursesData.equitiesAndCryptoWithTradingview.longDescription
          }
          imagePath={coursesData.equitiesAndCryptoWithTradingview.imagePath}
          altText="TradingView logo"
          curriculum={coursesData.equitiesAndCryptoWithTradingview.curriculum}
          similar1Course="tradingAcademy"
          similar2Course="forexTradingWithMT4"
        />
      </Layout>
    </div>
  );
};

export default EquitiesAndCryptoWithTradingviewLandingPage;
