// Array of question objects to be used by the quiz component
const questions = [
  {
    questionText: 'How much trading capital do you have available?',
    answerOptions: [
      { answerText: '$0-$1000', answerCategory: 'forexTradingWithMT4' },
      {
        answerText: '$1000-$20000',
        answerCategory: 'equitiesAndCryptoWithTradingview',
      },
      { answerText: '$20000+', answerCategory: 'futuresWithQuantconnect' },
    ],
  },
  {
    questionText: 'Do you have experience with trading?',
    answerOptions: [
      { answerText: 'None at all', answerCategory: 'tradingAcademy' },
      {
        answerText: 'Somewhat experienced with trading',
        answerCategory: 'tradingAcademy',
      },
      {
        answerText: 'Strong understanding of trading techniques',
        answerCategory: 'algorithmicTradingAcademy',
      },
      {
        answerText: 'Trading full-time',
        answerCategory: 'futuresWithQuantconnect',
      },
    ],
  },
  {
    questionText: 'Do you have experience with programming?',
    answerOptions: [
      {
        answerText: 'None at all',
        answerCategory: 'algorithmicTradingAcademy',
      },
      {
        answerText:
          'Basic understanding of programming languages such as Python, VBA, etc.',
        answerCategory: 'algorithmicTradingAcademy',
      },
      {
        answerText:
          'Program frequently in my free time but not a programmer by profession',
        answerCategory: 'equitiesAndCryptoWithTradingview',
      },
      {
        answerText: 'Full-time programming or data science job',
        answerCategory: 'marketResearchWithPython',
      },
    ],
  },
  {
    questionText: 'Do you currently work a day job?',
    answerOptions: [
      {
        answerText: 'Do not work during the day',
        answerCategory: 'algorithmicTradingAcademy',
      },
      {
        answerText:
          'Work during the day but have the time/freedom to trade while at work',
        answerCategory: 'equitiesAndCryptoWithTradingview',
      },
      {
        answerText:
          'Work during the day and do not have the time/freedom to trade while working',
        answerCategory: 'forexTradingWithMT4',
      },
    ],
  },
  {
    questionText: 'Which strategy sounds most appealing to you?',
    answerOptions: [
      {
        answerText:
          'Stay in front of computer to control and watch every trade. Would rather make many small trades than one big trade',
        answerCategory: 'tradingAcademy',
      },
      {
        answerText:
          'Set up automated systems to watch the market and notify you of opportunity',
        answerCategory: 'forexTradingWithMT4',
      },
      {
        answerText:
          'Conduct thorough research outside of market hours and make small amount of trades.',
        answerCategory: 'marketResearchWithPython',
      },
    ],
  },
];

export default questions;
