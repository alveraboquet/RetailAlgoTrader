import PricingFAQ from './pricingFAQ';

// Text for rendering underneath pricing table
const PricingText = () => {
  return (
    <div>
      <section className="text-center p-3">
        <h2>Learn how to properly trade</h2>
        <div className="row">
          <div className="col-0 col-md-2"></div>
          <div className="col-12 col-md-4">
            <p>Develop a trading plan</p>
          </div>
          <div className="col-12 col-md-4">
            <p>Setup backtesting framework</p>
          </div>
        </div>
        <div className="row">
          <div className="col-0 col-md-2"></div>
          <div className="col-12 col-md-4">
            <p>Optimize strategies</p>
          </div>
          <div className="col-12 col-md-4">
            <p>Create trading portfolio</p>
          </div>
        </div>
      </section>
      <section className="bg-light p-3 text-center d-none d-md-block">
        <h2>Discover how to master the following skills</h2>
        <div className="row">
          <div className="col-4">
            <p>Equities</p>
          </div>
          <div className="col-4">
            <p>Forex</p>
          </div>
          <div className="col-4">
            <p>Futures</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>TradingView</p>
          </div>
          <div className="col-4">
            <p>MT4</p>
          </div>
          <div className="col-4">
            <p>QuantConnect</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>Python</p>
          </div>
          <div className="col-4">
            <p>Jupyter Notebooks</p>
          </div>
          <div className="col-4">
            <p>Crypto</p>
          </div>
        </div>
      </section>
      <section className="bg-light p-3 text-center d-md-none">
        <h2>Discover how to master the following skills</h2>
        <div className="row">
          <div className="col-6">
            <p>Equities</p>
          </div>
          <div className="col-6">
            <p>Forex</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>Futures</p>
          </div>
          <div className="col-6">
            <p>TradingView</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>MT4</p>
          </div>
          <div className="col-6">
            <p>QuantConnect</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <p>Python</p>
          </div>
          <div className="col-6">
            <p>Crypto</p>
          </div>
        </div>
      </section>
      <PricingFAQ />
    </div>
  );
};

export default PricingText;
