import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';
import { NextPage } from 'next';

// Landing page if quiz result is Equities and Crypto with TradingView
const EquitiesAndCryptoWithTradingviewLandingPage: NextPage = () => {
  return (
    <div className="text-center">
      <Layout>
        <QuizLandingPage
          title={coursesData.equitiesAndCryptoWithTradingview.title}
          description={
            coursesData.equitiesAndCryptoWithTradingview.longDescription
          }
          imagePath={coursesData.equitiesAndCryptoWithTradingview.imagePath}
          curriculum={coursesData.equitiesAndCryptoWithTradingview.curriculum}
          similar1Course="tradingAcademy"
          similar2Course="forexTradingWithMT4"
        />
      </Layout>
    </div>
  );
};

export default EquitiesAndCryptoWithTradingviewLandingPage;
