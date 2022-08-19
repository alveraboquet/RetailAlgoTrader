import { screen, render } from '@testing-library/react';
import StrategyChart from '../../../components/charts/strategyChartContainer';

describe('<StrategyChart />', () => {
  test('renders correctly', () => {
    render(<StrategyChart />);

    const phoneChart = screen.getByTestId('portfolioChartPhone');
    const desktopChart = screen.getByTestId('portfolioChartDesktop');

    expect(phoneChart).toHaveStyle(
      'height: 0px; display: block; box-sizing: border-box; width: 0px;'
    );
    expect(desktopChart).toHaveStyle(
      'height: 0px; display: block; box-sizing: border-box; width: 0px;'
    );
  });
});
