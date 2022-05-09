/**
 * Contains data to be used for the quiz landing pages
 * This data is fed into the quizLandingPage component
 */

interface CourseData {
  title: string;
  shortDescription: string;
  longDescription: string;
  imagePath: string;
  curriculum: string[];
}

interface Courses {
  [key: string]: CourseData;
}

const coursesData: Courses = {
  algorithmicTradingAcademy: {
    title: 'Algorithmic Trading Academy',
    shortDescription:
      'If you are new to alogrithmic trading then this is the course for you. This covers algorithmic trading techniques that can be applied to a variety of markets.',
    longDescription: 'long',
    imagePath: '/images/website/programming.webp',
    curriculum: [
      'Chapter 1: Preparing for Course',
      'Chapter 2: Trading Basics',
    ],
  },
  equitiesAndCryptoWithTradingview: {
    title: 'Equities and Crypto with TradingView',
    shortDescription:
      'If you have some experience with trading but want to advance your skills try this resourse. This covers basic algorithmic trading with Pinescript on Tradingview.',
    longDescription: 'long',
    imagePath: '/images/website/tradingView.webp',
    curriculum: [
      'Chapter 1: Preparing for Course',
      'Chapter 2: Trading Basics',
    ],
  },
  forexTradingWithMT4: {
    title: 'Forex Trading with MT4',
    shortDescription:
      'If you do not have much trading capital or you cannot trade during the day this is the course for you. This course focuses on Forex which trades 24/7 and MT4 which is a free, easy-to-learn platform for writing trading algorithms.',
    longDescription: 'long',
    imagePath: '/images/website/bullTrader.webp',
    curriculum: [
      'Chapter 1: Preparing for Course',
      'Chapter 2: Trading Basics',
    ],
  },
  futuresWithQuantconnect: {
    title: 'Futures with QuantConnect',
    shortDescription:
      'If you already have a decent grasp on the basics of trading then this course will be a good option for you. It focuses specifically on using QuantConnect, a premier algorithmic trading platform, with Futures. Futures provide margin which make them ideal options for maximizing profit if traded correctly.',
    longDescription: 'long',
    imagePath: '/images/website/bullTrader.webp',
    curriculum: [
      'Chapter 1: Preparing for Course',
      'Chapter 2: Trading Basics',
    ],
  },
  marketResearchWithPython: {
    title: 'Market Research with Python',
    shortDescription:
      'The majority of traders focus on making many small trades. However, it is just as profitable, if not more profitable, to make less frequent, thorougly researched trades. Python with Jupyter notebooks and QuantConnect is the best option for analyzing data and market trends.',
    longDescription: 'long',
    imagePath: '/images/website/bullTrader.webp',
    curriculum: [
      'Chapter 1: Preparing for Course',
      'Chapter 2: Trading Basics',
    ],
  },
  tradingAcademy: {
    title: 'Trading Academy',
    shortDescription:
      'If you have no or little experience with trading start here. This course covers the basics such as indicators, risk management, types of orders, etc. This resource will build a strong foundation for you trading career.',
    longDescription:
      'If you are new to trading this is the course for you. This covers all the necessary knowledge and skills to be a profitable trader. This resource focuses purely on proper trading. Topics such as proper risk management, back-testing, technical strategies, margin management, etc will be discussed in-depth with many examples. It does not spend time on algorithmic trading. Once you have mastered the techniques in this course you will be able to automate and improve upon them with algorithmic tools.',
    imagePath: '/images/website/daytrader.webp',
    curriculum: [
      'Chapter 1: Preparing for Course',
      'Chapter 2: Trading Basics',
      'Chapter 3: TradingView',
      'Chapter 4: Technical Analysis',
      'Chapter 5: Technical Analysis - Indicators',
      'Chapter 6: Technical Analysis - Chart Patterns',
      'Chapter 7: Common Technical Analysis Strategies',
      'Chapter 8: Backtesting',
      'Chapter 9: Fundamental Analysis',
      'Chapter 10: Common Fundamental Analysis Strategies',
      'Chapter 11: Proprietary Analysis',
      'Chapter 12: Risk Management and Position Sizing',
      'Chapter 13: Margin Trading',
      'Chapter 14: Creating a Trading Plan',
      'Chapter 15: Choosing a Broker',
      'Chapter 16: Advanced Order Types',
      'Chapter 17: Advanced Strategies',
      'Chapter 18: Idea Generation',
      'Chapter 19: Review',
    ],
  },
};

export default coursesData;
