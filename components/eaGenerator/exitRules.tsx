const ExitRules = () => {
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
            ATR Stoploss and Takeprofit
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Average True Range (ATR) is a common way to automatically set
            stoplosses and takeprofits dynamically based on volatility. Using a
            set dollar amount or set pips amount for stoplosses and takeprofits
            can become an issue when volatility is very high or very low. Using
            ATR your stoplosses and takeprofits will adjust to volatility to
            ensure that they are set at a reasonable level and that your trades
            have plenty of room to breathe.
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
            Turtle Trader Indicator Exit
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            This exit rule demonstrates how to use indicators as an exit
            condition. You can use Donchain lines to exit a trade at a trend
            reversal. Indicator exit strategies allow very dynamic and technical
            exit conditions that adapt to the market better than just stoplosses
            and takeprofits. The notorious Turtle Traders used a Donchain like
            indicator as one exit rule.
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
            Trailing Stop
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Many strategies can benefit from a trailing stop. A trailing stop
            follows behind the high-water mark of price. A trailing stop offers
            a more dynamic method of creating a stoploss. Trailing stops can be
            used to ensure you do not exit a trade too early.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitRules;
