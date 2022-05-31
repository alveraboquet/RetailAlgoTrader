import { screen, render } from '@testing-library/react';
import LayoutLesson from '../../../components/layout/layoutLesson';
import { SessionProvider } from 'next-auth/react';

describe('<LayoutLesson />', () => {
  test('renders correctly', () => {
    const children = <h1>Test Markdown</h1>;

    render(
      <SessionProvider
        session={{
          expires: '1',
          user: { id: '1', email: 'testEmail@email.com', name: 'testUser' },
        }}
      >
        <LayoutLesson
          course="testCourse"
          prevChapter="prevChapter"
          nextChapter="nextChapter"
          prevLesson="prevLesson"
          nextLesson="nextLesson"
        >
          {children}
        </LayoutLesson>
      </SessionProvider>
    );

    const header = screen.getByRole('link', { name: /dashboard/i });
    const footer = screen.getByRole('button', { name: /next/i });
    const markdown = screen.getByRole('heading', { name: /test markdown/i });
    const lessonsButton = screen.getByRole('button', { name: /lessons/i });
    const sidebarTitle = screen.getByRole('heading', {
      name: /sidebar content/i,
    });

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(markdown).toBeInTheDocument();
    expect(lessonsButton).toBeInTheDocument();
    expect(sidebarTitle).toBeInTheDocument();
  });
});
