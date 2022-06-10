// https://getbootstrap.com/docs/5.2/components/accordion/#content
// Platform rules glossary for eaTemplateTool
const Platform = () => {
  return (
    <div className="accordion accordion-flush" id="platform">
      <div className="accordion-item">
        <h2 className="accordion-header" id="platformHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#platformCollapse"
            aria-expanded="false"
            aria-controls="platformCollapse"
          >
            Pinescript
          </button>
        </h2>
        <div
          id="platformCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="platformHeading"
          data-bs-parent="#platform"
        >
          <div className="accordion-body border bg-light">
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
        <h2
          className="accordion-header"
          id="mt4Heading
        "
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mt4Collapse"
            aria-expanded="false"
            aria-controls="mt4Collapse"
          >
            MT4
          </button>
        </h2>
        <div
          id="mt4Collapse"
          className="accordion-collapse collapse"
          aria-labelledby="mt4Heading
          "
          data-bs-parent="#platform"
        >
          <div className="accordion-body border bg-light">
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
        <h2 className="accordion-header" id="quantconnectHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#quantconnectCollapse"
            aria-expanded="false"
            aria-controls="quantconnectCollapse"
          >
            QuantConnect
          </button>
        </h2>
        <div
          id="quantconnectCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="quantconnectHeading"
          data-bs-parent="#platform"
        >
          <div className="accordion-body border bg-light">
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
