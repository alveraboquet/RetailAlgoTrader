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
        similar2Course="futuresWithQuantConnect"
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
          {
            id: '2',
            chapter: 'Chapter 2: Second chapter',
            lessons: [
              {
                id: 3,
                title: 'chapter 2 lesson',
                path: '/tradingAcademy/secondChapter/chapter2Lesson',
              },
            ],
          },
        ]}
      />
    );

    const title = screen.getByRole('heading', { name: /test title/i });
    const description = screen.getByText(/test description/i);
    const image = screen.getByRole('img');
    const chapter1 = screen.getByText(/chapter 1: course overview/i);
    const lesson1 = screen.getByText(/syllabus/i);
    const lesson2 = screen.getByText(/goals/i);
    const chapter2 = screen.getByText(/chapter 2: second chapter/i);
    const lesson3 = screen.getByText(/chapter 2 lesson/i);
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
    expect(lesson1).toBeInTheDocument();
    expect(lesson2).toBeInTheDocument();
    expect(chapter2).toBeInTheDocument();
    expect(lesson3).toBeInTheDocument();
    expect(similar1Course).toBeInTheDocument();
    expect(similar2Course).toBeInTheDocument();
  });
});
