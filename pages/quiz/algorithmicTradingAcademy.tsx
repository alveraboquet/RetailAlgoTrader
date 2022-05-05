import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';

const TradingAcademyLandingPage = () => {
  return (
    <div className="text-center">
      <Layout>
        <QuizLandingPage
          title="Algorithmic Trading Academy"
          description="Algorithmic Trading Academy Description"
          similar1Course="algorithmicTradingAcademy"
          similar2Course="equitiesAndCryptoWithTradingview"
        />
      </Layout>
    </div>
  );
};

export default TradingAcademyLandingPage;
