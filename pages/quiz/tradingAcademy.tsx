import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';

// Landing page if quiz result is Trading Academy
const TradingAcademyLandingPage = () => {
  return (
    <div className="text-center">
      <Layout>
        <QuizLandingPage
          title={coursesData.tradingAcademy.title}
          description={coursesData.tradingAcademy.longDescription}
          imagePath={coursesData.tradingAcademy.imagePath}
          curriculum={coursesData.tradingAcademy.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="equitiesAndCryptoWithTradingview"
        />
      </Layout>
    </div>
  );
};

export default TradingAcademyLandingPage;
