const initialLessonData = [
  {
    id: 1,
    name: 'syllabus',
    chapter_id: 1,
  },
  {
    id: 2,
    name: 'goals',
    chapter_id: 1,
  },
  {
    id: 3,
    name: 'timeline',
    chapter_id: 1,
  },
  {
    id: 4,
    name: 'resources',
    chapter_id: 1,
  },
  {
    id: 5,
    name: 'schedule',
    chapter_id: 2,
  },
  {
    id: 6,
    name: 'financialPreparation',
    chapter_id: 2,
  },
  {
    id: 7,
    name: 'possibleToSucceed',
    chapter_id: 2,
  },
  {
    id: 8,
    name: 'turtleTraders',
    chapter_id: 2,
  },
  {
    id: 9,
    name: 'equities',
    chapter_id: 3,
  },
  {
    id: 10,
    name: 'forex',
    chapter_id: 3,
  },
  {
    id: 11,
    name: 'options',
    chapter_id: 3,
  },
  {
    id: 12,
    name: 'futures',
    chapter_id: 3,
  },
  {
    id: 13,
    name: 'crypto',
    chapter_id: 3,
  },
  {
    id: 14,
    name: 'comparison',
    chapter_id: 3,
  },
  {
    id: 15,
    name: 'marginTrading',
    chapter_id: 4,
  },
  {
    id: 16,
    name: 'accountValues',
    chapter_id: 4,
  },
  {
    id: 17,
    name: 'marginCall',
    chapter_id: 4,
  },
  {
    id: 18,
    name: 'preventingMarginCall',
    chapter_id: 4,
  },
  {
    id: 19,
    name: 'readingChart',
    chapter_id: 5,
  },
  {
    id: 20,
    name: 'timeframeAnalysis',
    chapter_id: 5,
  },
  {
    id: 21,
    name: 'typesOfOrders',
    chapter_id: 5,
  },
  {
    id: 22,
    name: 'whyTradingView',
    chapter_id: 6,
  },
  {
    id: 23,
    name: 'setUpTradingView',
    chapter_id: 6,
  },
  {
    id: 24,
    name: 'tradingViewFeatures',
    chapter_id: 6,
  },
  {
    id: 25,
    name: 'tradingViewBrokers',
    chapter_id: 6,
  },
  {
    id: 26,
    name: 'whatIsTechnicalAnalysis',
    chapter_id: 7,
  },
  {
    id: 27,
    name: 'prosOfTA',
    chapter_id: 7,
  },
  {
    id: 28,
    name: 'consOfTA',
    chapter_id: 7,
  },
  {
    id: 29,
    name: 'keyLevels',
    chapter_id: 7,
  },
  {
    id: 30,
    name: 'trendlines',
    chapter_id: 7,
  },
  {
    id: 31,
    name: 'indicators',
    chapter_id: 8,
  },
  {
    id: 32,
    name: 'movingAverages',
    chapter_id: 8,
  },
  {
    id: 33,
    name: 'bollingerBands',
    chapter_id: 8,
  },
  {
    id: 34,
    name: 'macd',
    chapter_id: 8,
  },
  {
    id: 35,
    name: 'rsi',
    chapter_id: 8,
  },
  {
    id: 36,
    name: 'otherIndicators',
    chapter_id: 8,
  },
  {
    id: 37,
    name: 'typesOfCandlesticks',
    chapter_id: 9,
  },
  {
    id: 38,
    name: 'headAndShoulders',
    chapter_id: 9,
  },
  {
    id: 39,
    name: 'doubleTopAndBottom',
    chapter_id: 9,
  },
  {
    id: 40,
    name: 'roundingBottom',
    chapter_id: 9,
  },
  {
    id: 41,
    name: 'cupAndHandle',
    chapter_id: 9,
  },
  {
    id: 42,
    name: 'wedges',
    chapter_id: 9,
  },
  {
    id: 43,
    name: 'cheatSheet',
    chapter_id: 9,
  },
  {
    id: 44,
    name: 'trendFollowing',
    chapter_id: 10,
  },
  {
    id: 45,
    name: 'meanReverting',
    chapter_id: 10,
  },
  {
    id: 46,
    name: 'breakouts',
    chapter_id: 10,
  },
  {
    id: 47,
    name: 'review',
    chapter_id: 10,
  },
  {
    id: 48,
    name: 'whatIsFundamentalAnalysis',
    chapter_id: 11,
  },
  {
    id: 49,
    name: 'differentMarketFundamentals',
    chapter_id: 11,
  },
  {
    id: 50,
    name: 'stayingInformed',
    chapter_id: 11,
  },
  {
    id: 51,
    name: 'cot',
    chapter_id: 12,
  },
  {
    id: 52,
    name: 'newsTrading',
    chapter_id: 12,
  },
  {
    id: 53,
    name: 'whatIsAlternativeData',
    chapter_id: 13,
  },
  {
    id: 54,
    name: 'prosAndConsAlternativeData',
    chapter_id: 13,
  },
  {
    id: 55,
    name: 'alternativeDataAndRetailInvestors',
    chapter_id: 13,
  },
  {
    id: 56,
    name: 'whyIsRiskManagementImportant',
    chapter_id: 14,
  },
  {
    id: 57,
    name: 'theSlowDeath',
    chapter_id: 14,
  },
  {
    id: 58,
    name: 'stocksPositionSizingFormula',
    chapter_id: 14,
  },
  {
    id: 59,
    name: 'forexLotSizingFormulas',
    chapter_id: 14,
  },
  {
    id: 60,
    name: 'martingaleMethod',
    chapter_id: 14,
  },
  {
    id: 61,
    name: 'kellyCriterionMethod',
    chapter_id: 14,
  },
  {
    id: 62,
    name: 'correlation',
    chapter_id: 14,
  },
  {
    id: 63,
    name: 'typesOfTraders',
    chapter_id: 15,
  },
  {
    id: 64,
    name: 'chooseStrategy',
    chapter_id: 15,
  },
  {
    id: 65,
    name: 'riskManagementStrategy',
    chapter_id: 15,
  },
  {
    id: 66,
    name: 'entryRules',
    chapter_id: 15,
  },
  {
    id: 67,
    name: 'exitRules',
    chapter_id: 15,
  },
  {
    id: 68,
    name: 'tradingJournal',
    chapter_id: 15,
  },
  {
    id: 69,
    name: 'schedule',
    chapter_id: 15,
  },
  {
    id: 70,
    name: 'overviewOfBacktesting',
    chapter_id: 16,
  },
  {
    id: 71,
    name: 'importanceOfBacktesting',
    chapter_id: 16,
  },
  {
    id: 72,
    name: 'backtestingWithTradingView',
    chapter_id: 16,
  },
  {
    id: 73,
    name: 'importantMetrics',
    chapter_id: 16,
  },
  {
    id: 74,
    name: 'risksOfOverfitting',
    chapter_id: 16,
  },
  {
    id: 75,
    name: 'walkforwardOptimization',
    chapter_id: 16,
  },
  {
    id: 76,
    name: 'evaluatingBacktests',
    chapter_id: 16,
  },
  {
    id: 77,
    name: 'considerations',
    chapter_id: 17,
  },
  {
    id: 78,
    name: 'brokerComparison',
    chapter_id: 17,
  },
  {
    id: 79,
    name: 'paperTradingAccount',
    chapter_id: 17,
  },
  {
    id: 80,
    name: 'intro',
    chapter_id: 18,
  },
  {
    id: 81,
    name: 'oneCancelsTheOther',
    chapter_id: 18,
  },
  {
    id: 82,
    name: 'bracket',
    chapter_id: 18,
  },
  {
    id: 83,
    name: 'trailingStop',
    chapter_id: 18,
  },
  {
    id: 84,
    name: 'stopLimit',
    chapter_id: 18,
  },
  {
    id: 85,
    name: 'intro',
    chapter_id: 19,
  },
  {
    id: 86,
    name: 'scalingIntoAndOutOfTrades',
    chapter_id: 19,
  },
  {
    id: 87,
    name: 'divergenceTrading',
    chapter_id: 19,
  },
  {
    id: 88,
    name: 'multipleTimeframes',
    chapter_id: 19,
  },
  {
    id: 89,
    name: 'atr',
    chapter_id: 19,
  },
  {
    id: 90,
    name: 'leadingAssets',
    chapter_id: 19,
  },
  {
    id: 91,
    name: 'cointegration',
    chapter_id: 19,
  },
  {
    id: 92,
    name: 'review',
    chapter_id: 20,
  },
];

export default initialLessonData;
