import coursesData from '../../components/landingPages/coursesData';
import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import { NextPage } from 'next';
import SEO from '../../components/SEO/seo';

// Landing page if quiz result is Algorithmic Trading Academy
const AlgorithmicTradingAcademyLandingPage: NextPage = () => {
  return (
    <div className="text-center">
      <SEO
        url="http://retailalgotrader/quiz/algorithmicTradingAcademy"
        openGraphType="website"
        schemaType="website"
        title="Algorithmic Trading Academy quiz result"
        description={coursesData.algorithmicTradingAcademy.shortDescription}
        image={`https://retailalgotrader.com/${coursesData.algorithmicTradingAcademy.imagePath}`}
        keywords="Algorithmic trading academy, Algorithmic trading course, algorithmic trading basics"
      />
      <Layout>
        <QuizLandingPage
          title={coursesData.algorithmicTradingAcademy.title}
          description={coursesData.algorithmicTradingAcademy.longDescription}
          imagePath={coursesData.algorithmicTradingAcademy.imagePath}
          altText="Screen with code"
          curriculum={coursesData.algorithmicTradingAcademy.curriculum}
          similar1Course="forexTradingWithMT4"
          similar2Course="futuresWithQuantConnect"
        />
      </Layout>
    </div>
  );
};

export default AlgorithmicTradingAcademyLandingPage;
