import LayoutApp from '../../components/layout/layoutApp';
import Link from 'next/link';
import PostCard from '../../components/post/postCard';
import coursesData from '../../components/landingPages/coursesData';

const ProConfirmation = () => {
  return (
    <LayoutApp>
      <div className="text-center">
        <h1>
          Congratulations on taking the next step in your algorithmic trading
          journey!
        </h1>
        <p className="bg-success rounded w-50 mx-auto text-white m-3">
          Your account has been successfully upgraded to a Pro subscription
        </p>
        <h2 className="mt-4">You now have access to the following courses:</h2>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="col-3 m-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle={coursesData.algorithmicTradingAcademy.title}
              cardText={coursesData.algorithmicTradingAcademy.longDescription}
              postPath="/app/dashboard"
              buttonText="Get Started"
            />
          </div>
          <div className="col-3 m-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle={coursesData.equitiesAndCryptoWithTradingview.title}
              cardText={
                coursesData.equitiesAndCryptoWithTradingview.longDescription
              }
              postPath="/app/dashboard"
              buttonText="Get Started"
            />
          </div>
          <div className="col-3 m-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle={coursesData.forexTradingWithMT4.title}
              cardText={coursesData.forexTradingWithMT4.longDescription}
              postPath="/app/dashboard"
              buttonText="Get Started"
            />
          </div>
          <div className="col-3 m-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle={coursesData.futuresWithQuantconnect.title}
              cardText={coursesData.futuresWithQuantconnect.longDescription}
              postPath="/app/dashboard"
              buttonText="Get Started"
            />
          </div>
          <div className="col-3 m-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle={coursesData.marketResearchWithPython.title}
              cardText={coursesData.marketResearchWithPython.longDescription}
              postPath="/app/dashboard"
              buttonText="Get Started"
            />
          </div>
        </div>
        <h2 className="mt-5">
          You now have unlimited access to our proprietary EA Generator for the
          following platforms:
        </h2>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="col-3 m-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="Pinescript with TradingView"
              cardText=""
              postPath="/app/eaGenerator"
              buttonText="Get Started"
            />
          </div>
          <div className="col-3 m-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="MQL4 with MT4"
              cardText=""
              postPath="/app/eaGenerator"
              buttonText="Get Started"
            />
          </div>
          <div className="col-3 m-3">
            <PostCard
              imagePath="/images/website/genericStock.webp"
              imageHeight={1306}
              imageWidth={2295}
              imageAlt="Picture of market candles"
              cardTitle="Python with QuantConnect"
              cardText=""
              postPath="/app/eaGenerator"
              buttonText="Get Started"
            />
          </div>
        </div>
        <Link href="/app/dashboard">
          <a className="btn btn-warning m-5 p-3 fs-1">
            Get started on your algorithmic trading journey!
          </a>
        </Link>
      </div>
    </LayoutApp>
  );
};

export default ProConfirmation;
