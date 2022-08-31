import { screen, render, waitFor } from '@testing-library/react';
import LessonSidebar from '../../../components/layout/lessonSidebar';
import userEvent from '@testing-library/user-event';
import 'bootstrap/dist/css/bootstrap.css';

describe('<LessonSidebar />', () => {
  test('renders chapters, lessons, and completed badge', async () => {
    require('bootstrap/dist/js/bootstrap');

    const user = userEvent.setup();
    render(<LessonSidebar />);

    await waitFor(
      async () => {
        expect(
          await screen.findByText('Chapter 1: Course Overview')
        ).toBeInTheDocument();
      },
      { timeout: 1100 }
    );

    const sidebarHeader = screen.getByText(/lessons/i);
    const chapter7 = await screen.findByRole('button', {
      name: /chapter 7: technical analysis/i,
      expanded: false,
    });
    let chapter19 = await screen.findByRole('button', {
      name: /chapter 19: advanced strategies/i,
      expanded: false,
    });
    const lesson1 = await screen.findByText(/turtle traders/i);
    const lesson2 = await screen.findByText(/scaling into and out of trades/i);
    const completedBadge = await screen.findByText(/completed/i);
    const incompleteBadge = await screen.findAllByText(/incomplete/i);

    expect(sidebarHeader).toBeInTheDocument();
    expect(chapter7).toBeInTheDocument();
    expect(chapter19).toBeInTheDocument();
    expect(lesson1).toBeInTheDocument();
    expect(lesson2).toBeInTheDocument();
    expect(completedBadge).toBeInTheDocument();
    expect(incompleteBadge).toHaveLength(91);

    await user.click(chapter19);
    chapter19 = await screen.findByRole('button', {
      name: /chapter 19: advanced strategies/i,
      expanded: true,
    });
    expect(chapter19).toBeInTheDocument();

    await user.hover(lesson1);
    expect(lesson1).toHaveStyle('background-color: lightgray, cursor: pointer');
  });
});
