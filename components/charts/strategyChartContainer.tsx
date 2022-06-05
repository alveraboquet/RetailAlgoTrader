import { Line } from 'react-chartjs-2';
import { options, data } from './strategyChartData';
import styles from '../../styles/StrategyChartContainer.module.css';

const StrategyChart = () => {
  return (
    <>
      <div className="d-md-none">
        <Line
          options={options}
          data={data}
          className={styles.chartSmallHeight}
          data-testid="portfolioChartPhone"
        />
      </div>
      <div className="d-none d-md-block">
        <Line
          options={options}
          data={data}
          className={styles.chartLargeHeight}
          data-testid="portfolioChartDesktop"
        />
      </div>
    </>
  );
};

export default StrategyChart;
