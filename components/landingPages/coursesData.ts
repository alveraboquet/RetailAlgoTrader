/**
 * Contains data to be used for the quiz landing pages
 * This data is fed into the quizLandingPage component
 */

interface CourseData {
  title: string;
  shortDescription: string;
  longDescription: string;
  imagePath: string;
  curriculum: object;
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
    imagePath: '/images/bullTrader.webp',
    curriculum: {
      chapter1: 'chapter1',
      chapter2: 'chapter2',
    },
  },
  equitiesAndCryptoWithTradingview: {
    title: 'Equities and Crypto with TradingView',
    shortDescription:
      'If you have some experience with trading but want to advance your skills try this resourse. This covers basic algorithmic trading with Pinescript on Tradingview.',
    longDescription: 'long',
    imagePath: '/images/bullTrader.webp',
    curriculum: {
      chapter1: 'chapter1',
      chapter2: 'chapter2',
    },
  },
  forexTradingWithMT4: {
    title: 'Forex Trading with MT4',
    shortDescription:
      'If you do not have much trading capital or you cannot trade during the day this is the course for you. This course focuses on Forex which trades 24/7 and MT4 which is a free, easy-to-learn platform for writing trading algorithms.',
    longDescription: 'long',
    imagePath: '/images/bullTrader.webp',
    curriculum: {
      chapter1: 'chapter1',
      chapter2: 'chapter2',
    },
  },
  futuresWithQuantconnect: {
    title: 'Futures with QuantConnect',
    shortDescription:
      'If you already have a decent grasp on the basics of trading then this course will be a good option for you. It focuses specifically on using QuantConnect, a premier algorithmic trading platform, with Futures. Futures provide margin which make them ideal options for maximizing profit if traded correctly.',
    longDescription: 'long',
    imagePath: '/images/bullTrader.webp',
    curriculum: {
      chapter1: 'chapter1',
      chapter2: 'chapter2',
    },
  },
  marketResearchWithPython: {
    title: 'Market Research with Python',
    shortDescription:
      'The majority of traders focus on making many small trades. However, it is just as profitable, if not more profitable, to make less frequent, thorougly researched trades. Python with Jupyter notebooks and QuantConnect is the best option for analyzing data and market trends.',
    longDescription: 'long',
    imagePath: '/images/bullTrader.webp',
    curriculum: {
      chapter1: 'chapter1',
      chapter2: 'chapter2',
    },
  },
  tradingAcademy: {
    title: 'Trading Academy',
    shortDescription:
      'If you have no or little experience with trading start here. This course covers the basics such as indicators, risk management, types of orders, etc. This resource will build a strong foundation for you trading career.',
    longDescription:
      'If you are new to trading this is the course for you. This covers all the necessary knowledge and skills to be a profitable trader. This resource focuses purely on proper trading. Topics such as proper risk management, back-testing, technical strategies, margin management, etc will be discussed in-depth with many examples. It does not spend time on algorithmic trading. Once you have mastered the techniques in this course you will be able to automate and improve upon them with algorithmic tools.',
    imagePath: '/images/bullTrader.webp',
    curriculum: {
      chapter1: 'chapter1',
      chapter2: 'chapter2',
    },
  },
};

export default coursesData;
