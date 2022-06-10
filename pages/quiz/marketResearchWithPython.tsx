import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';

// Landing page if quiz result is Market Research with Python
const marketResearchWithPythonLandingPage = () => {
  return (
    <div className="text-center">
      <Layout>
        <QuizLandingPage
          title={coursesData.marketResearchWithPython.title}
          description={coursesData.marketResearchWithPython.longDescription}
          imagePath={coursesData.marketResearchWithPython.imagePath}
          curriculum={coursesData.marketResearchWithPython.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="futuresWithQuantconnect"
        />
      </Layout>
    </div>
  );
};

export default marketResearchWithPythonLandingPage;
