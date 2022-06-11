import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';

// Landing page if quiz result is Futures with QuantConnect
const FuturesWithQuantconnectLandingPage = () => {
  return (
    <div className="text-center">
      <Layout>
        <QuizLandingPage
          title={coursesData.futuresWithQuantconnect.title}
          description={coursesData.futuresWithQuantconnect.longDescription}
          imagePath={coursesData.futuresWithQuantconnect.imagePath}
          curriculum={coursesData.futuresWithQuantconnect.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="marketResearchWithPython"
        />
      </Layout>
    </div>
  );
};

export default FuturesWithQuantconnectLandingPage;
