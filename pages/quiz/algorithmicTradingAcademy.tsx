import coursesData from '../../components/landingPages/coursesData';
import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';

const AlgorithmicTradingAcademyLandingPage = () => {
  return (
    <div className="text-center">
      <Layout>
        <QuizLandingPage
          title={coursesData.algorithmicTradingAcademy.title}
          description={coursesData.algorithmicTradingAcademy.longDescription}
          imagePath={coursesData.algorithmicTradingAcademy.imagePath}
          curriculum={coursesData.algorithmicTradingAcademy.curriculum}
          similar1Course="forexTradingWithMT4"
          similar2Course="futuresWithQuantconnect"
        />
      </Layout>
    </div>
  );
};

export default AlgorithmicTradingAcademyLandingPage;
