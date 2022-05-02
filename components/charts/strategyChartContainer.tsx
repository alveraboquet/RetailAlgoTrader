import { Line } from 'react-chartjs-2';
import { options, data } from './strategyChartData';

const StrategyChart = () => {
  return (
    <>
      <div className="d-md-none">
        <Line
          options={options}
          data={data}
          style={{ height: '300px' }}
          data-testid="portfolioChartPhone"
        />
      </div>
      <div className="d-none d-md-block">
        <Line
          options={options}
          data={data}
          style={{ height: '400px' }}
          data-testid="portfolioChartDesktop"
        />
      </div>
    </>
  );
};

export default StrategyChart;
