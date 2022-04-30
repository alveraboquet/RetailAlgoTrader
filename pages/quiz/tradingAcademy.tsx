import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import coursesData from '../../components/landingPages/coursesData';

const TradingAcademyLandingPage = () => {
  return (
    <div className="text-center">
      <Header></Header>
      <QuizLandingPage
        title={coursesData.tradingAcademy.title}
        description={coursesData.tradingAcademy.longDescription}
        imagePath={coursesData.tradingAcademy.imagePath}
        curriculum={coursesData.tradingAcademy.curriculum}
        similar1Course="algorithmicTradingAcademy"
        similar2Course="equitiesAndCryptoWithTradingview"
      />
      <Footer></Footer>
    </div>
  );
};

export default TradingAcademyLandingPage;
