import LayoutApp from '../../components/layout/layoutApp';
import PostCard from '../../components/post/postCard';
import coursesData from '../../components/landingPages/coursesData';

const ProConfirmation = () => {
  return (
    <LayoutApp>
      <div className="text-center">
        <h1 className="mt-3">
          Congratulations on taking the next step in your algorithmic trading
          journey!
        </h1>
        <p className="bg-success rounded col-md-6 mx-auto text-white m-3">
          Your account has been successfully upgraded to a Pro subscription
        </p>
        <h2 className="mt-4">You now have access to the following courses:</h2>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <PostCard
              imagePath="/images/website/algorithmicTrading.webp"
              imageHeight={1000}
              imageWidth={1500}
              imageAlt="Daytrader"
              cardTitle={coursesData.algorithmicTradingAcademy.title}
              cardText={coursesData.algorithmicTradingAcademy.longDescription}
              postPath="/app/dashboard"
              buttonText="Get started with Algorithmic Trading"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <PostCard
              imagePath="/images/website/tradingView.webp"
              imageHeight={1000}
              imageWidth={1500}
              imageAlt="TradingView logo"
              cardTitle={coursesData.equitiesAndCryptoWithTradingview.title}
              cardText={
                coursesData.equitiesAndCryptoWithTradingview.longDescription
              }
              postPath="/app/dashboard"
              buttonText="Get started with TradingView"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <PostCard
              imagePath="/images/website/mt4.webp"
              imageHeight={1000}
              imageWidth={1500}
              imageAlt="MT4 logo"
              cardTitle={coursesData.forexTradingWithMT4.title}
              cardText={coursesData.forexTradingWithMT4.longDescription}
              postPath="/app/dashboard"
              buttonText="Get started with MT4"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <PostCard
              imagePath="/images/website/quantConnect.webp"
              imageHeight={1000}
              imageWidth={1500}
              imageAlt="QuantConnect logo"
              cardTitle={coursesData.futuresWithQuantconnect.title}
              cardText={coursesData.futuresWithQuantconnect.longDescription}
              postPath="/app/dashboard"
              buttonText="Get started with QuantConnect"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <PostCard
              imagePath="/images/website/jupyterNotebook.webp"
              imageHeight={1000}
              imageWidth={1500}
              imageAlt="Jupyter Notebook logo"
              cardTitle={coursesData.marketResearchWithPython.title}
              cardText={coursesData.marketResearchWithPython.longDescription}
              postPath="/app/dashboard"
              buttonText="Get started with Jupyter Notebook"
            />
          </div>
        </div>
        <h2 className="mt-3 mt-md-5">
          You now have unlimited access to our proprietary EA Generator for the
          following platforms:
        </h2>
        <div className="row mb-5">
          <div className="col-md-4 mb-3">
            <PostCard
              imagePath="/images/website/tradingView.webp"
              imageHeight={1000}
              imageWidth={1500}
              imageAlt="TradingView logo"
              cardTitle="Pinescript with TradingView"
              cardText=""
              postPath="/app/eaGenerator"
              buttonText="Create Pinescript EA"
            />
          </div>
          <div className="col-md-4 mb-3">
            <PostCard
              imagePath="/images/website/mt4.webp"
              imageHeight={1000}
              imageWidth={1500}
              imageAlt="MT4 logo"
              cardTitle="MQL4 with MT4"
              cardText=""
              postPath="/app/eaGenerator"
              buttonText="Create MQL4 EA"
            />
          </div>
          <div className="col-md-4 mb-3">
            <PostCard
              imagePath="/images/website/quantConnect.webp"
              imageHeight={1000}
              imageWidth={1500}
              imageAlt="Picture of market candles"
              cardTitle="Python with QuantConnect"
              cardText=""
              postPath="/app/eaGenerator"
              buttonText="Create Python EA"
            />
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default ProConfirmation;
