import { screen, render } from '@testing-library/react';
import FooterLesson from '../../../components/footer/footerLesson';

describe('<FooterLesson />', () => {
  test('renders correctly', () => {
    render(<FooterLesson />);

    const prevButton = screen.getByRole('button', { name: /prev/i });
    const nextButton = screen.getByRole('button', { name: /next/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
