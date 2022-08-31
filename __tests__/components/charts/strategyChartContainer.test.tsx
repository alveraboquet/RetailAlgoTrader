import { screen, render } from '@testing-library/react';
import StrategyChart from '../../../components/charts/strategyChartContainer';

describe('<StrategyChart />', () => {
  test('renders correctly', () => {
    render(<StrategyChart />);

    const chart = screen.getByTestId('portfolioChart');

    expect(chart).toHaveStyle(
      'height: 0px; display: block; box-sizing: border-box; width: 0px;'
    );
  });
});
