import { screen, render } from '@testing-library/react';
import Quiz from '../../../components/quiz/quiz';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import mockRouter from 'next-router-mock';

jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('<Quiz />', () => {
  test('renders appropriate questions', async () => {
    const user = userEvent.setup();
    render(<Quiz />);

    // Question 1
    let questionNumber = screen.getByText(/question 1/i);
    let questionLength = screen.getByText('/5');
    let question = screen.getByText(
      /how much trading capital do you have available?/i
    );
    let answer1 = screen.getByRole('button', { name: '$0-$1000' });
    let answer2 = screen.getByRole('button', { name: '$1000-$20000' });
    let answer3 = screen.getByRole('button', { name: '$20000+' });
    expect(questionNumber).toBeInTheDocument();
    expect(questionLength).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(answer1).toBeInTheDocument();
    expect(answer2).toBeInTheDocument();
    expect(answer3).toBeInTheDocument();
    await user.click(answer1);

    // Question 2
    questionNumber = screen.getByText('Question 2');
    questionLength = screen.getByText('/5');
    question = screen.getByText(/do you have experience with trading?/i);
    answer1 = screen.getByRole('button', { name: /none at all/i });
    answer2 = screen.getByRole('button', {
      name: /somewhat experienced with trading/i,
    });
    answer3 = screen.getByRole('button', {
      name: /strong understanding of trading techniques/i,
    });
    let answer4 = screen.getByRole('button', { name: /trading full-time/i });
    expect(questionNumber).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(answer1).toBeInTheDocument();
    expect(answer2).toBeInTheDocument();
    expect(answer3).toBeInTheDocument();
    expect(answer4).toBeInTheDocument();
    await user.click(answer2);

    // Question 3
    questionNumber = screen.getByText('Question 3');
    questionLength = screen.getByText('/5');
    question = screen.getByText(/do you have experience with programming?/i);
    answer1 = screen.getByRole('button', { name: /none at all/i });
    answer2 = screen.getByRole('button', {
      name: /basic understanding of programming/i,
    });
    answer3 = screen.getByRole('button', {
      name: /program frequently in my free time/i,
    });
    answer4 = screen.getByRole('button', { name: /full-time programming/i });
    expect(questionNumber).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(answer1).toBeInTheDocument();
    expect(answer2).toBeInTheDocument();
    expect(answer3).toBeInTheDocument();
    expect(answer4).toBeInTheDocument();
    await user.click(answer3);

    // Question 4
    questionNumber = screen.getByText('Question 4');
    questionLength = screen.getByText('/5');
    question = screen.getByText(/do you currently work a day job?/i);
    answer1 = screen.getByRole('button', {
      name: /do not work during the day/i,
    });
    answer2 = screen.getByRole('button', {
      name: /work during the day but have the time/i,
    });
    answer3 = screen.getByRole('button', {
      name: /work during the day and do not have the time/i,
    });
    expect(questionNumber).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(answer1).toBeInTheDocument();
    expect(answer2).toBeInTheDocument();
    expect(answer3).toBeInTheDocument();
    await user.click(answer1);

    // Question 5
    questionNumber = screen.getByText('Question 5');
    questionLength = screen.getByText('/5');
    question = screen.getByText(
      /which strategy sounds most appealing to you?/i
    );
    answer1 = screen.getByRole('button', {
      name: /stay in front of computer/i,
    });
    answer2 = screen.getByRole('button', { name: /set up automated systems/i });
    answer3 = screen.getByRole('button', {
      name: /conduct thorough research/i,
    });
    expect(questionNumber).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(answer1).toBeInTheDocument();
    expect(answer2).toBeInTheDocument();
    expect(answer3).toBeInTheDocument();
    await user.click(answer1);
  });
});
