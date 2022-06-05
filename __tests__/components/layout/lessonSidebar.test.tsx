import { screen, render } from '@testing-library/react';
import LessonSidebar from '../../../components/layout/lessonSidebar';

describe('<LessonSidebar />', () => {
  test('renders correctly', () => {
    const curriculum = [
      'Chapter 1: Preparing for Course',
      'Chapter 2: Trading Basics',
    ];

    render(<LessonSidebar curriculum={curriculum} />);

    const sidebarHeader = screen.getByText(/lessons/i);
    const chapter1 = screen.getByText(/chapter 1: preparing for course/i);
    const chapter2 = screen.getByText(/chapter 2: trading basics/i);

    expect(sidebarHeader).toBeInTheDocument();
    expect(chapter1).toBeInTheDocument();
    expect(chapter2).toBeInTheDocument();
  });
});
