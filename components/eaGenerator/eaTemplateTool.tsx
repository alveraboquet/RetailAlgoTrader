import Platform from './platform';
import RiskManagementRules from './riskManagementRules';
import EntryRules from './entryRules';
import ExitRules from './exitRules';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import NonUserButton from './nonUserButton';

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
        <div className="col-6">
          <p>
            On the right select the components you would like in your custom
            template. If you have any questions in regards to the components you
            can find more info below.
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
        <div className="col-6">
          <p>
            Select the components below that you want included in your custom
            template. If you want more info on the different components you can
            click on the component to the left.
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
            <option value="1">Pinescript</option>
            <option value="2">MT4</option>
            <option value="3">QuantConnect</option>
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
            <option value="1">Risk Percentage</option>
            <option value="2">Minimum Risk:Reward</option>
            <option value="3">Max Drawdown</option>
            <option value="4">Adjust Stoploss to Entry Price</option>
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
            <option value="1">Moving-Average Crossover</option>
            <option value="2">
              Bollinger Band Mean Reversion with Engulfing Bar
            </option>
            <option value="3">Cointegration</option>
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
            <option value="1">ATR Stoploss and Takeprofit</option>
            <option value="2">Turtle Trader Indicator Exit</option>
            <option value="3">Trailing Stop</option>
          </select>
          <h2 className="mt-3">Generate Template</h2>
          {session ? <p>Signed in</p> : <NonUserButton />}
          <p>Please click here to download your template</p>
          {/**Creates unique number to know which file to download */}
          <p>{platform + riskManagementRules + entryRules + exitRules}</p>
        </div>
      </div>
    </div>
  );
};

export default EaTemplateTool;
