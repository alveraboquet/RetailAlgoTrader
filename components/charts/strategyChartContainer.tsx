import { Line } from 'react-chartjs-2';
import { options, data } from './strategyChartData';
import styles from '../../styles/StrategyChartContainer.module.css';

// Chart for homepage using react-chartjs-2
const StrategyChart = () => {
  return (
    <Line
      options={options}
      data={data}
      className={styles.chartHeight}
      data-testid="portfolioChartPhone"
    />
  );
};

export default StrategyChart;
