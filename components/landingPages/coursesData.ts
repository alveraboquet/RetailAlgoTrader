interface Lessons {
  id: number;
  title: string;
  path: string;
}

interface Chapters {
  chapter: string;
  lessons: Lessons[];
  id: string;
}

interface CourseData {
  title: string;
  id: number;
  isProCourse: boolean;
  shortDescription: string;
  longDescription: string;
  imagePath: string;
  curriculum: Chapters[];
}

interface Courses {
  [key: string]: CourseData;
}

/**
 * Contains data to be used for the quiz landing pages
 * This data is fed into the quizLandingPage component
 */
const coursesData: Courses = {
  tradingAcademy: {
    title: 'Trading Academy',
    id: 1,
    isProCourse: false,
    shortDescription:
      'If you have no or little experience with trading start here. This course covers the basics such as indicators, risk management, types of orders, etc. This resource will build a strong foundation for you trading career.',
    longDescription:
      'If you are new to trading this is the course for you. This covers all the necessary knowledge and skills to be a profitable trader. This resource focuses purely on proper trading. Topics such as proper risk management, back-testing, technical strategies, margin management, etc will be discussed in-depth with many examples. It does not spend time on algorithmic trading. Once you have mastered the techniques in this course you will be able to automate and improve upon them with algorithmic tools.',
    imagePath: '/images/website/daytrader.webp',
    curriculum: [
      { id: '1', chapter: 'Chapter 1: Course Overview', lessons: [] },
      { id: '2', chapter: 'Chapter 2: Preparing for Course', lessons: [] },
      { id: '3', chapter: 'Chapter 3: Types of Markets', lessons: [] },
      { id: '4', chapter: 'Chapter 4: Margin Trading', lessons: [] },
      { id: '5', chapter: 'Chapter 5: Trading Basics', lessons: [] },
      { id: '6', chapter: 'Chapter 6: TradingView', lessons: [] },
      { id: '7', chapter: 'Chapter 7: Technical Analysis', lessons: [] },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [],
      },

      { id: '11', chapter: 'Chapter 11: Fundamental Analysis', lessons: [] },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [],
      },
      { id: '13', chapter: 'Chapter 13: Alternative Data', lessons: [] },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [],
      },
      { id: '15', chapter: 'Chapter 15: Creating a Trading Plan', lessons: [] },
      { id: '16', chapter: 'Chapter 16: Backtesting', lessons: [] },
      { id: '17', chapter: 'Chapter 17: Choosing a Broker', lessons: [] },
      { id: '18', chapter: 'Chapter 18: Advanced Order Types', lessons: [] },
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
          {
            id: 3,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 4,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 5,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 6,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 7,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      { id: '20', chapter: 'Chapter 20: Review', lessons: [] },
    ],
  },
  algorithmicTradingAcademy: {
    title: 'Algorithmic Trading Academy',
    id: 2,
    isProCourse: true,
    shortDescription:
      'If you are new to alogrithmic trading then this is the course for you. This covers algorithmic trading techniques that can be applied to a variety of markets.',
    longDescription: 'long',
    imagePath: '/images/website/programming.webp',
    curriculum: [
      { id: '1', chapter: 'Chapter 1: Course Overview', lessons: [] },
      { id: '2', chapter: 'Chapter 2: Preparing for Course', lessons: [] },
      { id: '3', chapter: 'Chapter 3: Types of Markets', lessons: [] },
      { id: '4', chapter: 'Chapter 4: Margin Trading', lessons: [] },
      { id: '5', chapter: 'Chapter 5: Trading Basics', lessons: [] },
      { id: '6', chapter: 'Chapter 6: TradingView', lessons: [] },
      { id: '7', chapter: 'Chapter 7: Technical Analysis', lessons: [] },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [],
      },

      { id: '11', chapter: 'Chapter 11: Fundamental Analysis', lessons: [] },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [],
      },
      { id: '13', chapter: 'Chapter 13: Alternative Data', lessons: [] },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [],
      },
      { id: '15', chapter: 'Chapter 15: Creating a Trading Plan', lessons: [] },
      { id: '16', chapter: 'Chapter 16: Backtesting', lessons: [] },
      { id: '17', chapter: 'Chapter 17: Choosing a Broker', lessons: [] },
      { id: '18', chapter: 'Chapter 18: Advanced Order Types', lessons: [] },
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
          {
            id: 3,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 4,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 5,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 6,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 7,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      { id: '20', chapter: 'Chapter 20: Review', lessons: [] },
    ],
  },
  equitiesAndCryptoWithTradingview: {
    title: 'Equities and Crypto with TradingView',
    id: 3,
    isProCourse: true,
    shortDescription:
      'If you have some experience with trading but want to advance your skills try this resourse. This covers basic algorithmic trading with Pinescript on Tradingview.',
    longDescription: 'long',
    imagePath: '/images/website/tradingView.webp',
    curriculum: [
      { id: '1', chapter: 'Chapter 1: Course Overview', lessons: [] },
      { id: '2', chapter: 'Chapter 2: Preparing for Course', lessons: [] },
      { id: '3', chapter: 'Chapter 3: Types of Markets', lessons: [] },
      { id: '4', chapter: 'Chapter 4: Margin Trading', lessons: [] },
      { id: '5', chapter: 'Chapter 5: Trading Basics', lessons: [] },
      { id: '6', chapter: 'Chapter 6: TradingView', lessons: [] },
      { id: '7', chapter: 'Chapter 7: Technical Analysis', lessons: [] },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [],
      },

      { id: '11', chapter: 'Chapter 11: Fundamental Analysis', lessons: [] },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [],
      },
      { id: '13', chapter: 'Chapter 13: Alternative Data', lessons: [] },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [],
      },
      { id: '15', chapter: 'Chapter 15: Creating a Trading Plan', lessons: [] },
      { id: '16', chapter: 'Chapter 16: Backtesting', lessons: [] },
      { id: '17', chapter: 'Chapter 17: Choosing a Broker', lessons: [] },
      { id: '18', chapter: 'Chapter 18: Advanced Order Types', lessons: [] },
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
          {
            id: 3,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 4,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 5,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 6,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 7,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      { id: '20', chapter: 'Chapter 20: Review', lessons: [] },
    ],
  },
  forexTradingWithMT4: {
    title: 'Forex Trading with MT4',
    id: 4,
    isProCourse: true,
    shortDescription:
      'If you do not have much trading capital or you cannot trade during the day this is the course for you. This course focuses on Forex which trades 24/7 and MT4 which is a free, easy-to-learn platform for writing trading algorithms.',
    longDescription: 'long',
    imagePath: '/images/website/bullTrader.webp',
    curriculum: [
      { id: '1', chapter: 'Chapter 1: Course Overview', lessons: [] },
      { id: '2', chapter: 'Chapter 2: Preparing for Course', lessons: [] },
      { id: '3', chapter: 'Chapter 3: Types of Markets', lessons: [] },
      { id: '4', chapter: 'Chapter 4: Margin Trading', lessons: [] },
      { id: '5', chapter: 'Chapter 5: Trading Basics', lessons: [] },
      { id: '6', chapter: 'Chapter 6: TradingView', lessons: [] },
      { id: '7', chapter: 'Chapter 7: Technical Analysis', lessons: [] },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [],
      },

      { id: '11', chapter: 'Chapter 11: Fundamental Analysis', lessons: [] },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [],
      },
      { id: '13', chapter: 'Chapter 13: Alternative Data', lessons: [] },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [],
      },
      { id: '15', chapter: 'Chapter 15: Creating a Trading Plan', lessons: [] },
      { id: '16', chapter: 'Chapter 16: Backtesting', lessons: [] },
      { id: '17', chapter: 'Chapter 17: Choosing a Broker', lessons: [] },
      { id: '18', chapter: 'Chapter 18: Advanced Order Types', lessons: [] },
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
          {
            id: 3,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 4,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 5,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 6,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 7,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      { id: '20', chapter: 'Chapter 20: Review', lessons: [] },
    ],
  },
  futuresWithQuantconnect: {
    title: 'Futures with QuantConnect',
    id: 5,
    isProCourse: true,
    shortDescription:
      'If you already have a decent grasp on the basics of trading then this course will be a good option for you. It focuses specifically on using QuantConnect, a premier algorithmic trading platform, with Futures. Futures provide margin which make them ideal options for maximizing profit if traded correctly.',
    longDescription: 'long',
    imagePath: '/images/website/bullTrader.webp',
    curriculum: [
      { id: '1', chapter: 'Chapter 1: Course Overview', lessons: [] },
      { id: '2', chapter: 'Chapter 2: Preparing for Course', lessons: [] },
      { id: '3', chapter: 'Chapter 3: Types of Markets', lessons: [] },
      { id: '4', chapter: 'Chapter 4: Margin Trading', lessons: [] },
      { id: '5', chapter: 'Chapter 5: Trading Basics', lessons: [] },
      { id: '6', chapter: 'Chapter 6: TradingView', lessons: [] },
      { id: '7', chapter: 'Chapter 7: Technical Analysis', lessons: [] },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [],
      },

      { id: '11', chapter: 'Chapter 11: Fundamental Analysis', lessons: [] },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [],
      },
      { id: '13', chapter: 'Chapter 13: Alternative Data', lessons: [] },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [],
      },
      { id: '15', chapter: 'Chapter 15: Creating a Trading Plan', lessons: [] },
      { id: '16', chapter: 'Chapter 16: Backtesting', lessons: [] },
      { id: '17', chapter: 'Chapter 17: Choosing a Broker', lessons: [] },
      { id: '18', chapter: 'Chapter 18: Advanced Order Types', lessons: [] },
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
          {
            id: 3,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 4,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 5,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 6,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 7,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      { id: '20', chapter: 'Chapter 20: Review', lessons: [] },
    ],
  },
  marketResearchWithPython: {
    title: 'Market Research with Python',
    id: 6,
    isProCourse: true,
    shortDescription:
      'The majority of traders focus on making many small trades. However, it is just as profitable, if not more profitable, to make less frequent, thorougly researched trades. Python with Jupyter notebooks and QuantConnect is the best option for analyzing data and market trends.',
    longDescription: 'long',
    imagePath: '/images/website/bullTrader.webp',
    curriculum: [
      { id: '1', chapter: 'Chapter 1: Course Overview', lessons: [] },
      { id: '2', chapter: 'Chapter 2: Preparing for Course', lessons: [] },
      { id: '3', chapter: 'Chapter 3: Types of Markets', lessons: [] },
      { id: '4', chapter: 'Chapter 4: Margin Trading', lessons: [] },
      { id: '5', chapter: 'Chapter 5: Trading Basics', lessons: [] },
      { id: '6', chapter: 'Chapter 6: TradingView', lessons: [] },
      { id: '7', chapter: 'Chapter 7: Technical Analysis', lessons: [] },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [],
      },

      { id: '11', chapter: 'Chapter 11: Fundamental Analysis', lessons: [] },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [],
      },
      { id: '13', chapter: 'Chapter 13: Alternative Data', lessons: [] },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [],
      },
      { id: '15', chapter: 'Chapter 15: Creating a Trading Plan', lessons: [] },
      { id: '16', chapter: 'Chapter 16: Backtesting', lessons: [] },
      { id: '17', chapter: 'Chapter 17: Choosing a Broker', lessons: [] },
      { id: '18', chapter: 'Chapter 18: Advanced Order Types', lessons: [] },
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
          {
            id: 3,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 4,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 5,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 6,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 7,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      { id: '20', chapter: 'Chapter 20: Review', lessons: [] },
    ],
  },
};

export default coursesData;
