import QuizLandingPage from '../../components/landingPages/quizLandingPage';
import Layout from '../../components/layout/layout';
import coursesData from '../../components/landingPages/coursesData';
import { NextPage } from 'next';
import SEO from '../../components/SEO/seo';

// Landing page if quiz result is Futures with QuantConnect
const FuturesWithQuantconnectLandingPage: NextPage = () => {
  return (
    <div className="text-center">
      <SEO
        url="http://retailalgotrader/quiz/futuresWithQuantconnect"
        openGraphType="website"
        schemaType="website"
        title="Futures with QuantConnect quiz result"
        description={coursesData.futuresWithQuantconnect.shortDescription}
        image={`https://retailalgotrader.com/${coursesData.futuresWithQuantconnect.imagePath}`}
      />
      <Layout>
        <QuizLandingPage
          title={coursesData.futuresWithQuantconnect.title}
          description={coursesData.futuresWithQuantconnect.longDescription}
          imagePath={coursesData.futuresWithQuantconnect.imagePath}
          altText="QuantConnect logo"
          curriculum={coursesData.futuresWithQuantconnect.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="marketResearchWithPython"
        />
      </Layout>
    </div>
  );
};

export default FuturesWithQuantconnectLandingPage;
