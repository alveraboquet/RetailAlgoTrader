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
