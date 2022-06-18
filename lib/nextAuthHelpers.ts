import coursesData from '../components/landingPages/coursesData';

export const populateUserCourse = (userId: string) => {
  return [
    {
      user_id: userId,
      course_id: coursesData.tradingAcademy.id,
      enrolled: false,
      completed: false,
      current_chapter: 'courseOverview',
      current_lesson: 'syllabus',
    },
    {
      user_id: userId,
      course_id: coursesData.algorithmicTradingAcademy.id,
      enrolled: false,
      completed: false,
      current_chapter: 'courseOverview',
      current_lesson: 'syllabus',
    },
    {
      user_id: userId,
      course_id: coursesData.equitiesAndCryptoWithTradingview.id,
      enrolled: false,
      completed: false,
      current_chapter: 'courseOverview',
      current_lesson: 'syllabus',
    },
    {
      user_id: userId,
      course_id: coursesData.forexTradingWithMT4.id,
      enrolled: false,
      completed: false,
      current_chapter: 'courseOverview',
      current_lesson: 'syllabus',
    },
    {
      user_id: userId,
      course_id: coursesData.futuresWithQuantconnect.id,
      enrolled: false,
      completed: false,
      current_chapter: 'courseOverview',
      current_lesson: 'syllabus',
    },
    {
      user_id: userId,
      course_id: coursesData.marketResearchWithPython.id,
      enrolled: false,
      completed: false,
      current_chapter: 'courseOverview',
      current_lesson: 'syllabus',
    },
  ];
};

export const populateUserLesson = (userId: string) => {
  return [
    {
      user_id: userId,
      lesson_id: 1,
      completed: false,
    },
    {
      user_id: userId,
      lesson_id: 2,
      completed: false,
    },
    {
      user_id: userId,
      lesson_id: 3,
      completed: false,
    },
    {
      user_id: userId,
      lesson_id: 4,
      completed: false,
    },
    {
      user_id: userId,
      lesson_id: 5,
      completed: false,
    },
    {
      user_id: userId,
      lesson_id: 6,
      completed: false,
    },
    {
      user_id: userId,
      lesson_id: 7,
      completed: false,
    },
  ];
};
