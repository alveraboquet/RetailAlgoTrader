const RiskManagementRules = () => {
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
            Risk Percentage
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            All trading strategies should have a set risk percentage per trade.
            Select your desired risk percentage by percent. We offer 1%-100%;
            however, our recommendation is 2%. Be very cautious about exceeding
            5%. More advanced traders can use this to build custom functions to
            calculate the ideal risk percentage.
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
            Minimum Risk:Reward
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            For the majority of strategies you should aim for a Risk:Reward
            ratio greater than 1. Ideally it will be 2:1 or 3:1 but it depends
            on the strategy. Most strategies will want to set a minimum
            Risk:Reward. This ensures that if your entry conditions are met but
            the Risk:Reward ratio is poor the trade will not be triggered.
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
            Max Drawdown
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Every strategy should have a max drawdown. This max drawdown should
            be established through backtesting. If your backtesting produces a
            max drawdown of 15% then setting your strategy&apos;s max drawdown
            at 20% would be a good idea. This max drawdown ensures that if you
            have any made any errors in your trading algorithm, if there is a
            black swan event, or if your strategy is simply no longer profitable
            that your expert advisor will not lose all of your capital.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
          >
            Adjust stoploss to entry price
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            One of the most popular trading techniques is to sell part of your
            position at a certain take profit level, move the stoploss to your
            entry price, and then attempt to sell the remainder of your position
            at a more profitabl take profit level. By moving your stoploss to
            your entry price you ensure that if the trade turns against you that
            your profits from the first half of your position are protected. The
            remainder of your position will be exited at your entry price for no
            loss.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagementRules;
