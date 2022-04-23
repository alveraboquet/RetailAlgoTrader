/* eslint-disable indent */
/**
 * Quiz component that renders on the home page
 * Consists of five questions. Answers to the questions add a value to specified categories.
 * After the final question the quiz routes the user to a landing page for the category with the highest value
 * Quiz cateogories: tradingAcademy, algorithmicTradingAcademy, forexTradingWithMT4,
 *    equitiesAndCryptoWithTradingView, marketResearchWithPython, futuresWithQuantconnect
 */
import { useState } from 'react';
import questions from './quizQuestions';
import getMaxValueKey from '../../lib/getMaxValueKey';
import { useRouter } from 'next/router';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<Array<string>>([]);
  const router = useRouter();

  const handleQuestionClick = (answerCategory: string) => {
    setResult((result) => [...result, answerCategory]);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const answerCategorySums = {
        tradingAcademy: 0,
        algorithmicTradingAcademy: 0,
        forexTradingWithMT4: 0,
        equitiesAndCryptoWithTradingview: 0,
        marketResearchWithPython: 0,
        futuresWithQuantconnect: 0,
      };
      result.forEach((answerCategory) => {
        switch (answerCategory) {
          case 'tradingAcademy':
            answerCategorySums.tradingAcademy =
              answerCategorySums.tradingAcademy + 1;
            break;
          case 'algorithmicTradingAcademy':
            answerCategorySums.algorithmicTradingAcademy =
              answerCategorySums.algorithmicTradingAcademy + 1;
            break;
          case 'forexTradingWithMT4':
            answerCategorySums.forexTradingWithMT4 =
              answerCategorySums.forexTradingWithMT4 + 1;
            break;
          case 'equitiesAndCryptoWithTradingview':
            answerCategorySums.equitiesAndCryptoWithTradingview =
              answerCategorySums.equitiesAndCryptoWithTradingview + 1;
            break;
          case 'marketResearchWithPython':
            answerCategorySums.marketResearchWithPython =
              answerCategorySums.marketResearchWithPython + 1;
            break;
          case 'futuresWithQuantconnect':
            answerCategorySums.futuresWithQuantconnect =
              answerCategorySums.futuresWithQuantconnect + 1;
            break;
        }
      });
      const maxCategory = getMaxValueKey(answerCategorySums);
      const landingPageURL = `/quiz/${maxCategory}`;
      router.push(landingPageURL);
    }
  };

  return (
    <div className="text-center bg-warning pb-3 pt-3">
      <div>
        <div className="fs-3">
          <span>Question {currentQuestion + 1}</span>/{questions.length}
        </div>
        <div>{questions[currentQuestion].questionText}</div>
      </div>
      <div>
        {questions[currentQuestion].answerOptions.map((answerOption) => (
          <div className="m-3" key={answerOption.answerText}>
            <button
              className="btn btn-dark w-100"
              onClick={() => handleQuestionClick(answerOption.answerCategory)}
            >
              {answerOption.answerText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
