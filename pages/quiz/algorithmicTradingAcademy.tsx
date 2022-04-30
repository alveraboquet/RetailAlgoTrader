import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const TradingAcademyLandingPage = () => {
  return (
    <div className="text-center">
      <Header></Header>
      <QuizLandingPage
        title="Algorithmic Trading Academy"
        description="Algorithmic Trading Academy Description"
        similar1Course="algorithmicTradingAcademy"
        similar2Course="equitiesAndCryptoWithTradingview"
      />
      <Footer></Footer>
    </div>
  );
};

export default TradingAcademyLandingPage;
