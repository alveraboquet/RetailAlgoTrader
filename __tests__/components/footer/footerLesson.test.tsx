import { screen, render } from '@testing-library/react';
import FooterLesson from '../../../components/footer/footerLesson';
import React from 'react';

describe('<FooterLesson />', () => {
  test('renders correctly', () => {
    render(
      <FooterLesson
        course="testCourse"
        prevChapter="prevChapter"
        nextChapter="nextChpater"
        prevLesson="prevLesson"
        nextLesson="nextLesson"
        currentLessonId={1}
      />
    );

    const prevButton = screen.getByRole('button', { name: /prev/i });
    const nextButton = screen.getByRole('button', { name: /next/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
