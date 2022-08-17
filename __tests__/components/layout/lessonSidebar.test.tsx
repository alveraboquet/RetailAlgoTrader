import { screen, render } from '@testing-library/react';
import LessonSidebar from '../../../components/layout/lessonSidebar';
import userEvent from '@testing-library/user-event';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

describe('<LessonSidebar />', () => {
  test('renders chapters, lessons, and completed badge', async () => {
    require('bootstrap/dist/js/bootstrap');
    const curriculum = [
      { id: '7', chapter: 'Chapter 7: Technical Analysis', lessons: [] },
      {
        id: '19',
        chapter: 'Chapter 19: Advanced Strategies',
        lessons: [
          {
            id: 1,
            title: 'Intro',
            path: '/tradingAcademy/advancedStrategies/intro',
          },
          {
            id: 2,
            title: 'Scaling Into and Out of Trades',
            path: '/tradingAcademy/advancedStrategies/scalingIntoAndOutOfTrades',
          },
        ],
      },
    ];

    const user = userEvent.setup();
    render(<LessonSidebar curriculum={curriculum} />);

    const sidebarHeader = screen.getByText(/lessons/i);
    const chapter7 = await screen.findByRole('button', {
      name: /chapter 7: technical analysis/i,
      expanded: false,
    });
    let chapter19 = await screen.findByRole('button', {
      name: /chapter 19: advanced strategies/i,
      expanded: false,
    });
    const lesson1 = await screen.findByText(/intro/i);
    const lesson2 = await screen.findByText(/scaling into and out of trades/i);
    const completedBadge = await screen.findByText(/completed/i);
    const incompleteBadge = await screen.findByText(/incomplete/i);

    expect(sidebarHeader).toBeInTheDocument();
    expect(chapter7).toBeInTheDocument();
    expect(chapter19).toBeInTheDocument();
    expect(lesson1).toBeInTheDocument();
    expect(lesson2).toBeInTheDocument();
    expect(completedBadge).toBeInTheDocument();
    expect(incompleteBadge).toBeInTheDocument();

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
