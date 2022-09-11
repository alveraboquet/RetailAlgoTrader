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
      'If you have no or little experience with trading start here. \n This course covers the basics such as indicators, risk management, types of orders, etc. This resource will build a strong foundation for your trading career.',
    longDescription:
      'If you are new to trading this is the course for you. This covers all the necessary knowledge and skills to be a profitable trader. \n This resource focuses purely on proper trading. Topics such as proper risk management, back-testing, technical strategies, margin management, etc will be discussed in-depth with many examples. \n It does not spend time on algorithmic trading. \n Once you have mastered the techniques in this course you will be able to automate and improve upon them with algorithmic tools.',
    imagePath: '/images/website/daytrader.webp',
    curriculum: [
      {
        id: '1',
        chapter: 'Chapter 1: Course Overview',
        lessons: [
          {
            id: 1,
            title: 'Syllabus',
            path: '/tradingAcademy/courseOverview/syllabus',
          },
          {
            id: 2,
            title: 'Goals',
            path: '/tradingAcademy/courseOverview/goals',
          },
          {
            id: 3,
            title: 'Timeline',
            path: '/tradingAcademy/courseOverview/timeline',
          },
          {
            id: 4,
            title: 'Resources',
            path: '/tradingAcademy/courseOverview/resources',
          },
        ],
      },
      {
        id: '2',
        chapter: 'Chapter 2: Preparing for Course',
        lessons: [
          {
            id: 5,
            title: 'Schedule',
            path: '/tradingAcademy/preparingForCourse/schedule',
          },
          {
            id: 6,
            title: 'Financial Preparation',
            path: '/tradingAcademy/preparingForCourse/financialPreparation',
          },
          {
            id: 7,
            title: 'Possible to Succeed?',
            path: '/tradingAcademy/preparingForCourse/possibleToSucceed',
          },
          {
            id: 8,
            title: 'Turtle Traders',
            path: '/tradingAcademy/preparingForCourse/turtleTraders',
          },
        ],
      },
      {
        id: '3',
        chapter: 'Chapter 3: Types of Markets',
        lessons: [
          {
            id: 9,
            title: 'Equities',
            path: '/tradingAcademy/typesOfMarkets/equities',
          },
          {
            id: 10,
            title: 'Forex',
            path: '/tradingAcademy/typesOfMarkets/forex',
          },
          {
            id: 11,
            title: 'Options',
            path: '/tradingAcademy/typesOfMarkets/options',
          },
          {
            id: 12,
            title: 'Futures',
            path: '/tradingAcademy/typesOfMarkets/futures',
          },
          {
            id: 13,
            title: 'Crypto',
            path: '/tradingAcademy/typesOfMarkets/crypto',
          },
          {
            id: 14,
            title: 'Comparison',
            path: '/tradingAcademy/typesOfMarkets/comparison',
          },
        ],
      },
      {
        id: '4',
        chapter: 'Chapter 4: Margin Trading',
        lessons: [
          {
            id: 15,
            title: 'Margin Trading',
            path: '/tradingAcademy/marginTrading/marginTrading',
          },
          {
            id: 16,
            title: 'Account Values',
            path: '/tradingAcademy/marginTrading/accountValues',
          },
          {
            id: 17,
            title: 'Margin Call',
            path: '/tradingAcademy/marginTrading/marginCall',
          },
          {
            id: 18,
            title: 'Preventing Margin Call',
            path: '/tradingAcademy/marginTrading/preventingMarginCall',
          },
        ],
      },
      {
        id: '5',
        chapter: 'Chapter 5: Trading Basics',
        lessons: [
          {
            id: 19,
            title: 'Reading Chart',
            path: '/tradingAcademy/tradingBasics/readingChart',
          },
          {
            id: 20,
            title: 'Timeframe Analysis',
            path: '/tradingAcademy/tradingBasics/timeframeAnalysis',
          },
          {
            id: 21,
            title: 'Types of Orders',
            path: '/tradingAcademy/tradingBasics/typesOfOrders',
          },
        ],
      },
      {
        id: '6',
        chapter: 'Chapter 6: TradingView',
        lessons: [
          {
            id: 22,
            title: 'Why TradingView?',
            path: '/tradingAcademy/tradingView/whyTradingView',
          },
          {
            id: 23,
            title: 'Set up TradingView',
            path: '/tradingAcademy/tradingView/setUpTradingView',
          },
          {
            id: 24,
            title: 'TradingView Features',
            path: '/tradingAcademy/tradingView/tradingViewFeatures',
          },
          {
            id: 25,
            title: 'TradingView Brokers',
            path: '/tradingAcademy/tradingView/tradingViewBrokers',
          },
        ],
      },
      {
        id: '7',
        chapter: 'Chapter 7: Technical Analysis',
        lessons: [
          {
            id: 26,
            title: 'What is Technical Analysis?',
            path: '/tradingAcademy/technicalAnalysis/whatIsTechnicalAnalysis',
          },
          {
            id: 27,
            title: 'Pros of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/prosOfTA',
          },
          {
            id: 28,
            title: 'Cons of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/consOfTA',
          },
          {
            id: 29,
            title: 'Key Levels',
            path: '/tradingAcademy/technicalAnalysis/keyLevels',
          },
          {
            id: 30,
            title: 'Trendlines',
            path: '/tradingAcademy/technicalAnalysis/trendlines',
          },
        ],
      },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [
          {
            id: 31,
            title: 'Indicators',
            path: '/tradingAcademy/indicators/indicators',
          },
          {
            id: 32,
            title: 'Moving Averages',
            path: '/tradingAcademy/indicators/movingAverages',
          },
          {
            id: 33,
            title: 'Bollinger Bands',
            path: '/tradingAcademy/indicators/bollingerBands',
          },
          {
            id: 34,
            title: 'MACD',
            path: '/tradingAcademy/indicators/macd',
          },
          {
            id: 35,
            title: 'RSI',
            path: '/tradingAcademy/indicators/rsi',
          },
          {
            id: 36,
            title: 'Other Indicators',
            path: '/tradingAcademy/indicators/otherIndicators',
          },
        ],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [
          {
            id: 37,
            title: 'Types of Candlesticks',
            path: '/tradingAcademy/chartPatterns/typesOfCandlesticks',
          },
          {
            id: 38,
            title: 'Head and Shoulders',
            path: '/tradingAcademy/chartPatterns/headAndShoulders',
          },
          {
            id: 39,
            title: 'Double Top and Bottom',
            path: '/tradingAcademy/chartPatterns/doubleTopAndBottom',
          },
          {
            id: 40,
            title: 'Rounding Bottom',
            path: '/tradingAcademy/chartPatterns/roundingBottom',
          },
          {
            id: 41,
            title: 'Cup and Handle',
            path: '/tradingAcademy/chartPatterns/cupAndHandle',
          },
          {
            id: 42,
            title: 'Wedges',
            path: '/tradingAcademy/chartPatterns/wedges',
          },
          {
            id: 43,
            title: 'CheatSheet',
            path: '/tradingAcademy/chartPatterns/cheatSheet',
          },
        ],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [
          {
            id: 44,
            title: 'Trend Following',
            path: '/tradingAcademy/technicalAnalysisStrategies/trendFollowing',
          },
          {
            id: 45,
            title: 'Mean Reverting',
            path: '/tradingAcademy/technicalAnalysisStrategies/meanReverting',
          },
          {
            id: 46,
            title: 'Breakouts',
            path: '/tradingAcademy/technicalAnalysisStrategies/breakouts',
          },
          {
            id: 47,
            title: 'Review',
            path: '/tradingAcademy/technicalAnalysisStrategies/review',
          },
        ],
      },

      {
        id: '11',
        chapter: 'Chapter 11: Fundamental Analysis',
        lessons: [
          {
            id: 48,
            title: 'What is Fundamental Analysis?',
            path: '/tradingAcademy/fundamentalAnalysis/whatIsFundamentalAnalysis',
          },
          {
            id: 49,
            title: 'Different Market Fundamentals',
            path: '/tradingAcademy/fundamentalAnalysis/differentMarketFundamentals',
          },
          {
            id: 50,
            title: 'Staying Informed',
            path: '/tradingAcademy/fundamentalAnalysis/stayingInformed',
          },
        ],
      },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [
          {
            id: 51,
            title: 'COT Report',
            path: '/tradingAcademy/fundamentalAnalysisStrategies/cot',
          },
          {
            id: 52,
            title: 'News Trading',
            path: '/tradingAcademy/fundamentalAnalysisStrategies/newsTrading',
          },
        ],
      },
      {
        id: '13',
        chapter: 'Chapter 13: Alternative Data',
        lessons: [
          {
            id: 53,
            title: 'What is Alternative Data?',
            path: '/tradingAcademy/alternativeData/whatIsAlternativeData',
          },
          {
            id: 54,
            title: 'Pros and Cons Alternative Data',
            path: '/tradingAcademy/alternativeData/prosAndConsAlternativeData',
          },
          {
            id: 55,
            title: 'Alternative Data and Retail Investors',
            path: '/tradingAcademy/alternativeData/alternativeDataAndRetailInvestors',
          },
        ],
      },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [
          {
            id: 56,
            title: 'Why is Risk Management Important?',
            path: '/tradingAcademy/riskManagement/whyIsRiskManagementImportant',
          },
          {
            id: 57,
            title: 'The Slow Death',
            path: '/tradingAcademy/riskManagement/theSlowDeath',
          },
          {
            id: 58,
            title: 'Stock Position Sizing Formula',
            path: '/tradingAcademy/riskManagement/stocksPositionSizingFormula',
          },
          {
            id: 59,
            title: 'Forex Lot Sizing Formulas',
            path: '/tradingAcademy/riskManagement/forexLotSizingFormulas',
          },
          {
            id: 60,
            title: 'Martingale Method',
            path: '/tradingAcademy/riskManagement/martingaleMethod',
          },
          {
            id: 61,
            title: 'Kelly Criterion Method',
            path: '/tradingAcademy/riskManagement/kellyCriterionMethod',
          },
          {
            id: 62,
            title: 'Correlation',
            path: '/tradingAcademy/riskManagement/correlation',
          },
        ],
      },
      {
        id: '15',
        chapter: 'Chapter 15: Creating a Trading Plan',
        lessons: [
          {
            id: 63,
            title: 'Types of Traders',
            path: '/tradingAcademy/tradingPlan/typesOfTraders',
          },
          {
            id: 64,
            title: 'Choose a Strategy',
            path: '/tradingAcademy/tradingPlan/chooseStrategy',
          },
          {
            id: 65,
            title: 'Risk Management Strategy',
            path: '/tradingAcademy/tradingPlan/riskManagementStrategy',
          },
          {
            id: 66,
            title: 'Entry Rules',
            path: '/tradingAcademy/tradingPlan/entryRules',
          },
          {
            id: 67,
            title: 'Exit Rules',
            path: '/tradingAcademy/tradingPlan/exitRules',
          },
          {
            id: 68,
            title: 'Trading Journal',
            path: '/tradingAcademy/tradingPlan/tradingJournal',
          },
          {
            id: 69,
            title: 'Schedule',
            path: '/tradingAcademy/tradingPlan/schedule',
          },
        ],
      },
      {
        id: '16',
        chapter: 'Chapter 16: Backtesting',
        lessons: [
          {
            id: 70,
            title: 'Overview of Backtesting',
            path: '/tradingAcademy/backtesting/overviewOfBacktesting',
          },
          {
            id: 71,
            title: 'Importance of Backtesting',
            path: '/tradingAcademy/backtesting/importanceOfBacktesting',
          },
          {
            id: 72,
            title: 'Backtesting with TradingView',
            path: '/tradingAcademy/backtesting/backtestingWithTradingView',
          },
          {
            id: 73,
            title: 'Important Metrics',
            path: '/tradingAcademy/backtesting/importantMetrics',
          },
          {
            id: 74,
            title: 'Risks of Overfitting',
            path: '/tradingAcademy/backtesting/risksOfOverfitting',
          },
          {
            id: 75,
            title: 'Walk-Forward Optimization',
            path: '/tradingAcademy/backtesting/walkforwardOptimization',
          },
          {
            id: 76,
            title: 'Evaluating Backtests',
            path: '/tradingAcademy/backtesting/evaluatingBacktests',
          },
        ],
      },
      {
        id: '17',
        chapter: 'Chapter 17: Choosing a Broker',
        lessons: [
          {
            id: 77,
            title: 'Considerations',
            path: '/tradingAcademy/choosingABroker/considerations',
          },
          {
            id: 78,
            title: 'Broker Comparison',
            path: '/tradingAcademy/choosingABroker/brokerComparison',
          },
          {
            id: 79,
            title: 'Paper Trading Account',
            path: '/tradingAcademy/choosingABroker/paperTradingAccount',
          },
        ],
      },
      {
        id: '18',
        chapter: 'Chapter 18: Advanced Order Types',
        lessons: [
          {
            id: 80,
            title: 'Intro',
            path: '/tradingAcademy/advancedOrders/intro',
          },
          {
            id: 81,
            title: 'One Cancels the Other',
            path: '/tradingAcademy/advancedOrders/oneCancelsTheOther',
          },
          {
            id: 82,
            title: 'Bracket',
            path: '/tradingAcademy/advancedOrders/bracket',
          },
          {
            id: 83,
            title: 'Trailing Stop',
            path: '/tradingAcademy/advancedOrders/trailingStop',
          },
          {
            id: 84,
            title: 'Stop Limit',
            path: '/tradingAcademy/advancedOrders/stopLimit',
          },
        ],
      },
      {
        id: '19',
        chapter: 'Chapter 19: Advanced Strategies',
        lessons: [
          {
            id: 85,
            title: 'Intro',
            path: '/tradingAcademy/advancedStrategies/intro',
          },
          {
            id: 86,
            title: 'Scaling Into and Out of Trades',
            path: '/tradingAcademy/advancedStrategies/scalingIntoAndOutOfTrades',
          },
          {
            id: 87,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 88,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeFrames',
          },
          {
            id: 89,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 90,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 91,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      {
        id: '20',
        chapter: 'Chapter 20: Review',
        lessons: [
          {
            id: 92,
            title: 'Review',
            path: '/tradingAcademy/review/review',
          },
        ],
      },
    ],
  },
  algorithmicTradingAcademy: {
    title: 'Algorithmic Trading Academy',
    id: 2,
    isProCourse: true,
    shortDescription:
      'If you are new to alogrithmic trading then this is the course for you. \n This covers algorithmic trading techniques that can be applied to a variety of markets and platforms.',
    longDescription:
      'If you are new to algorithmic trading this is the course for you. This covers all the necessary knowledge and skills to create your own trading algorithms. \n This resource focuses purely on algorithmic trading concepts. \n Topics such as proper risk management, cleaning data, backtesting, algorithmic strategies, etc will be discussed in-depth with many examples. \n It does not spend significant time on any specific trading platform. Once you have mastered the techniques in this course you will be well prepared for our more advanced courses.',
    imagePath: '/images/website/programming.webp',
    curriculum: [
      {
        id: '1',
        chapter: 'Chapter 1: Course Overview',
        lessons: [
          {
            id: 1,
            title: 'Syllabus',
            path: '/tradingAcademy/courseOverview/syllabus',
          },
          {
            id: 2,
            title: 'Goals',
            path: '/tradingAcademy/courseOverview/goals',
          },
          {
            id: 3,
            title: 'Timeline',
            path: '/tradingAcademy/courseOverview/timeline',
          },
          {
            id: 4,
            title: 'Resources',
            path: '/tradingAcademy/courseOverview/resources',
          },
        ],
      },
      {
        id: '2',
        chapter: 'Chapter 2: Preparing for Course',
        lessons: [
          {
            id: 5,
            title: 'Schedule',
            path: '/tradingAcademy/preparingForCourse/schedule',
          },
          {
            id: 6,
            title: 'Financial Preparation',
            path: '/tradingAcademy/preparingForCourse/financialPreparation',
          },
          {
            id: 7,
            title: 'Possible to Succeed?',
            path: '/tradingAcademy/preparingForCourse/possibleToSucceed',
          },
          {
            id: 8,
            title: 'Turtle Traders',
            path: '/tradingAcademy/preparingForCourse/turtleTraders',
          },
        ],
      },
      {
        id: '3',
        chapter: 'Chapter 3: Types of Markets',
        lessons: [
          {
            id: 9,
            title: 'Equities',
            path: '/tradingAcademy/typesOfMarkets/equities',
          },
          {
            id: 10,
            title: 'Forex',
            path: '/tradingAcademy/typesOfMarkets/forex',
          },
          {
            id: 11,
            title: 'Options',
            path: '/tradingAcademy/typesOfMarkets/options',
          },
          {
            id: 12,
            title: 'Futures',
            path: '/tradingAcademy/typesOfMarkets/futures',
          },
          {
            id: 13,
            title: 'Crypto',
            path: '/tradingAcademy/typesOfMarkets/crypto',
          },
          {
            id: 14,
            title: 'Comparison',
            path: '/tradingAcademy/typesOfMarkets/comparison',
          },
        ],
      },
      {
        id: '4',
        chapter: 'Chapter 4: Margin Trading',
        lessons: [
          {
            id: 15,
            title: 'Margin Trading',
            path: '/tradingAcademy/marginTrading/marginTrading',
          },
          {
            id: 16,
            title: 'Account Values',
            path: '/tradingAcademy/marginTrading/accountValues',
          },
          {
            id: 17,
            title: 'Margin Call',
            path: '/tradingAcademy/marginTrading/marginCall',
          },
          {
            id: 18,
            title: 'Preventing Margin Call',
            path: '/tradingAcademy/marginTrading/preventingMarginCall',
          },
        ],
      },
      {
        id: '5',
        chapter: 'Chapter 5: Trading Basics',
        lessons: [
          {
            id: 19,
            title: 'Reading Chart',
            path: '/tradingAcademy/tradingBasics/readingChart',
          },
          {
            id: 20,
            title: 'Timeframe Analysis',
            path: '/tradingAcademy/tradingBasics/timeframeAnalysis',
          },
          {
            id: 21,
            title: 'Types of Orders',
            path: '/tradingAcademy/tradingBasics/typesOfOrders',
          },
        ],
      },
      {
        id: '6',
        chapter: 'Chapter 6: TradingView',
        lessons: [
          {
            id: 22,
            title: 'Why TradingView?',
            path: '/tradingAcademy/tradingView/whyTradingView',
          },
          {
            id: 23,
            title: 'Set up TradingView',
            path: '/tradingAcademy/tradingView/setUpTradingView',
          },
          {
            id: 24,
            title: 'TradingView Features',
            path: '/tradingAcademy/tradingView/tradingViewFeatures',
          },
          {
            id: 25,
            title: 'TradingView Brokers',
            path: '/tradingAcademy/tradingView/tradingViewBrokers',
          },
        ],
      },
      {
        id: '7',
        chapter: 'Chapter 7: Technical Analysis',
        lessons: [
          {
            id: 26,
            title: 'What is Technical Analysis?',
            path: '/tradingAcademy/technicalAnalysis/whatIsTechnicalAnalysis',
          },
          {
            id: 27,
            title: 'Pros of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/prosOfTA',
          },
          {
            id: 28,
            title: 'Cons of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/consOfTA',
          },
          {
            id: 29,
            title: 'Key Levels',
            path: '/tradingAcademy/technicalAnalysis/keyLevels',
          },
          {
            id: 30,
            title: 'Trendlines',
            path: '/tradingAcademy/technicalAnalysis/trendlines',
          },
        ],
      },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [
          {
            id: 31,
            title: 'Indicators',
            path: '/tradingAcademy/indicators/indicators',
          },
          {
            id: 32,
            title: 'Moving Averages',
            path: '/tradingAcademy/indicators/movingAverages',
          },
          {
            id: 33,
            title: 'Bollinger Bands',
            path: '/tradingAcademy/indicators/bollingerBands',
          },
          {
            id: 34,
            title: 'MACD',
            path: '/tradingAcademy/indicators/macd',
          },
          {
            id: 35,
            title: 'RSI',
            path: '/tradingAcademy/indicators/rsi',
          },
          {
            id: 36,
            title: 'Other Indicators',
            path: '/tradingAcademy/indicators/otherIndicators',
          },
        ],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [
          {
            id: 37,
            title: 'Types of Candlesticks',
            path: '/tradingAcademy/indicators/typesOfCandlesticks',
          },
          {
            id: 38,
            title: 'Head and Shoulders',
            path: '/tradingAcademy/indicators/headAndShoulders',
          },
          {
            id: 39,
            title: 'Double Top and Bottom',
            path: '/tradingAcademy/indicators/doubleTopAndBottom',
          },
          {
            id: 40,
            title: 'Rounding Bottom',
            path: '/tradingAcademy/indicators/roundingBottom',
          },
          {
            id: 41,
            title: 'Cup and Handle',
            path: '/tradingAcademy/indicators/cupAndHandle',
          },
          {
            id: 42,
            title: 'Wedges',
            path: '/tradingAcademy/indicators/wedges',
          },
          {
            id: 43,
            title: 'CheatSheet',
            path: '/tradingAcademy/indicators/cheatSheet',
          },
        ],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [
          {
            id: 44,
            title: 'Trend Following',
            path: '/tradingAcademy/technicalAnalysisStrategies/trendFollowing',
          },
          {
            id: 45,
            title: 'Mean Reverting',
            path: '/tradingAcademy/technicalAnalysisStrategies/meanReverting',
          },
          {
            id: 46,
            title: 'Breakouts',
            path: '/tradingAcademy/technicalAnalysisStrategies/breakouts',
          },
          {
            id: 47,
            title: 'Review',
            path: '/tradingAcademy/technicalAnalysisStrategies/review',
          },
        ],
      },

      {
        id: '11',
        chapter: 'Chapter 11: Fundamental Analysis',
        lessons: [
          {
            id: 48,
            title: 'What is Fundamental Analysis?',
            path: '/tradingAcademy/fundamentalAnalysis/whatIsFundamentalAnalysis',
          },
          {
            id: 49,
            title: 'Different Market Fundamentals',
            path: '/tradingAcademy/fundamentalAnalysis/differentMarketFundamentals',
          },
          {
            id: 50,
            title: 'Staying Informed',
            path: '/tradingAcademy/fundamentalAnalysis/stayingInformed',
          },
        ],
      },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [
          {
            id: 51,
            title: 'COT Report',
            path: '/tradingAcademy/fundamentalAnalysisStrategies/cot',
          },
          {
            id: 52,
            title: 'News Trading',
            path: '/tradingAcademy/fundamentalAnalysis/newsTrading',
          },
        ],
      },
      {
        id: '13',
        chapter: 'Chapter 13: Alternative Data',
        lessons: [
          {
            id: 53,
            title: 'What is Alternative Data?',
            path: '/tradingAcademy/alternativeData/whatIsAlternativeData',
          },
          {
            id: 54,
            title: 'Pros and Cons Alternative Data',
            path: '/tradingAcademy/alternativeData/prosAndConsAlternativeData',
          },
          {
            id: 55,
            title: 'Alternative Data and Retail Investors',
            path: '/tradingAcademy/alternativeData/alternativeDataAndRetailInvestors',
          },
        ],
      },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [
          {
            id: 56,
            title: 'Why is Risk Management Important?',
            path: '/tradingAcademy/riskManagement/whyIsRiskManagementImportant',
          },
          {
            id: 57,
            title: 'The Slow Death',
            path: '/tradingAcademy/riskManagement/theSlowDeath',
          },
          {
            id: 58,
            title: 'Stock Position Sizing Formula',
            path: '/tradingAcademy/riskManagement/stocksPositionSizingFormula',
          },
          {
            id: 59,
            title: 'Forex Lot Sizing Formulas',
            path: '/tradingAcademy/riskManagement/forexLotSizingFormulas',
          },
          {
            id: 60,
            title: 'Martingale Method',
            path: '/tradingAcademy/riskManagement/martingaleMethod',
          },
          {
            id: 61,
            title: 'Kelly Criterion Method',
            path: '/tradingAcademy/riskManagement/kellyCriterionMethod',
          },
          {
            id: 62,
            title: 'Correlation',
            path: '/tradingAcademy/riskManagement/correlation',
          },
        ],
      },
      {
        id: '15',
        chapter: 'Chapter 15: Creating a Trading Plan',
        lessons: [
          {
            id: 63,
            title: 'Types of Traders',
            path: '/tradingAcademy/tradingPlan/typesOfTraders',
          },
          {
            id: 64,
            title: 'Choose a Strategy',
            path: '/tradingAcademy/tradingPlan/chooseStrategy',
          },
          {
            id: 65,
            title: 'Risk Management Strategy',
            path: '/tradingAcademy/tradingPlan/riskManagementStrategy',
          },
          {
            id: 66,
            title: 'Entry Rules',
            path: '/tradingAcademy/tradingPlan/entryRules',
          },
          {
            id: 67,
            title: 'Exit Rules',
            path: '/tradingAcademy/tradingPlan/exitRules',
          },
          {
            id: 68,
            title: 'Trading Journal',
            path: '/tradingAcademy/tradingPlan/tradingJournal',
          },
          {
            id: 69,
            title: 'Schedule',
            path: '/tradingAcademy/tradingPlan/schedule',
          },
        ],
      },
      {
        id: '16',
        chapter: 'Chapter 16: Backtesting',
        lessons: [
          {
            id: 70,
            title: 'Overview of Backtesting',
            path: '/tradingAcademy/backtesting/overviewOfBacktesting',
          },
          {
            id: 71,
            title: 'Importance of Backtesting',
            path: '/tradingAcademy/backtesting/importanceOfBacktesting',
          },
          {
            id: 72,
            title: 'Backtesting with TradingView',
            path: '/tradingAcademy/backtesting/backtestingWithTradingView',
          },
          {
            id: 73,
            title: 'Important Metrics',
            path: '/tradingAcademy/backtesting/importantMetrics',
          },
          {
            id: 74,
            title: 'Risks of Overfitting',
            path: '/tradingAcademy/backtesting/risksOfOverfitting',
          },
          {
            id: 75,
            title: 'Walk-Forward Optimization',
            path: '/tradingAcademy/backtesting/walkforwardOptimization',
          },
          {
            id: 76,
            title: 'Evaluating Backtests',
            path: '/tradingAcademy/backtesting/evaluatingBacktests',
          },
        ],
      },
      {
        id: '17',
        chapter: 'Chapter 17: Choosing a Broker',
        lessons: [
          {
            id: 77,
            title: 'Considerations',
            path: '/tradingAcademy/choosingABroker/considerations',
          },
          {
            id: 78,
            title: 'Broker Comparison',
            path: '/tradingAcademy/choosingABroker/brokerComparison',
          },
          {
            id: 79,
            title: 'Paper Trading Account',
            path: '/tradingAcademy/choosingABroker/paperTradingAccount',
          },
        ],
      },
      {
        id: '18',
        chapter: 'Chapter 18: Advanced Order Types',
        lessons: [
          {
            id: 80,
            title: 'Intro',
            path: '/tradingAcademy/advancedOrders/intro',
          },
          {
            id: 81,
            title: 'One Cancels the Other',
            path: '/tradingAcademy/advancedOrders/oneCancelsTheOther',
          },
          {
            id: 82,
            title: 'Bracket',
            path: '/tradingAcademy/advancedOrders/bracket',
          },
          {
            id: 83,
            title: 'Trailing Stop',
            path: '/tradingAcademy/advancedOrders/trailingStop',
          },
          {
            id: 84,
            title: 'Stop Limit',
            path: '/tradingAcademy/advancedOrders/stopLimit',
          },
        ],
      },
      {
        id: '19',
        chapter: 'Chapter 19: Advanced Strategies',
        lessons: [
          {
            id: 85,
            title: 'Intro',
            path: '/tradingAcademy/advancedStrategies/intro',
          },
          {
            id: 86,
            title: 'Scaling Into and Out of Trades',
            path: '/tradingAcademy/advancedStrategies/scalingIntoAndOutOfTrades',
          },
          {
            id: 87,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 88,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 89,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 90,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 91,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      {
        id: '20',
        chapter: 'Chapter 20: Review',
        lessons: [
          {
            id: 92,
            title: 'Review',
            path: '/tradingAcademy/review/review',
          },
        ],
      },
    ],
  },
  equitiesAndCryptoWithTradingView: {
    title: 'Equities and Crypto with TradingView',
    id: 3,
    isProCourse: true,
    shortDescription:
      'If you have some experience with trading but want to advance your skills try this resourse. \n This covers basic algorithmic trading with Pinescript on Tradingview.',
    longDescription:
      'If you have completed our Trading Academy and Algorithmic Trading Academy then this is a great next step. TradingView has developed a programming language called PineScript designed specifically for algorithmic trading. As a result, it is much easier to get started with than Python or another programming langauge. In addition, TradingView has substantial free data for many instruments and provides a solid backtesting framework. Programming algorithms in PineScript allows you to focus purely on your algorithm while TradingView handles everything else.',
    imagePath: '/images/website/tradingView.webp',
    curriculum: [
      {
        id: '1',
        chapter: 'Chapter 1: Course Overview',
        lessons: [
          {
            id: 1,
            title: 'Syllabus',
            path: '/tradingAcademy/courseOverview/syllabus',
          },
          {
            id: 2,
            title: 'Goals',
            path: '/tradingAcademy/courseOverview/goals',
          },
          {
            id: 3,
            title: 'Timeline',
            path: '/tradingAcademy/courseOverview/timeline',
          },
          {
            id: 4,
            title: 'Resources',
            path: '/tradingAcademy/courseOverview/resources',
          },
        ],
      },
      {
        id: '2',
        chapter: 'Chapter 2: Preparing for Course',
        lessons: [
          {
            id: 5,
            title: 'Schedule',
            path: '/tradingAcademy/preparingForCourse/schedule',
          },
          {
            id: 6,
            title: 'Financial Preparation',
            path: '/tradingAcademy/preparingForCourse/financialPreparation',
          },
          {
            id: 7,
            title: 'Possible to Succeed?',
            path: '/tradingAcademy/preparingForCourse/possibleToSucceed',
          },
          {
            id: 8,
            title: 'Turtle Traders',
            path: '/tradingAcademy/preparingForCourse/turtleTraders',
          },
        ],
      },
      {
        id: '3',
        chapter: 'Chapter 3: Types of Markets',
        lessons: [
          {
            id: 9,
            title: 'Equities',
            path: '/tradingAcademy/typesOfMarkets/equities',
          },
          {
            id: 10,
            title: 'Forex',
            path: '/tradingAcademy/typesOfMarkets/forex',
          },
          {
            id: 11,
            title: 'Options',
            path: '/tradingAcademy/typesOfMarkets/options',
          },
          {
            id: 12,
            title: 'Futures',
            path: '/tradingAcademy/typesOfMarkets/futures',
          },
          {
            id: 13,
            title: 'Crypto',
            path: '/tradingAcademy/typesOfMarkets/crypto',
          },
          {
            id: 14,
            title: 'Comparison',
            path: '/tradingAcademy/typesOfMarkets/comparison',
          },
        ],
      },
      {
        id: '4',
        chapter: 'Chapter 4: Margin Trading',
        lessons: [
          {
            id: 15,
            title: 'Margin Trading',
            path: '/tradingAcademy/marginTrading/marginTrading',
          },
          {
            id: 16,
            title: 'Account Values',
            path: '/tradingAcademy/marginTrading/accountValues',
          },
          {
            id: 17,
            title: 'Margin Call',
            path: '/tradingAcademy/marginTrading/marginCall',
          },
          {
            id: 18,
            title: 'Preventing Margin Call',
            path: '/tradingAcademy/marginTrading/preventingMarginCall',
          },
        ],
      },
      {
        id: '5',
        chapter: 'Chapter 5: Trading Basics',
        lessons: [
          {
            id: 19,
            title: 'Reading Chart',
            path: '/tradingAcademy/tradingBasics/readingChart',
          },
          {
            id: 20,
            title: 'Timeframe Analysis',
            path: '/tradingAcademy/tradingBasics/timeframeAnalysis',
          },
          {
            id: 21,
            title: 'Types of Orders',
            path: '/tradingAcademy/tradingBasics/typesOfOrders',
          },
        ],
      },
      {
        id: '6',
        chapter: 'Chapter 6: TradingView',
        lessons: [
          {
            id: 22,
            title: 'Why TradingView?',
            path: '/tradingAcademy/tradingView/whyTradingView',
          },
          {
            id: 23,
            title: 'Set up TradingView',
            path: '/tradingAcademy/tradingView/setUpTradingView',
          },
          {
            id: 24,
            title: 'TradingView Features',
            path: '/tradingAcademy/tradingView/tradingViewFeatures',
          },
          {
            id: 25,
            title: 'TradingView Brokers',
            path: '/tradingAcademy/tradingView/tradingViewBrokers',
          },
        ],
      },
      {
        id: '7',
        chapter: 'Chapter 7: Technical Analysis',
        lessons: [
          {
            id: 26,
            title: 'What is Technical Analysis?',
            path: '/tradingAcademy/technicalAnalysis/whatIsTechnicalAnalysis',
          },
          {
            id: 27,
            title: 'Pros of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/prosOfTA',
          },
          {
            id: 28,
            title: 'Cons of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/consOfTA',
          },
          {
            id: 29,
            title: 'Key Levels',
            path: '/tradingAcademy/technicalAnalysis/keyLevels',
          },
          {
            id: 30,
            title: 'Trendlines',
            path: '/tradingAcademy/technicalAnalysis/trendlines',
          },
        ],
      },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [
          {
            id: 31,
            title: 'Indicators',
            path: '/tradingAcademy/indicators/indicators',
          },
          {
            id: 32,
            title: 'Moving Averages',
            path: '/tradingAcademy/indicators/movingAverages',
          },
          {
            id: 33,
            title: 'Bollinger Bands',
            path: '/tradingAcademy/indicators/bollingerBands',
          },
          {
            id: 34,
            title: 'MACD',
            path: '/tradingAcademy/indicators/macd',
          },
          {
            id: 35,
            title: 'RSI',
            path: '/tradingAcademy/indicators/rsi',
          },
          {
            id: 36,
            title: 'Other Indicators',
            path: '/tradingAcademy/indicators/otherIndicators',
          },
        ],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [
          {
            id: 37,
            title: 'Types of Candlesticks',
            path: '/tradingAcademy/indicators/typesOfCandlesticks',
          },
          {
            id: 38,
            title: 'Head and Shoulders',
            path: '/tradingAcademy/indicators/headAndShoulders',
          },
          {
            id: 39,
            title: 'Double Top and Bottom',
            path: '/tradingAcademy/indicators/doubleTopAndBottom',
          },
          {
            id: 40,
            title: 'Rounding Bottom',
            path: '/tradingAcademy/indicators/roundingBottom',
          },
          {
            id: 41,
            title: 'Cup and Handle',
            path: '/tradingAcademy/indicators/cupAndHandle',
          },
          {
            id: 42,
            title: 'Wedges',
            path: '/tradingAcademy/indicators/wedges',
          },
          {
            id: 43,
            title: 'CheatSheet',
            path: '/tradingAcademy/indicators/cheatSheet',
          },
        ],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [
          {
            id: 44,
            title: 'Trend Following',
            path: '/tradingAcademy/technicalAnalysisStrategies/trendFollowing',
          },
          {
            id: 45,
            title: 'Mean Reverting',
            path: '/tradingAcademy/technicalAnalysisStrategies/meanReverting',
          },
          {
            id: 46,
            title: 'Breakouts',
            path: '/tradingAcademy/technicalAnalysisStrategies/breakouts',
          },
          {
            id: 47,
            title: 'Review',
            path: '/tradingAcademy/technicalAnalysisStrategies/review',
          },
        ],
      },

      {
        id: '11',
        chapter: 'Chapter 11: Fundamental Analysis',
        lessons: [
          {
            id: 48,
            title: 'What is Fundamental Analysis?',
            path: '/tradingAcademy/fundamentalAnalysis/whatIsFundamentalAnalysis',
          },
          {
            id: 49,
            title: 'Different Market Fundamentals',
            path: '/tradingAcademy/fundamentalAnalysis/differentMarketFundamentals',
          },
          {
            id: 50,
            title: 'Staying Informed',
            path: '/tradingAcademy/fundamentalAnalysis/stayingInformed',
          },
        ],
      },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [
          {
            id: 51,
            title: 'COT Report',
            path: '/tradingAcademy/fundamentalAnalysisStrategies/cot',
          },
          {
            id: 52,
            title: 'News Trading',
            path: '/tradingAcademy/fundamentalAnalysis/newsTrading',
          },
        ],
      },
      {
        id: '13',
        chapter: 'Chapter 13: Alternative Data',
        lessons: [
          {
            id: 53,
            title: 'What is Alternative Data?',
            path: '/tradingAcademy/alternativeData/whatIsAlternativeData',
          },
          {
            id: 54,
            title: 'Pros and Cons Alternative Data',
            path: '/tradingAcademy/alternativeData/prosAndConsAlternativeData',
          },
          {
            id: 55,
            title: 'Alternative Data and Retail Investors',
            path: '/tradingAcademy/alternativeData/alternativeDataAndRetailInvestors',
          },
        ],
      },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [
          {
            id: 56,
            title: 'Why is Risk Management Important?',
            path: '/tradingAcademy/riskManagement/whyIsRiskManagementImportant',
          },
          {
            id: 57,
            title: 'The Slow Death',
            path: '/tradingAcademy/riskManagement/theSlowDeath',
          },
          {
            id: 58,
            title: 'Stock Position Sizing Formula',
            path: '/tradingAcademy/riskManagement/stocksPositionSizingFormula',
          },
          {
            id: 59,
            title: 'Forex Lot Sizing Formulas',
            path: '/tradingAcademy/riskManagement/forexLotSizingFormulas',
          },
          {
            id: 60,
            title: 'Martingale Method',
            path: '/tradingAcademy/riskManagement/martingaleMethod',
          },
          {
            id: 61,
            title: 'Kelly Criterion Method',
            path: '/tradingAcademy/riskManagement/kellyCriterionMethod',
          },
          {
            id: 62,
            title: 'Correlation',
            path: '/tradingAcademy/riskManagement/correlation',
          },
        ],
      },
      {
        id: '15',
        chapter: 'Chapter 15: Creating a Trading Plan',
        lessons: [
          {
            id: 63,
            title: 'Types of Traders',
            path: '/tradingAcademy/tradingPlan/typesOfTraders',
          },
          {
            id: 64,
            title: 'Choose a Strategy',
            path: '/tradingAcademy/tradingPlan/chooseStrategy',
          },
          {
            id: 65,
            title: 'Risk Management Strategy',
            path: '/tradingAcademy/tradingPlan/riskManagementStrategy',
          },
          {
            id: 66,
            title: 'Entry Rules',
            path: '/tradingAcademy/tradingPlan/entryRules',
          },
          {
            id: 67,
            title: 'Exit Rules',
            path: '/tradingAcademy/tradingPlan/exitRules',
          },
          {
            id: 68,
            title: 'Trading Journal',
            path: '/tradingAcademy/tradingPlan/tradingJournal',
          },
          {
            id: 69,
            title: 'Schedule',
            path: '/tradingAcademy/tradingPlan/schedule',
          },
        ],
      },
      {
        id: '16',
        chapter: 'Chapter 16: Backtesting',
        lessons: [
          {
            id: 70,
            title: 'Overview of Backtesting',
            path: '/tradingAcademy/backtesting/overviewOfBacktesting',
          },
          {
            id: 71,
            title: 'Importance of Backtesting',
            path: '/tradingAcademy/backtesting/importanceOfBacktesting',
          },
          {
            id: 72,
            title: 'Backtesting with TradingView',
            path: '/tradingAcademy/backtesting/backtestingWithTradingView',
          },
          {
            id: 73,
            title: 'Important Metrics',
            path: '/tradingAcademy/backtesting/importantMetrics',
          },
          {
            id: 74,
            title: 'Risks of Overfitting',
            path: '/tradingAcademy/backtesting/risksOfOverfitting',
          },
          {
            id: 75,
            title: 'Walk-Forward Optimization',
            path: '/tradingAcademy/backtesting/walkforwardOptimization',
          },
          {
            id: 76,
            title: 'Evaluating Backtests',
            path: '/tradingAcademy/backtesting/evaluatingBacktests',
          },
        ],
      },
      {
        id: '17',
        chapter: 'Chapter 17: Choosing a Broker',
        lessons: [
          {
            id: 77,
            title: 'Considerations',
            path: '/tradingAcademy/choosingABroker/considerations',
          },
          {
            id: 78,
            title: 'Broker Comparison',
            path: '/tradingAcademy/choosingABroker/brokerComparison',
          },
          {
            id: 79,
            title: 'Paper Trading Account',
            path: '/tradingAcademy/choosingABroker/paperTradingAccount',
          },
        ],
      },
      {
        id: '18',
        chapter: 'Chapter 18: Advanced Order Types',
        lessons: [
          {
            id: 80,
            title: 'Intro',
            path: '/tradingAcademy/advancedOrders/intro',
          },
          {
            id: 81,
            title: 'One Cancels the Other',
            path: '/tradingAcademy/advancedOrders/oneCancelsTheOther',
          },
          {
            id: 82,
            title: 'Bracket',
            path: '/tradingAcademy/advancedOrders/bracket',
          },
          {
            id: 83,
            title: 'Trailing Stop',
            path: '/tradingAcademy/advancedOrders/trailingStop',
          },
          {
            id: 84,
            title: 'Stop Limit',
            path: '/tradingAcademy/advancedOrders/stopLimit',
          },
        ],
      },
      {
        id: '19',
        chapter: 'Chapter 19: Advanced Strategies',
        lessons: [
          {
            id: 85,
            title: 'Intro',
            path: '/tradingAcademy/advancedStrategies/intro',
          },
          {
            id: 86,
            title: 'Scaling Into and Out of Trades',
            path: '/tradingAcademy/advancedStrategies/scalingIntoAndOutOfTrades',
          },
          {
            id: 87,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 88,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 89,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 90,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 91,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      {
        id: '20',
        chapter: 'Chapter 20: Review',
        lessons: [
          {
            id: 92,
            title: 'Review',
            path: '/tradingAcademy/review/review',
          },
        ],
      },
    ],
  },
  forexTradingWithMT4: {
    title: 'Forex Trading with MT4',
    id: 4,
    isProCourse: true,
    shortDescription:
      'If you do not have much trading capital or you cannot trade during the day this is the course for you. \n This course focuses on Forex which trades 24/7 and MT4 which is a free, easy-to-learn platform for writing trading algorithms.',
    longDescription:
      'If you have completed our Trading Academy and Algorithmic Trading Academy then this is a great next step. MetaTrader has developed a programming language called MQL4 designed specifically for algorithmic trading of forex. As a result, it is much easier to get started with than Python or another programming langauge. Nearly all Forex brokers offer support for MT4. Forex is a fantastic choice for traders that do work during normal market hours as Forex trades 24 hours a day. In addition, Forex offers significant leverage meaning you can start trading with as little as $100. MetaTrader has developed a great backtesting framework while also providing free data for your use. Programming algorithms in MQL4 allows you to focus purely on your algorithm while MetaTrader handles everything else.',
    imagePath: '/images/website/mt4.webp',
    curriculum: [
      {
        id: '1',
        chapter: 'Chapter 1: Course Overview',
        lessons: [
          {
            id: 1,
            title: 'Syllabus',
            path: '/tradingAcademy/courseOverview/syllabus',
          },
          {
            id: 2,
            title: 'Goals',
            path: '/tradingAcademy/courseOverview/goals',
          },
          {
            id: 3,
            title: 'Timeline',
            path: '/tradingAcademy/courseOverview/timeline',
          },
          {
            id: 4,
            title: 'Resources',
            path: '/tradingAcademy/courseOverview/resources',
          },
        ],
      },
      {
        id: '2',
        chapter: 'Chapter 2: Preparing for Course',
        lessons: [
          {
            id: 5,
            title: 'Schedule',
            path: '/tradingAcademy/preparingForCourse/schedule',
          },
          {
            id: 6,
            title: 'Financial Preparation',
            path: '/tradingAcademy/preparingForCourse/financialPreparation',
          },
          {
            id: 7,
            title: 'Possible to Succeed?',
            path: '/tradingAcademy/preparingForCourse/possibleToSucceed',
          },
          {
            id: 8,
            title: 'Turtle Traders',
            path: '/tradingAcademy/preparingForCourse/turtleTraders',
          },
        ],
      },
      {
        id: '3',
        chapter: 'Chapter 3: Types of Markets',
        lessons: [
          {
            id: 9,
            title: 'Equities',
            path: '/tradingAcademy/typesOfMarkets/equities',
          },
          {
            id: 10,
            title: 'Forex',
            path: '/tradingAcademy/typesOfMarkets/forex',
          },
          {
            id: 11,
            title: 'Options',
            path: '/tradingAcademy/typesOfMarkets/options',
          },
          {
            id: 12,
            title: 'Futures',
            path: '/tradingAcademy/typesOfMarkets/futures',
          },
          {
            id: 13,
            title: 'Crypto',
            path: '/tradingAcademy/typesOfMarkets/crypto',
          },
          {
            id: 14,
            title: 'Comparison',
            path: '/tradingAcademy/typesOfMarkets/comparison',
          },
        ],
      },
      {
        id: '4',
        chapter: 'Chapter 4: Margin Trading',
        lessons: [
          {
            id: 15,
            title: 'Margin Trading',
            path: '/tradingAcademy/marginTrading/marginTrading',
          },
          {
            id: 16,
            title: 'Account Values',
            path: '/tradingAcademy/marginTrading/accountValues',
          },
          {
            id: 17,
            title: 'Margin Call',
            path: '/tradingAcademy/marginTrading/marginCall',
          },
          {
            id: 18,
            title: 'Preventing Margin Call',
            path: '/tradingAcademy/marginTrading/preventingMarginCall',
          },
        ],
      },
      {
        id: '5',
        chapter: 'Chapter 5: Trading Basics',
        lessons: [
          {
            id: 19,
            title: 'Reading Chart',
            path: '/tradingAcademy/tradingBasics/readingChart',
          },
          {
            id: 20,
            title: 'Timeframe Analysis',
            path: '/tradingAcademy/tradingBasics/timeframeAnalysis',
          },
          {
            id: 21,
            title: 'Types of Orders',
            path: '/tradingAcademy/tradingBasics/typesOfOrders',
          },
        ],
      },
      {
        id: '6',
        chapter: 'Chapter 6: TradingView',
        lessons: [
          {
            id: 22,
            title: 'Why TradingView?',
            path: '/tradingAcademy/tradingView/whyTradingView',
          },
          {
            id: 23,
            title: 'Set up TradingView',
            path: '/tradingAcademy/tradingView/setUpTradingView',
          },
          {
            id: 24,
            title: 'TradingView Features',
            path: '/tradingAcademy/tradingView/tradingViewFeatures',
          },
          {
            id: 25,
            title: 'TradingView Brokers',
            path: '/tradingAcademy/tradingView/tradingViewBrokers',
          },
        ],
      },
      {
        id: '7',
        chapter: 'Chapter 7: Technical Analysis',
        lessons: [
          {
            id: 26,
            title: 'What is Technical Analysis?',
            path: '/tradingAcademy/technicalAnalysis/whatIsTechnicalAnalysis',
          },
          {
            id: 27,
            title: 'Pros of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/prosOfTA',
          },
          {
            id: 28,
            title: 'Cons of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/consOfTA',
          },
          {
            id: 29,
            title: 'Key Levels',
            path: '/tradingAcademy/technicalAnalysis/keyLevels',
          },
          {
            id: 30,
            title: 'Trendlines',
            path: '/tradingAcademy/technicalAnalysis/trendlines',
          },
        ],
      },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [
          {
            id: 31,
            title: 'Indicators',
            path: '/tradingAcademy/indicators/indicators',
          },
          {
            id: 32,
            title: 'Moving Averages',
            path: '/tradingAcademy/indicators/movingAverages',
          },
          {
            id: 33,
            title: 'Bollinger Bands',
            path: '/tradingAcademy/indicators/bollingerBands',
          },
          {
            id: 34,
            title: 'MACD',
            path: '/tradingAcademy/indicators/macd',
          },
          {
            id: 35,
            title: 'RSI',
            path: '/tradingAcademy/indicators/rsi',
          },
          {
            id: 36,
            title: 'Other Indicators',
            path: '/tradingAcademy/indicators/otherIndicators',
          },
        ],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [
          {
            id: 37,
            title: 'Types of Candlesticks',
            path: '/tradingAcademy/indicators/typesOfCandlesticks',
          },
          {
            id: 38,
            title: 'Head and Shoulders',
            path: '/tradingAcademy/indicators/headAndShoulders',
          },
          {
            id: 39,
            title: 'Double Top and Bottom',
            path: '/tradingAcademy/indicators/doubleTopAndBottom',
          },
          {
            id: 40,
            title: 'Rounding Bottom',
            path: '/tradingAcademy/indicators/roundingBottom',
          },
          {
            id: 41,
            title: 'Cup and Handle',
            path: '/tradingAcademy/indicators/cupAndHandle',
          },
          {
            id: 42,
            title: 'Wedges',
            path: '/tradingAcademy/indicators/wedges',
          },
          {
            id: 43,
            title: 'CheatSheet',
            path: '/tradingAcademy/indicators/cheatSheet',
          },
        ],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [
          {
            id: 44,
            title: 'Trend Following',
            path: '/tradingAcademy/technicalAnalysisStrategies/trendFollowing',
          },
          {
            id: 45,
            title: 'Mean Reverting',
            path: '/tradingAcademy/technicalAnalysisStrategies/meanReverting',
          },
          {
            id: 46,
            title: 'Breakouts',
            path: '/tradingAcademy/technicalAnalysisStrategies/breakouts',
          },
          {
            id: 47,
            title: 'Review',
            path: '/tradingAcademy/technicalAnalysisStrategies/review',
          },
        ],
      },

      {
        id: '11',
        chapter: 'Chapter 11: Fundamental Analysis',
        lessons: [
          {
            id: 48,
            title: 'What is Fundamental Analysis?',
            path: '/tradingAcademy/fundamentalAnalysis/whatIsFundamentalAnalysis',
          },
          {
            id: 49,
            title: 'Different Market Fundamentals',
            path: '/tradingAcademy/fundamentalAnalysis/differentMarketFundamentals',
          },
          {
            id: 50,
            title: 'Staying Informed',
            path: '/tradingAcademy/fundamentalAnalysis/stayingInformed',
          },
        ],
      },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [
          {
            id: 51,
            title: 'COT Report',
            path: '/tradingAcademy/fundamentalAnalysisStrategies/cot',
          },
          {
            id: 52,
            title: 'News Trading',
            path: '/tradingAcademy/fundamentalAnalysis/newsTrading',
          },
        ],
      },
      {
        id: '13',
        chapter: 'Chapter 13: Alternative Data',
        lessons: [
          {
            id: 53,
            title: 'What is Alternative Data?',
            path: '/tradingAcademy/alternativeData/whatIsAlternativeData',
          },
          {
            id: 54,
            title: 'Pros and Cons Alternative Data',
            path: '/tradingAcademy/alternativeData/prosAndConsAlternativeData',
          },
          {
            id: 55,
            title: 'Alternative Data and Retail Investors',
            path: '/tradingAcademy/alternativeData/alternativeDataAndRetailInvestors',
          },
        ],
      },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [
          {
            id: 56,
            title: 'Why is Risk Management Important?',
            path: '/tradingAcademy/riskManagement/whyIsRiskManagementImportant',
          },
          {
            id: 57,
            title: 'The Slow Death',
            path: '/tradingAcademy/riskManagement/theSlowDeath',
          },
          {
            id: 58,
            title: 'Stock Position Sizing Formula',
            path: '/tradingAcademy/riskManagement/stocksPositionSizingFormula',
          },
          {
            id: 59,
            title: 'Forex Lot Sizing Formulas',
            path: '/tradingAcademy/riskManagement/forexLotSizingFormulas',
          },
          {
            id: 60,
            title: 'Martingale Method',
            path: '/tradingAcademy/riskManagement/martingaleMethod',
          },
          {
            id: 61,
            title: 'Kelly Criterion Method',
            path: '/tradingAcademy/riskManagement/kellyCriterionMethod',
          },
          {
            id: 62,
            title: 'Correlation',
            path: '/tradingAcademy/riskManagement/correlation',
          },
        ],
      },
      {
        id: '15',
        chapter: 'Chapter 15: Creating a Trading Plan',
        lessons: [
          {
            id: 63,
            title: 'Types of Traders',
            path: '/tradingAcademy/tradingPlan/typesOfTraders',
          },
          {
            id: 64,
            title: 'Choose a Strategy',
            path: '/tradingAcademy/tradingPlan/chooseStrategy',
          },
          {
            id: 65,
            title: 'Risk Management Strategy',
            path: '/tradingAcademy/tradingPlan/riskManagementStrategy',
          },
          {
            id: 66,
            title: 'Entry Rules',
            path: '/tradingAcademy/tradingPlan/entryRules',
          },
          {
            id: 67,
            title: 'Exit Rules',
            path: '/tradingAcademy/tradingPlan/exitRules',
          },
          {
            id: 68,
            title: 'Trading Journal',
            path: '/tradingAcademy/tradingPlan/tradingJournal',
          },
          {
            id: 69,
            title: 'Schedule',
            path: '/tradingAcademy/tradingPlan/schedule',
          },
        ],
      },
      {
        id: '16',
        chapter: 'Chapter 16: Backtesting',
        lessons: [
          {
            id: 70,
            title: 'Overview of Backtesting',
            path: '/tradingAcademy/backtesting/overviewOfBacktesting',
          },
          {
            id: 71,
            title: 'Importance of Backtesting',
            path: '/tradingAcademy/backtesting/importanceOfBacktesting',
          },
          {
            id: 72,
            title: 'Backtesting with TradingView',
            path: '/tradingAcademy/backtesting/backtestingWithTradingView',
          },
          {
            id: 73,
            title: 'Important Metrics',
            path: '/tradingAcademy/backtesting/importantMetrics',
          },
          {
            id: 74,
            title: 'Risks of Overfitting',
            path: '/tradingAcademy/backtesting/risksOfOverfitting',
          },
          {
            id: 75,
            title: 'Walk-Forward Optimization',
            path: '/tradingAcademy/backtesting/walkforwardOptimization',
          },
          {
            id: 76,
            title: 'Evaluating Backtests',
            path: '/tradingAcademy/backtesting/evaluatingBacktests',
          },
        ],
      },
      {
        id: '17',
        chapter: 'Chapter 17: Choosing a Broker',
        lessons: [
          {
            id: 77,
            title: 'Considerations',
            path: '/tradingAcademy/choosingABroker/considerations',
          },
          {
            id: 78,
            title: 'Broker Comparison',
            path: '/tradingAcademy/choosingABroker/brokerComparison',
          },
          {
            id: 79,
            title: 'Paper Trading Account',
            path: '/tradingAcademy/choosingABroker/paperTradingAccount',
          },
        ],
      },
      {
        id: '18',
        chapter: 'Chapter 18: Advanced Order Types',
        lessons: [
          {
            id: 80,
            title: 'Intro',
            path: '/tradingAcademy/advancedOrders/intro',
          },
          {
            id: 81,
            title: 'One Cancels the Other',
            path: '/tradingAcademy/advancedOrders/oneCancelsTheOther',
          },
          {
            id: 82,
            title: 'Bracket',
            path: '/tradingAcademy/advancedOrders/bracket',
          },
          {
            id: 83,
            title: 'Trailing Stop',
            path: '/tradingAcademy/advancedOrders/trailingStop',
          },
          {
            id: 84,
            title: 'Stop Limit',
            path: '/tradingAcademy/advancedOrders/stopLimit',
          },
        ],
      },
      {
        id: '19',
        chapter: 'Chapter 19: Advanced Strategies',
        lessons: [
          {
            id: 85,
            title: 'Intro',
            path: '/tradingAcademy/advancedStrategies/intro',
          },
          {
            id: 86,
            title: 'Scaling Into and Out of Trades',
            path: '/tradingAcademy/advancedStrategies/scalingIntoAndOutOfTrades',
          },
          {
            id: 87,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 88,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 89,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 90,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 91,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      {
        id: '20',
        chapter: 'Chapter 20: Review',
        lessons: [
          {
            id: 92,
            title: 'Review',
            path: '/tradingAcademy/review/review',
          },
        ],
      },
    ],
  },
  futuresWithQuantConnect: {
    title: 'Futures with QuantConnect',
    id: 5,
    isProCourse: true,
    shortDescription:
      'If you already have a decent grasp on the basics of trading then this course will be a good option for you. \n It focuses specifically on using QuantConnect, a premier algorithmic trading platform, with Futures.',
    longDescription:
      // eslint-disable-next-line quotes
      "Discover how to use Python to develop production-grade trading algorithms. Many hedge-funds and trading firms use QuantConnect's LEAN engine to manage their portfolios and data feeds. This is one of our more advanced courses. As a result, it is recommended that you have prior experience with algorithmic trading and programming. QuantConnect has developed a version of Python designed specifically for algorithmic trading. They have also created the LEAN engine. This is a portfolio management and backtesting framework that runs on the cloud. Attempting to develop QuantConnect's infrastructure on your own would take years. Programming algorithms in QuantConnect allows you to focus purely on your algorithm while QuantConnect handles everything else.",
    imagePath: '/images/website/quantConnect.webp',
    curriculum: [
      {
        id: '1',
        chapter: 'Chapter 1: Course Overview',
        lessons: [
          {
            id: 1,
            title: 'Syllabus',
            path: '/tradingAcademy/courseOverview/syllabus',
          },
          {
            id: 2,
            title: 'Goals',
            path: '/tradingAcademy/courseOverview/goals',
          },
          {
            id: 3,
            title: 'Timeline',
            path: '/tradingAcademy/courseOverview/timeline',
          },
          {
            id: 4,
            title: 'Resources',
            path: '/tradingAcademy/courseOverview/resources',
          },
        ],
      },
      {
        id: '2',
        chapter: 'Chapter 2: Preparing for Course',
        lessons: [
          {
            id: 5,
            title: 'Schedule',
            path: '/tradingAcademy/preparingForCourse/schedule',
          },
          {
            id: 6,
            title: 'Financial Preparation',
            path: '/tradingAcademy/preparingForCourse/financialPreparation',
          },
          {
            id: 7,
            title: 'Possible to Succeed?',
            path: '/tradingAcademy/preparingForCourse/possibleToSucceed',
          },
          {
            id: 8,
            title: 'Turtle Traders',
            path: '/tradingAcademy/preparingForCourse/turtleTraders',
          },
        ],
      },
      {
        id: '3',
        chapter: 'Chapter 3: Types of Markets',
        lessons: [
          {
            id: 9,
            title: 'Equities',
            path: '/tradingAcademy/typesOfMarkets/equities',
          },
          {
            id: 10,
            title: 'Forex',
            path: '/tradingAcademy/typesOfMarkets/forex',
          },
          {
            id: 11,
            title: 'Options',
            path: '/tradingAcademy/typesOfMarkets/options',
          },
          {
            id: 12,
            title: 'Futures',
            path: '/tradingAcademy/typesOfMarkets/futures',
          },
          {
            id: 13,
            title: 'Crypto',
            path: '/tradingAcademy/typesOfMarkets/crypto',
          },
          {
            id: 14,
            title: 'Comparison',
            path: '/tradingAcademy/typesOfMarkets/comparison',
          },
        ],
      },
      {
        id: '4',
        chapter: 'Chapter 4: Margin Trading',
        lessons: [
          {
            id: 15,
            title: 'Margin Trading',
            path: '/tradingAcademy/marginTrading/marginTrading',
          },
          {
            id: 16,
            title: 'Account Values',
            path: '/tradingAcademy/marginTrading/accountValues',
          },
          {
            id: 17,
            title: 'Margin Call',
            path: '/tradingAcademy/marginTrading/marginCall',
          },
          {
            id: 18,
            title: 'Preventing Margin Call',
            path: '/tradingAcademy/marginTrading/preventingMarginCall',
          },
        ],
      },
      {
        id: '5',
        chapter: 'Chapter 5: Trading Basics',
        lessons: [
          {
            id: 19,
            title: 'Reading Chart',
            path: '/tradingAcademy/tradingBasics/readingChart',
          },
          {
            id: 20,
            title: 'Timeframe Analysis',
            path: '/tradingAcademy/tradingBasics/timeframeAnalysis',
          },
          {
            id: 21,
            title: 'Types of Orders',
            path: '/tradingAcademy/tradingBasics/typesOfOrders',
          },
        ],
      },
      {
        id: '6',
        chapter: 'Chapter 6: TradingView',
        lessons: [
          {
            id: 22,
            title: 'Why TradingView?',
            path: '/tradingAcademy/tradingView/whyTradingView',
          },
          {
            id: 23,
            title: 'Set up TradingView',
            path: '/tradingAcademy/tradingView/setUpTradingView',
          },
          {
            id: 24,
            title: 'TradingView Features',
            path: '/tradingAcademy/tradingView/tradingViewFeatures',
          },
          {
            id: 25,
            title: 'TradingView Brokers',
            path: '/tradingAcademy/tradingView/tradingViewBrokers',
          },
        ],
      },
      {
        id: '7',
        chapter: 'Chapter 7: Technical Analysis',
        lessons: [
          {
            id: 26,
            title: 'What is Technical Analysis?',
            path: '/tradingAcademy/technicalAnalysis/whatIsTechnicalAnalysis',
          },
          {
            id: 27,
            title: 'Pros of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/prosOfTA',
          },
          {
            id: 28,
            title: 'Cons of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/consOfTA',
          },
          {
            id: 29,
            title: 'Key Levels',
            path: '/tradingAcademy/technicalAnalysis/keyLevels',
          },
          {
            id: 30,
            title: 'Trendlines',
            path: '/tradingAcademy/technicalAnalysis/trendlines',
          },
        ],
      },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [
          {
            id: 31,
            title: 'Indicators',
            path: '/tradingAcademy/indicators/indicators',
          },
          {
            id: 32,
            title: 'Moving Averages',
            path: '/tradingAcademy/indicators/movingAverages',
          },
          {
            id: 33,
            title: 'Bollinger Bands',
            path: '/tradingAcademy/indicators/bollingerBands',
          },
          {
            id: 34,
            title: 'MACD',
            path: '/tradingAcademy/indicators/macd',
          },
          {
            id: 35,
            title: 'RSI',
            path: '/tradingAcademy/indicators/rsi',
          },
          {
            id: 36,
            title: 'Other Indicators',
            path: '/tradingAcademy/indicators/otherIndicators',
          },
        ],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [
          {
            id: 37,
            title: 'Types of Candlesticks',
            path: '/tradingAcademy/indicators/typesOfCandlesticks',
          },
          {
            id: 38,
            title: 'Head and Shoulders',
            path: '/tradingAcademy/indicators/headAndShoulders',
          },
          {
            id: 39,
            title: 'Double Top and Bottom',
            path: '/tradingAcademy/indicators/doubleTopAndBottom',
          },
          {
            id: 40,
            title: 'Rounding Bottom',
            path: '/tradingAcademy/indicators/roundingBottom',
          },
          {
            id: 41,
            title: 'Cup and Handle',
            path: '/tradingAcademy/indicators/cupAndHandle',
          },
          {
            id: 42,
            title: 'Wedges',
            path: '/tradingAcademy/indicators/wedges',
          },
          {
            id: 43,
            title: 'CheatSheet',
            path: '/tradingAcademy/indicators/cheatSheet',
          },
        ],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [
          {
            id: 44,
            title: 'Trend Following',
            path: '/tradingAcademy/technicalAnalysisStrategies/trendFollowing',
          },
          {
            id: 45,
            title: 'Mean Reverting',
            path: '/tradingAcademy/technicalAnalysisStrategies/meanReverting',
          },
          {
            id: 46,
            title: 'Breakouts',
            path: '/tradingAcademy/technicalAnalysisStrategies/breakouts',
          },
          {
            id: 47,
            title: 'Review',
            path: '/tradingAcademy/technicalAnalysisStrategies/review',
          },
        ],
      },

      {
        id: '11',
        chapter: 'Chapter 11: Fundamental Analysis',
        lessons: [
          {
            id: 48,
            title: 'What is Fundamental Analysis?',
            path: '/tradingAcademy/fundamentalAnalysis/whatIsFundamentalAnalysis',
          },
          {
            id: 49,
            title: 'Different Market Fundamentals',
            path: '/tradingAcademy/fundamentalAnalysis/differentMarketFundamentals',
          },
          {
            id: 50,
            title: 'Staying Informed',
            path: '/tradingAcademy/fundamentalAnalysis/stayingInformed',
          },
        ],
      },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [
          {
            id: 51,
            title: 'COT Report',
            path: '/tradingAcademy/fundamentalAnalysisStrategies/cot',
          },
          {
            id: 52,
            title: 'News Trading',
            path: '/tradingAcademy/fundamentalAnalysis/newsTrading',
          },
        ],
      },
      {
        id: '13',
        chapter: 'Chapter 13: Alternative Data',
        lessons: [
          {
            id: 53,
            title: 'What is Alternative Data?',
            path: '/tradingAcademy/alternativeData/whatIsAlternativeData',
          },
          {
            id: 54,
            title: 'Pros and Cons Alternative Data',
            path: '/tradingAcademy/alternativeData/prosAndConsAlternativeData',
          },
          {
            id: 55,
            title: 'Alternative Data and Retail Investors',
            path: '/tradingAcademy/alternativeData/alternativeDataAndRetailInvestors',
          },
        ],
      },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [
          {
            id: 56,
            title: 'Why is Risk Management Important?',
            path: '/tradingAcademy/riskManagement/whyIsRiskManagementImportant',
          },
          {
            id: 57,
            title: 'The Slow Death',
            path: '/tradingAcademy/riskManagement/theSlowDeath',
          },
          {
            id: 58,
            title: 'Stock Position Sizing Formula',
            path: '/tradingAcademy/riskManagement/stocksPositionSizingFormula',
          },
          {
            id: 59,
            title: 'Forex Lot Sizing Formulas',
            path: '/tradingAcademy/riskManagement/forexLotSizingFormulas',
          },
          {
            id: 60,
            title: 'Martingale Method',
            path: '/tradingAcademy/riskManagement/martingaleMethod',
          },
          {
            id: 61,
            title: 'Kelly Criterion Method',
            path: '/tradingAcademy/riskManagement/kellyCriterionMethod',
          },
          {
            id: 62,
            title: 'Correlation',
            path: '/tradingAcademy/riskManagement/correlation',
          },
        ],
      },
      {
        id: '15',
        chapter: 'Chapter 15: Creating a Trading Plan',
        lessons: [
          {
            id: 63,
            title: 'Types of Traders',
            path: '/tradingAcademy/tradingPlan/typesOfTraders',
          },
          {
            id: 64,
            title: 'Choose a Strategy',
            path: '/tradingAcademy/tradingPlan/chooseStrategy',
          },
          {
            id: 65,
            title: 'Risk Management Strategy',
            path: '/tradingAcademy/tradingPlan/riskManagementStrategy',
          },
          {
            id: 66,
            title: 'Entry Rules',
            path: '/tradingAcademy/tradingPlan/entryRules',
          },
          {
            id: 67,
            title: 'Exit Rules',
            path: '/tradingAcademy/tradingPlan/exitRules',
          },
          {
            id: 68,
            title: 'Trading Journal',
            path: '/tradingAcademy/tradingPlan/tradingJournal',
          },
          {
            id: 69,
            title: 'Schedule',
            path: '/tradingAcademy/tradingPlan/schedule',
          },
        ],
      },
      {
        id: '16',
        chapter: 'Chapter 16: Backtesting',
        lessons: [
          {
            id: 70,
            title: 'Overview of Backtesting',
            path: '/tradingAcademy/backtesting/overviewOfBacktesting',
          },
          {
            id: 71,
            title: 'Importance of Backtesting',
            path: '/tradingAcademy/backtesting/importanceOfBacktesting',
          },
          {
            id: 72,
            title: 'Backtesting with TradingView',
            path: '/tradingAcademy/backtesting/backtestingWithTradingView',
          },
          {
            id: 73,
            title: 'Important Metrics',
            path: '/tradingAcademy/backtesting/importantMetrics',
          },
          {
            id: 74,
            title: 'Risks of Overfitting',
            path: '/tradingAcademy/backtesting/risksOfOverfitting',
          },
          {
            id: 75,
            title: 'Walk-Forward Optimization',
            path: '/tradingAcademy/backtesting/walkforwardOptimization',
          },
          {
            id: 76,
            title: 'Evaluating Backtests',
            path: '/tradingAcademy/backtesting/evaluatingBacktests',
          },
        ],
      },
      {
        id: '17',
        chapter: 'Chapter 17: Choosing a Broker',
        lessons: [
          {
            id: 77,
            title: 'Considerations',
            path: '/tradingAcademy/choosingABroker/considerations',
          },
          {
            id: 78,
            title: 'Broker Comparison',
            path: '/tradingAcademy/choosingABroker/brokerComparison',
          },
          {
            id: 79,
            title: 'Paper Trading Account',
            path: '/tradingAcademy/choosingABroker/paperTradingAccount',
          },
        ],
      },
      {
        id: '18',
        chapter: 'Chapter 18: Advanced Order Types',
        lessons: [
          {
            id: 80,
            title: 'Intro',
            path: '/tradingAcademy/advancedOrders/intro',
          },
          {
            id: 81,
            title: 'One Cancels the Other',
            path: '/tradingAcademy/advancedOrders/oneCancelsTheOther',
          },
          {
            id: 82,
            title: 'Bracket',
            path: '/tradingAcademy/advancedOrders/bracket',
          },
          {
            id: 83,
            title: 'Trailing Stop',
            path: '/tradingAcademy/advancedOrders/trailingStop',
          },
          {
            id: 84,
            title: 'Stop Limit',
            path: '/tradingAcademy/advancedOrders/stopLimit',
          },
        ],
      },
      {
        id: '19',
        chapter: 'Chapter 19: Advanced Strategies',
        lessons: [
          {
            id: 85,
            title: 'Intro',
            path: '/tradingAcademy/advancedStrategies/intro',
          },
          {
            id: 86,
            title: 'Scaling Into and Out of Trades',
            path: '/tradingAcademy/advancedStrategies/scalingIntoAndOutOfTrades',
          },
          {
            id: 87,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 88,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 89,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 90,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 91,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      {
        id: '20',
        chapter: 'Chapter 20: Review',
        lessons: [
          {
            id: 92,
            title: 'Review',
            path: '/tradingAcademy/review/review',
          },
        ],
      },
    ],
  },
  marketResearchWithPython: {
    title: 'Market Research with Python',
    id: 6,
    isProCourse: true,
    shortDescription:
      'The majority of traders do not spend enough time analyzing market data in-depth. \n Python with Jupyter notebooks is the best option for analyzing data and market trends.',
    longDescription:
      // eslint-disable-next-line quotes
      'A very common issue with even advanced traders is that they get a theory, develop a trading algorithm to test the theory,repeatedly backtest and optimize the strategy, and finally decide that the strategy is not profitable. While it is good they discovered this before live trading, there was a lot of time and energy wasted developing a full-blown strategy. A more efficient approach would be using Python and Jupyter Notebooks. Jupyter Notebooks allows quick and intuitive data analysis. This allows traders to gain a rough estimate of the profitability of their strategy. If it is clearly an unprofitable strategy you have saved yourself significant time and effort. If it looks like it may be profitable you can now move to developing a full trading algorithm to backtest. Many traders could seriously benefit from spending more time analyzing the market data rather than developing more trading algorithms. Jupyter Notebooks is one of the best applications for this type of data analysis.',
    imagePath: '/images/website/jupyterNotebook.webp',
    curriculum: [
      {
        id: '1',
        chapter: 'Chapter 1: Course Overview',
        lessons: [
          {
            id: 1,
            title: 'Syllabus',
            path: '/tradingAcademy/courseOverview/syllabus',
          },
          {
            id: 2,
            title: 'Goals',
            path: '/tradingAcademy/courseOverview/goals',
          },
          {
            id: 3,
            title: 'Timeline',
            path: '/tradingAcademy/courseOverview/timeline',
          },
          {
            id: 4,
            title: 'Resources',
            path: '/tradingAcademy/courseOverview/resources',
          },
        ],
      },
      {
        id: '2',
        chapter: 'Chapter 2: Preparing for Course',
        lessons: [
          {
            id: 5,
            title: 'Schedule',
            path: '/tradingAcademy/preparingForCourse/schedule',
          },
          {
            id: 6,
            title: 'Financial Preparation',
            path: '/tradingAcademy/preparingForCourse/financialPreparation',
          },
          {
            id: 7,
            title: 'Possible to Succeed?',
            path: '/tradingAcademy/preparingForCourse/possibleToSucceed',
          },
          {
            id: 8,
            title: 'Turtle Traders',
            path: '/tradingAcademy/preparingForCourse/turtleTraders',
          },
        ],
      },
      {
        id: '3',
        chapter: 'Chapter 3: Types of Markets',
        lessons: [
          {
            id: 9,
            title: 'Equities',
            path: '/tradingAcademy/typesOfMarkets/equities',
          },
          {
            id: 10,
            title: 'Forex',
            path: '/tradingAcademy/typesOfMarkets/forex',
          },
          {
            id: 11,
            title: 'Options',
            path: '/tradingAcademy/typesOfMarkets/options',
          },
          {
            id: 12,
            title: 'Futures',
            path: '/tradingAcademy/typesOfMarkets/futures',
          },
          {
            id: 13,
            title: 'Crypto',
            path: '/tradingAcademy/typesOfMarkets/crypto',
          },
          {
            id: 14,
            title: 'Comparison',
            path: '/tradingAcademy/typesOfMarkets/comparison',
          },
        ],
      },
      {
        id: '4',
        chapter: 'Chapter 4: Margin Trading',
        lessons: [
          {
            id: 15,
            title: 'Margin Trading',
            path: '/tradingAcademy/marginTrading/marginTrading',
          },
          {
            id: 16,
            title: 'Account Values',
            path: '/tradingAcademy/marginTrading/accountValues',
          },
          {
            id: 17,
            title: 'Margin Call',
            path: '/tradingAcademy/marginTrading/marginCall',
          },
          {
            id: 18,
            title: 'Preventing Margin Call',
            path: '/tradingAcademy/marginTrading/preventingMarginCall',
          },
        ],
      },
      {
        id: '5',
        chapter: 'Chapter 5: Trading Basics',
        lessons: [
          {
            id: 19,
            title: 'Reading Chart',
            path: '/tradingAcademy/tradingBasics/readingChart',
          },
          {
            id: 20,
            title: 'Timeframe Analysis',
            path: '/tradingAcademy/tradingBasics/timeframeAnalysis',
          },
          {
            id: 21,
            title: 'Types of Orders',
            path: '/tradingAcademy/tradingBasics/typesOfOrders',
          },
        ],
      },
      {
        id: '6',
        chapter: 'Chapter 6: TradingView',
        lessons: [
          {
            id: 22,
            title: 'Why TradingView?',
            path: '/tradingAcademy/tradingView/whyTradingView',
          },
          {
            id: 23,
            title: 'Set up TradingView',
            path: '/tradingAcademy/tradingView/setUpTradingView',
          },
          {
            id: 24,
            title: 'TradingView Features',
            path: '/tradingAcademy/tradingView/tradingViewFeatures',
          },
          {
            id: 25,
            title: 'TradingView Brokers',
            path: '/tradingAcademy/tradingView/tradingViewBrokers',
          },
        ],
      },
      {
        id: '7',
        chapter: 'Chapter 7: Technical Analysis',
        lessons: [
          {
            id: 26,
            title: 'What is Technical Analysis?',
            path: '/tradingAcademy/technicalAnalysis/whatIsTechnicalAnalysis',
          },
          {
            id: 27,
            title: 'Pros of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/prosOfTA',
          },
          {
            id: 28,
            title: 'Cons of Technical Analysis',
            path: '/tradingAcademy/technicalAnalysis/consOfTA',
          },
          {
            id: 29,
            title: 'Key Levels',
            path: '/tradingAcademy/technicalAnalysis/keyLevels',
          },
          {
            id: 30,
            title: 'Trendlines',
            path: '/tradingAcademy/technicalAnalysis/trendlines',
          },
        ],
      },
      {
        id: '8',
        chapter: 'Chapter 8: Technical Analysis - Indicators',
        lessons: [
          {
            id: 31,
            title: 'Indicators',
            path: '/tradingAcademy/indicators/indicators',
          },
          {
            id: 32,
            title: 'Moving Averages',
            path: '/tradingAcademy/indicators/movingAverages',
          },
          {
            id: 33,
            title: 'Bollinger Bands',
            path: '/tradingAcademy/indicators/bollingerBands',
          },
          {
            id: 34,
            title: 'MACD',
            path: '/tradingAcademy/indicators/macd',
          },
          {
            id: 35,
            title: 'RSI',
            path: '/tradingAcademy/indicators/rsi',
          },
          {
            id: 36,
            title: 'Other Indicators',
            path: '/tradingAcademy/indicators/otherIndicators',
          },
        ],
      },
      {
        id: '9',
        chapter: 'Chapter 9: Technical Analysis - Chart Patterns',
        lessons: [
          {
            id: 37,
            title: 'Types of Candlesticks',
            path: '/tradingAcademy/indicators/typesOfCandlesticks',
          },
          {
            id: 38,
            title: 'Head and Shoulders',
            path: '/tradingAcademy/indicators/headAndShoulders',
          },
          {
            id: 39,
            title: 'Double Top and Bottom',
            path: '/tradingAcademy/indicators/doubleTopAndBottom',
          },
          {
            id: 40,
            title: 'Rounding Bottom',
            path: '/tradingAcademy/indicators/roundingBottom',
          },
          {
            id: 41,
            title: 'Cup and Handle',
            path: '/tradingAcademy/indicators/cupAndHandle',
          },
          {
            id: 42,
            title: 'Wedges',
            path: '/tradingAcademy/indicators/wedges',
          },
          {
            id: 43,
            title: 'CheatSheet',
            path: '/tradingAcademy/indicators/cheatSheet',
          },
        ],
      },
      {
        id: '10',
        chapter: 'Chapter 10: Common Technical Analysis Strategies',
        lessons: [
          {
            id: 44,
            title: 'Trend Following',
            path: '/tradingAcademy/technicalAnalysisStrategies/trendFollowing',
          },
          {
            id: 45,
            title: 'Mean Reverting',
            path: '/tradingAcademy/technicalAnalysisStrategies/meanReverting',
          },
          {
            id: 46,
            title: 'Breakouts',
            path: '/tradingAcademy/technicalAnalysisStrategies/breakouts',
          },
          {
            id: 47,
            title: 'Review',
            path: '/tradingAcademy/technicalAnalysisStrategies/review',
          },
        ],
      },

      {
        id: '11',
        chapter: 'Chapter 11: Fundamental Analysis',
        lessons: [
          {
            id: 48,
            title: 'What is Fundamental Analysis?',
            path: '/tradingAcademy/fundamentalAnalysis/whatIsFundamentalAnalysis',
          },
          {
            id: 49,
            title: 'Different Market Fundamentals',
            path: '/tradingAcademy/fundamentalAnalysis/differentMarketFundamentals',
          },
          {
            id: 50,
            title: 'Staying Informed',
            path: '/tradingAcademy/fundamentalAnalysis/stayingInformed',
          },
        ],
      },
      {
        id: '12',
        chapter: 'Chapter 12: Common Fundamental Analysis Strategies',
        lessons: [
          {
            id: 51,
            title: 'COT Report',
            path: '/tradingAcademy/fundamentalAnalysisStrategies/cot',
          },
          {
            id: 52,
            title: 'News Trading',
            path: '/tradingAcademy/fundamentalAnalysis/newsTrading',
          },
        ],
      },
      {
        id: '13',
        chapter: 'Chapter 13: Alternative Data',
        lessons: [
          {
            id: 53,
            title: 'What is Alternative Data?',
            path: '/tradingAcademy/alternativeData/whatIsAlternativeData',
          },
          {
            id: 54,
            title: 'Pros and Cons Alternative Data',
            path: '/tradingAcademy/alternativeData/prosAndConsAlternativeData',
          },
          {
            id: 55,
            title: 'Alternative Data and Retail Investors',
            path: '/tradingAcademy/alternativeData/alternativeDataAndRetailInvestors',
          },
        ],
      },
      {
        id: '14',
        chapter: 'Chapter 14: Risk Management and Position Sizing',
        lessons: [
          {
            id: 56,
            title: 'Why is Risk Management Important?',
            path: '/tradingAcademy/riskManagement/whyIsRiskManagementImportant',
          },
          {
            id: 57,
            title: 'The Slow Death',
            path: '/tradingAcademy/riskManagement/theSlowDeath',
          },
          {
            id: 58,
            title: 'Stock Position Sizing Formula',
            path: '/tradingAcademy/riskManagement/stocksPositionSizingFormula',
          },
          {
            id: 59,
            title: 'Forex Lot Sizing Formulas',
            path: '/tradingAcademy/riskManagement/forexLotSizingFormulas',
          },
          {
            id: 60,
            title: 'Martingale Method',
            path: '/tradingAcademy/riskManagement/martingaleMethod',
          },
          {
            id: 61,
            title: 'Kelly Criterion Method',
            path: '/tradingAcademy/riskManagement/kellyCriterionMethod',
          },
          {
            id: 62,
            title: 'Correlation',
            path: '/tradingAcademy/riskManagement/correlation',
          },
        ],
      },
      {
        id: '15',
        chapter: 'Chapter 15: Creating a Trading Plan',
        lessons: [
          {
            id: 63,
            title: 'Types of Traders',
            path: '/tradingAcademy/tradingPlan/typesOfTraders',
          },
          {
            id: 64,
            title: 'Choose a Strategy',
            path: '/tradingAcademy/tradingPlan/chooseStrategy',
          },
          {
            id: 65,
            title: 'Risk Management Strategy',
            path: '/tradingAcademy/tradingPlan/riskManagementStrategy',
          },
          {
            id: 66,
            title: 'Entry Rules',
            path: '/tradingAcademy/tradingPlan/entryRules',
          },
          {
            id: 67,
            title: 'Exit Rules',
            path: '/tradingAcademy/tradingPlan/exitRules',
          },
          {
            id: 68,
            title: 'Trading Journal',
            path: '/tradingAcademy/tradingPlan/tradingJournal',
          },
          {
            id: 69,
            title: 'Schedule',
            path: '/tradingAcademy/tradingPlan/schedule',
          },
        ],
      },
      {
        id: '16',
        chapter: 'Chapter 16: Backtesting',
        lessons: [
          {
            id: 70,
            title: 'Overview of Backtesting',
            path: '/tradingAcademy/backtesting/overviewOfBacktesting',
          },
          {
            id: 71,
            title: 'Importance of Backtesting',
            path: '/tradingAcademy/backtesting/importanceOfBacktesting',
          },
          {
            id: 72,
            title: 'Backtesting with TradingView',
            path: '/tradingAcademy/backtesting/backtestingWithTradingView',
          },
          {
            id: 73,
            title: 'Important Metrics',
            path: '/tradingAcademy/backtesting/importantMetrics',
          },
          {
            id: 74,
            title: 'Risks of Overfitting',
            path: '/tradingAcademy/backtesting/risksOfOverfitting',
          },
          {
            id: 75,
            title: 'Walk-Forward Optimization',
            path: '/tradingAcademy/backtesting/walkforwardOptimization',
          },
          {
            id: 76,
            title: 'Evaluating Backtests',
            path: '/tradingAcademy/backtesting/evaluatingBacktests',
          },
        ],
      },
      {
        id: '17',
        chapter: 'Chapter 17: Choosing a Broker',
        lessons: [
          {
            id: 77,
            title: 'Considerations',
            path: '/tradingAcademy/choosingABroker/considerations',
          },
          {
            id: 78,
            title: 'Broker Comparison',
            path: '/tradingAcademy/choosingABroker/brokerComparison',
          },
          {
            id: 79,
            title: 'Paper Trading Account',
            path: '/tradingAcademy/choosingABroker/paperTradingAccount',
          },
        ],
      },
      {
        id: '18',
        chapter: 'Chapter 18: Advanced Order Types',
        lessons: [
          {
            id: 80,
            title: 'Intro',
            path: '/tradingAcademy/advancedOrders/intro',
          },
          {
            id: 81,
            title: 'One Cancels the Other',
            path: '/tradingAcademy/advancedOrders/oneCancelsTheOther',
          },
          {
            id: 82,
            title: 'Bracket',
            path: '/tradingAcademy/advancedOrders/bracket',
          },
          {
            id: 83,
            title: 'Trailing Stop',
            path: '/tradingAcademy/advancedOrders/trailingStop',
          },
          {
            id: 84,
            title: 'Stop Limit',
            path: '/tradingAcademy/advancedOrders/stopLimit',
          },
        ],
      },
      {
        id: '19',
        chapter: 'Chapter 19: Advanced Strategies',
        lessons: [
          {
            id: 85,
            title: 'Intro',
            path: '/tradingAcademy/advancedStrategies/intro',
          },
          {
            id: 86,
            title: 'Scaling Into and Out of Trades',
            path: '/tradingAcademy/advancedStrategies/scalingIntoAndOutOfTrades',
          },
          {
            id: 87,
            title: 'Divergence Trading',
            path: '/tradingAcademy/advancedStrategies/divergenceTrading',
          },
          {
            id: 88,
            title: 'Multiple Timeframes',
            path: '/tradingAcademy/advancedStrategies/multipleTimeframes',
          },
          {
            id: 89,
            title: 'Average True Range',
            path: '/tradingAcademy/advancedStrategies/atr',
          },
          {
            id: 90,
            title: 'Leading Assets',
            path: '/tradingAcademy/advancedStrategies/leadingAssets',
          },
          {
            id: 91,
            title: 'Cointegration',
            path: '/tradingAcademy/advancedStrategies/cointegration',
          },
        ],
      },
      {
        id: '20',
        chapter: 'Chapter 20: Review',
        lessons: [
          {
            id: 92,
            title: 'Review',
            path: '/tradingAcademy/review/review',
          },
        ],
      },
    ],
  },
};

export default coursesData;
