import { NextPage } from 'next';
import LayoutApp from '../../components/layout/layoutApp';
import Platform from '../../components/eaGenerator/platform';
import RiskManagementRules from '../../components/eaGenerator/riskManagementRules';
import EntryRules from '../../components/eaGenerator/entryRules';
import ExitRules from '../../components/eaGenerator/exitRules';

const eaGenerator: NextPage = () => {
  return (
    <LayoutApp>
      <h1>EA Generator</h1>
      <div className="row">
        <div className="col-6">
          <h2>Platform</h2>
          <Platform />
          <h2>Risk Management Rules</h2>
          <RiskManagementRules />
          <h2>Entry Rules</h2>
          <EntryRules />
          <h2>Exit Rules</h2>
          <ExitRules />
        </div>
        <div className="col-6">
          <h2>Platform</h2>
          <h2>Risk Management Rules</h2>
          <h2>Entry Rules</h2>
          <h2>Exit Rules</h2>
        </div>
      </div>
    </LayoutApp>
  );
};

export default eaGenerator;
