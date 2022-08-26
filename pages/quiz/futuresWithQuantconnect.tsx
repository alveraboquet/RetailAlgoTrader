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
        url="http://retailalgotrader/quiz/futuresWithQuantConnect"
        openGraphType="website"
        schemaType="website"
        title="Futures with QuantConnect quiz result"
        description={coursesData.futuresWithQuantConnect.shortDescription}
        image={`https://retailalgotrader.com/${coursesData.futuresWithQuantConnect.imagePath}`}
        keywords="Algorithmic trading with QuantConnect, Trading futures with QuantConnect, Python with QuantConnect"
      />
      <Layout>
        <QuizLandingPage
          title={coursesData.futuresWithQuantConnect.title}
          description={coursesData.futuresWithQuantConnect.longDescription}
          imagePath={coursesData.futuresWithQuantConnect.imagePath}
          altText="QuantConnect logo"
          curriculum={coursesData.futuresWithQuantConnect.curriculum}
          similar1Course="algorithmicTradingAcademy"
          similar2Course="marketResearchWithPython"
        />
      </Layout>
    </div>
  );
};

export default FuturesWithQuantconnectLandingPage;
