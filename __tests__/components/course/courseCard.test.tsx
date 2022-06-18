import { screen, render } from '@testing-library/react';
import CourseCard from '../../../components/course/courseCard';
import { SessionProvider } from 'next-auth/react';

describe('<CourseCard />', () => {
  test('renders 0 progress and begin course button', () => {
    render(
      <SessionProvider
        session={{
          expires: '1',
          user: {
            id: 'testId',
            email: 'testEmail@email.com',
            name: 'testUser',
            stripeCustomerId: 'testStripeid',
            isPro: true,
          },
        }}
      >
        <CourseCard
          imagePath="/images/website/genericStock.webp"
          imageHeight={1306}
          imageWidth={2295}
          imageAlt="Picture of market candles"
          cardTitle="Example Course Title"
          cardText="Example Course Text"
          coursePath="/app/courses/tradingAcademy"
          enrolled={false}
          percentComplete={0}
          isProCourse={true}
        />
      </SessionProvider>
    );

    const image = screen.getByRole('img', {
      name: /picture of market candles/i,
    });
    const cardTitle = screen.getByText(/example course title/i);
    const cardText = screen.getByText(/example course text/i);
    const button = screen.getByRole('button', { name: /begin course/i });
    const percentComplete = screen.getByRole('progressbar');

    expect(image).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
    expect(cardText).toBeInTheDocument();
    expect(button).toBeEnabled();
    expect(percentComplete).toHaveStyle('width: 0%');
  });

  test('renders 50 progress and continue course button', () => {
    render(
      <SessionProvider
        session={{
          expires: '1',
          user: {
            id: 'testId',
            email: 'testEmail@email.com',
            name: 'testUser',
            stripeCustomerId: 'testStripeid',
            isPro: true,
          },
        }}
      >
        <CourseCard
          imagePath="/images/website/genericStock.webp"
          imageHeight={1306}
          imageWidth={2295}
          imageAlt="Picture of market candles"
          cardTitle="Example Course Title"
          cardText="Example Course Text"
          coursePath="/app/courses/tradingAcademy"
          enrolled={true}
          percentComplete={50}
          isProCourse={false}
        />
      </SessionProvider>
    );

    const button = screen.getByRole('button', { name: /continue course/i });
    const percentComplete = screen.getByRole('progressbar');

    expect(button).toBeEnabled();
    expect(percentComplete).toHaveStyle('width: 50%');
  });

  test('disables button for pro course for non-pro user', () => {
    render(
      <SessionProvider
        session={{
          expires: '1',
          user: {
            id: 'testId',
            email: 'testEmail@email.com',
            name: 'testUser',
            stripeCustomerId: 'testStripeid',
            isPro: false,
          },
        }}
      >
        <CourseCard
          imagePath="/images/website/genericStock.webp"
          imageHeight={1306}
          imageWidth={2295}
          imageAlt="Picture of market candles"
          cardTitle="Example Course Title"
          cardText="Example Course Text"
          coursePath="/app/courses/tradingAcademy"
          enrolled={true}
          percentComplete={50}
          isProCourse={true}
        />
      </SessionProvider>
    );

    const button = screen.getByRole('button', { name: /continue course/i });
    expect(button).toBeDisabled();
  });
});
