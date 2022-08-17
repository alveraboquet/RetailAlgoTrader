import { screen, render } from '@testing-library/react';
import SimilarCourseCard from '../../../components/landingPages/similarCourseCard';
import React from 'react';

describe('<QuizLandingPage />', () => {
  test('renders correctly', () => {
    render(
      <SimilarCourseCard title={'Test title'} description="Test description" />
    );

    const title = screen.getByRole('heading', { name: /test title/i });
    const description = screen.getByText(/test description/i);
    const button = screen.getByRole('button', { name: /start test title/i });

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
