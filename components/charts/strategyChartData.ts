import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Strategy Portfolio Performance from Past Two Years',
    },
  },
};

const labels = ['January', 'March', 'May', 'July', 'September', 'November'];

const strategy1Data = [1000, 2000, 1800, 3000, 3600, 3500];
const strategy2Data = [1000, 700, 1500, 2100, 1900, 2300];
const portfolioData = [2000, 2700, 3300, 5100, 5500, 5800];

export const data = {
  labels,
  datasets: [
    {
      label: 'Strategy 1',
      data: strategy1Data,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Strategy 2',
      data: strategy2Data,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Portfolio',
      data: portfolioData,
      borderColor: 'green',
      backgroundColor: 'green',
    },
  ],
};
