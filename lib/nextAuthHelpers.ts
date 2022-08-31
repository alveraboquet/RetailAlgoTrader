import initialLessonData from '../prisma/initialData/initialLessonData';
import initialCourseData from '../prisma/initialData/initialCourseData';

export const populateUserCourse = (userId: string) => {
  const userCourseArray = [];
  for (const course of initialCourseData) {
    const userCourse = {
      user_id: userId,
      course_id: course.id,
      enrolled: false,
      completed: false,
      current_chapter: 'courseOverview',
      current_lesson: 'syllabus',
    };
    userCourseArray.push(userCourse);
  }
  return userCourseArray;
};

export const populateUserLesson = (userId: string) => {
  const userLessonArray = [];
  for (const lesson of initialLessonData) {
    const userLesson = {
      user_id: userId,
      lesson_id: lesson.id,
      completed: false,
    };
    userLessonArray.push(userLesson);
  }
  return userLessonArray;
};
