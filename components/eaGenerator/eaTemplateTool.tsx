import Platform from './platform';
import RiskManagementRules from './riskManagementRules';
import EntryRules from './entryRules';
import ExitRules from './exitRules';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import NonUserButton from './nonUserButton';
import routerConfig from '../../lib/routerConfig';

// Component for the expert advisor template generation tool
const EaTemplateTool = () => {
  const [platform, setPlatform] = useState('0');
  const [riskManagementRules, setRiskManagementRules] = useState('0');
  const [entryRules, setEntryRules] = useState('0');
  const [exitRules, setExitRules] = useState('0');
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="mt-3 text-center">EA Generator</h1>
      {/* Glossary of terms and options*/}
      <div className="row mb-3">
        <div className="col-12 col-md-6">
          <p className="d-none d-md-block">
            On the right select the components you would like in your custom
            template. If you have any questions in regards to the components you
            can find more info below.
          </p>
          <p className="d-md-none text-center">
            Find information regarding the template components below.
          </p>
          <h2>Platform</h2>
          <Platform />
          <h2>Risk Management Rules</h2>
          <RiskManagementRules />
          <h2>Entry Rules</h2>
          <EntryRules />
          <h2>Exit Rules</h2>
          <ExitRules />
        </div>
        {/**Interactive feature selection for template */}
        <div className="col-12 col-md-6">
          <p className="d-none d-md-block">
            Select the components below that you want included in your custom
            template. If you want more info on the different components you can
            click on the component to the left.
          </p>
          <p className="d-md-none text-center mt-3">
            Select the components below that you want included in your custom
            template.
          </p>
          {/**Platform options*/}
          <h2>Platform</h2>
          {/**https://getbootstrap.com/docs/5.2/forms/select/#content*/}
          <select
            className="form-select"
            aria-label="platformSelect"
            onChange={(event) => setPlatform(event.target.value)}
            defaultValue={0}
          >
            <option value="0">Select your Platform</option>
            <option value="PineScript_">Pinescript</option>
            <option value="MT4_">MT4</option>
            <option value="QuantConnect_">QuantConnect</option>
          </select>
          {/**Risk management options*/}
          <h2 className="mt-3">Risk Management Rules</h2>
          {/**https://getbootstrap.com/docs/5.2/forms/select/#content*/}
          <select
            className="form-select"
            aria-label="riskManagementSelect"
            onChange={(event) => setRiskManagementRules(event.target.value)}
            defaultValue={0}
          >
            <option value="0">Select your Risk Management Rules</option>
            <option value="RiskPercentage_">Risk Percentage</option>
            <option value="MinimumRiskReward_">Minimum Risk:Reward</option>
            <option value="MaxDrawdown_">Max Drawdown</option>
            <option value="StoplossToEntry_">
              Adjust Stoploss to Entry Price
            </option>
          </select>
          {/**Entry rule options*/}
          <h2 className="mt-3">Entry Rules</h2>
          {/**https://getbootstrap.com/docs/5.2/forms/select/#content*/}
          <select
            className="form-select"
            aria-label="entryRulesSelect"
            onChange={(event) => setEntryRules(event.target.value)}
            defaultValue={0}
          >
            <option value="0">Select your Entry Rules</option>
            <option value="MACrossover_">Moving-Average Crossover</option>
            <option value="BBBand_">
              Bollinger Band Mean Reversion with Engulfing Bar
            </option>
            <option value="Cointegration_">Cointegration</option>
          </select>
          {/**Exit rule options*/}
          <h2 className="mt-3">Exit Rules</h2>
          {/**https://getbootstrap.com/docs/5.2/forms/select/#content*/}
          <select
            className="form-select"
            aria-label="exitRulesSelect"
            onChange={(event) => setExitRules(event.target.value)}
            defaultValue={0}
          >
            <option value="0">Select your Exit Rules</option>
            <option value="ATR">ATR Stoploss and Takeprofit</option>
            <option value="TurtleTrader">Turtle Trader Indicator Exit</option>
            <option value="TrailingStop">Trailing Stop</option>
          </select>
          <h2 className="mt-3">Generate Template</h2>
          {session ? (
            <button
              className="btn btn-warning"
              disabled={(
                platform +
                riskManagementRules +
                entryRules +
                exitRules
              ).includes('0')}
            >
              <a
                className="text-decoration-none text-dark"
                href={`${routerConfig()}/files/eaTemplates/blankTemplate.txt`}
                download="EA Template"
              >
                Please click here to download your template
              </a>
            </button>
          ) : (
            <NonUserButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default EaTemplateTool;
