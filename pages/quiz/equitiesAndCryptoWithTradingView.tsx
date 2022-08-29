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
        keywords="Crypto with TradingView, Algorithmic trading with TradingView, Pinescript and TradingView"
      />
      <Layout>
        <QuizLandingPage
          title={coursesData.equitiesAndCryptoWithTradingView.title}
          description={
            coursesData.equitiesAndCryptoWithTradingView.longDescription
          }
          imagePath={coursesData.equitiesAndCryptoWithTradingView.imagePath}
          altText="TradingView logo"
          curriculum={coursesData.equitiesAndCryptoWithTradingView.curriculum}
          similar1Course="tradingAcademy"
          similar2Course="forexTradingWithMT4"
        />
      </Layout>
    </div>
  );
};

export default EquitiesAndCryptoWithTradingviewLandingPage;
