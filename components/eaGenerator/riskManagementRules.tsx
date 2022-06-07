const RiskManagementRules = () => {
  return (
    <div className="accordion accordion-flush" id="riskManagement">
      <div className="accordion-item">
        <h2 className="accordion-header" id="riskPercentageHeader">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#riskPercentageCollapse"
            aria-expanded="false"
            aria-controls="riskPercentageCollapse"
          >
            Risk Percentage
          </button>
        </h2>
        <div
          id="riskPercentageCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="riskPercentageHeader"
          data-bs-parent="#riskManagement"
        >
          <div className="accordion-body border bg-light">
            All trading strategies should have a set risk percentage per trade.
            Select your desired risk percentage by percent. We offer 1%-100%;
            however, our recommendation is 2%. Be very cautious about exceeding
            5%. More advanced traders can use this to build custom functions to
            calculate the ideal risk percentage.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="rrHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#rrCollapse"
            aria-expanded="false"
            aria-controls="rrCollapse"
          >
            Minimum Risk:Reward
          </button>
        </h2>
        <div
          id="rrCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="rrHeading"
          data-bs-parent="#riskManagement"
        >
          <div className="accordion-body border bg-light">
            For the majority of strategies you should aim for a Risk:Reward
            ratio greater than 1. Ideally it will be 2:1 or 3:1 but it depends
            on the strategy. Most strategies will want to set a minimum
            Risk:Reward. This ensures that if your entry conditions are met but
            the Risk:Reward ratio is poor the trade will not be triggered.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="maxDrawdownHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#maxDrawdownCollapse"
            aria-expanded="false"
            aria-controls="maxDrawdownCollapse"
          >
            Max Drawdown
          </button>
        </h2>
        <div
          id="maxDrawdownCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="maxDrawdownHeading"
          data-bs-parent="#riskManagement"
        >
          <div className="accordion-body border bg-light">
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
        <h2 className="accordion-header" id="adjustHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#adjustCollapse"
            aria-expanded="false"
            aria-controls="adjustCollapse"
          >
            Adjust stoploss to entry price
          </button>
        </h2>
        <div
          id="adjustCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="adjustHeading"
          data-bs-parent="#riskManagement"
        >
          <div className="accordion-body border bg-light">
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
