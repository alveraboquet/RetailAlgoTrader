import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';

const ForexTradingWithMT4LandingPage = () => {
  return (
    <div className="text-center">
      <Layout>
        <QuizLandingPage
          title={coursesData.forexTradingWithMT4.title}
          description={coursesData.forexTradingWithMT4.longDescription}
          imagePath={coursesData.forexTradingWithMT4.imagePath}
          curriculum={coursesData.forexTradingWithMT4.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="equitiesAndCryptoWithTradingview"
        />
      </Layout>
    </div>
  );
};

export default ForexTradingWithMT4LandingPage;
