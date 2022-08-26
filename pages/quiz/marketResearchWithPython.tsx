import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';
import { NextPage } from 'next';
import SEO from '../../components/SEO/seo';

// Landing page if quiz result is Market Research with Python
const marketResearchWithPythonLandingPage: NextPage = () => {
  return (
    <div className="text-center">
      <SEO
        url="http://retailalgotrader/quiz/marketResearchWithPython"
        openGraphType="website"
        schemaType="website"
        title="Market Research with Python quiz result"
        description={coursesData.marketResearchWithPython.shortDescription}
        image={`https://retailalgotrader.com/${coursesData.marketResearchWithPython.imagePath}`}
        keywords="Algorithmic trading Python, market research with Python, trading with Jupyter Notebooks"
      />
      <Layout>
        <QuizLandingPage
          title={coursesData.marketResearchWithPython.title}
          description={coursesData.marketResearchWithPython.longDescription}
          imagePath={coursesData.marketResearchWithPython.imagePath}
          altText="Jupyter Notebook logo"
          curriculum={coursesData.marketResearchWithPython.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="futuresWithQuantConnect"
        />
      </Layout>
    </div>
  );
};

export default marketResearchWithPythonLandingPage;
