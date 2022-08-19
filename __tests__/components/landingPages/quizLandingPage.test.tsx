import { screen, render } from '@testing-library/react';
import QuizLandingPage from '../../../components/landingPages/quizLandingPage';

describe('<QuizLandingPage />', () => {
  test('renders correctly', () => {
    render(
      <QuizLandingPage
        title={'Test title'}
        description="Test description"
        imagePath="/images/website/bullTrader.webp"
        altText="alt text"
        similar1Course="forexTradingWithMT4"
        similar2Course="futuresWithQuantconnect"
        curriculum={[
          {
            id: '1',
            chapter: 'Chapter 1: Course Overview',
            lessons: [
              {
                id: 1,
                title: 'Syllabus',
                path: '/tradingAcademy/courseOverview/syllabus',
              },
              {
                id: 2,
                title: 'Goals',
                path: '/tradingAcademy/courseOverview/goals',
              },
            ],
          },
        ]}
      />
    );

    const title = screen.getByRole('heading', { name: /test title/i });
    const description = screen.getByText(/test description/i);
    const image = screen.getByRole('img');
    const chapter1 = screen.getByText(/chapter1/i);
    const chapter2 = screen.getByText(/chapter2/i);
    const similar1Course = screen.getByRole('heading', {
      name: /forex trading with mt4/i,
    });
    const similar2Course = screen.getByRole('heading', {
      name: /futures with quantconnect/i,
    });

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(chapter1).toBeInTheDocument();
    expect(chapter2).toBeInTheDocument();
    expect(similar1Course).toBeInTheDocument();
    expect(similar2Course).toBeInTheDocument();
  });
});
