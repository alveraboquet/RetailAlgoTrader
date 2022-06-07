const EntryRules = () => {
  return (
    <div className="accordion accordion-flush" id="entryRules">
      <div className="accordion-item">
        <h2 className="accordion-header" id="entryRulesHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#entryRulesCollapse"
            aria-expanded="false"
            aria-controls="entryRulesCollapse"
          >
            Moving-Average Crossover
          </button>
        </h2>
        <div
          id="entryRulesCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="entryRulesHeading"
          data-bs-parent="#entryRules"
        >
          <div className="accordion-body border bg-light">
            This entry rule uses a slow and fast moving average crossover to
            initiate trades. While this is a basic entry rule that we do not
            recommend using by itself, it provides a very good example and
            starting point for your strategies. In this stategy you will select
            the periods for the two moving averages.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="bbHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bbCollapse"
            aria-expanded="false"
            aria-controls="bbCollapse"
          >
            Bollinger-Band Mean Reversion with Engulfing Bar
          </button>
        </h2>
        <div
          id="bbCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="bbHeading"
          data-bs-parent="#entryRules"
        >
          <div className="accordion-body border bg-light">
            This is a more complicated entry strategy using Bollinger-Bands and
            chart patterns. If price action breaks the upper or lower band of
            the Bollinger-Bands and is then followed by an engulfing bar the
            system will initiate a trade signal. It also uses a second
            Bollinger-Band at 1 STD to filter out entry signals that have a poor
            risk:reward.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="cointegrationHeading">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#cointegrationCollapse"
            aria-expanded="false"
            aria-controls="cointegrationCollapse"
          >
            Cointegration
          </button>
        </h2>
        <div
          id="cointegrationCollapse"
          className="accordion-collapse collapse"
          aria-labelledby="cointegrationHeading"
          data-bs-parent="#entryRules"
        >
          <div className="accordion-body border bg-light">
            This is a very advanced strategy. Cointegration strategies track two
            assets that move very similarly. The average standard deviation for
            the two assets is calculated. If the assets spread further apart
            than this calculated average it is a good bet that they will return
            back to the mean. In this case the strategy will send a buy signal
            for the cheaper asset and a sell signal for the more expensive
            asset. In this strategy you will select the assets being tracked and
            the standard deviation you would like trades to be triggered at.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryRules;
