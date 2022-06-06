const Platform = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Pinescript
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Pinescript is TradingView&apos;s proprietary trading language. It
            can be used to create custom indicators or fully functional expert
            advisors. Pinescript is perfect for novices at algorithmic trading.
            As it is created specifically for trading, it abstracts away a lot
            of the technical, unnecessary coding. This allows traders to get
            their robots started quicker and minimizes potential mistakes.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            MT4
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            MT4 supports MQL4. Like Pinescript MQL4 is a language developed
            specifically for trading. However, where Pinescript is only
            supported by TradingView, MT4 is supported by nearly all Forex
            brokers. MQL4 is another great option for novice traders. It is
            widely popular within the Forex community and offers very detailed
            documentation. It is also great for advanced traders as it offers
            fine control of all aspects of the trading process. In addition, it
            offers built-in backtesting and optimization functionality.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            QuantConnect
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            QuantConnect combines the advanced packages and flexibility of
            Python and C# with the built-in data pipeline of MT4. QuantConnect
            has data for nearly every asset and offers a top-tier backtesting
            framework. If you are a Python or C# trader QuantConnect should be
            your go-to platform. Its&apos; data pipeline and backtesting
            framework will save months of work. In addition, it offers many
            trading specific functions that simplify the EA creation process.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
