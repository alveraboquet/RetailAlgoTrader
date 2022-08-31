/**
 *
 * @param courseID - id of course to retrieve percent complete
 * @param coursesPercentComplete - array of objects with percent complete for each course
 * @returns - percent complete if successful or 0 if unsuccessful
 */
export const getPercentComplete = (
  courseID: number,
  coursesPercentComplete: { courseID: number; percentComplete: number }[]
) => {
  const coursePercentComplete = coursesPercentComplete.find(
    (course) => course.courseID === courseID
  );
  if (coursePercentComplete)
    return Math.round(coursePercentComplete.percentComplete);
  else return 0;
};

/**
 *
 * @param courseID - id of course to retrieve enrollment status
 * @param enrolledCourses - array of objects with all course enrollment and progress status
 * @returns - true if enrolled and false if not enrolled
 */
export const getCourseEnrolled = (
  courseID: number,
  enrolledCourses: {
    course_id: number;
    enrolled: boolean;
    current_chapter: number;
    current_lesson: number;
  }[]
) => {
  const courseEnrolled = enrolledCourses.find(
    (course) => course.course_id === courseID
  );
  if (courseEnrolled) return courseEnrolled.enrolled;
  else return false;
};

/**
 *
 * @param courseID - id of course to retrieve enrollment status
 * @param enrolledCourses - array of objects with all course enrollment and progress status
 * @returns - object with course info if course exists or blank/null course info if course does not exist
 */
export const getCourseObject = (
  courseID: number,
  enrolledCourses: {
    course_id: number;
    enrolled: boolean;
    current_chapter: number;
    current_lesson: number;
  }[]
) => {
  const courseObject = enrolledCourses.find(
    (course) => course.course_id === courseID
  );
  if (courseObject) return courseObject;
  else
    return {
      course_id: 0,
      enrolled: false,
      current_chapter: 0,
      current_lesson: 0,
    };
};

/**
 *
 * @returns - user's enrolled courses
 */
export const fetchEnrolledCourses = async () => {
  try {
    const res = await fetch('/api/app/courses/enrolledCourses', {
      headers: {
        'X-Custom-Header': 'lollipop',
      },
    });
    if (res.status !== 200) {
      throw new Error();
    }
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @returns - user's completed chapters for a course
 */
export const fetchCompletedLessonsByCourse = async () => {
  try {
    const res = await fetch('/api/app/lessons/getCompletedLessonsByCourse', {
      headers: {
        'X-Custom-Header': 'lollipop',
      },
    });
    if (res.status !== 200) {
      throw new Error();
    }
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

/**
 *
 * @param completedLessons - array of all lessons with completion status from fetchCompletedLessons
 * @returns - array of courses with percent complete for each course
 */
export const percentCompleteByCourse = (
  completedLessons: {
    user_id: string;
    lesson_id: number;
    completed: boolean;
    chapter_id: number;
    course_id: number;
  }[]
) => {
  const coursesPercentComplete = [];
  // fetchCompletedLessons returns array of objects ordered by descending course_id
  // Max course_id will be in first object
  const numCourses = completedLessons[0].course_id;
  for (let i = 1; i <= numCourses; i++) {
    const totalChaptersByCourse = completedLessons
      .filter((chapter) => chapter.course_id === i)
      .map((chapter) => chapter.chapter_id);
    const completedChaptersByCourse = completedLessons
      .filter((chapter) => chapter.course_id === i)
      .filter((chapter) => chapter.completed)
      .map((chapter) => chapter.chapter_id);
    const coursePercentComplete =
      (completedChaptersByCourse.length / totalChaptersByCourse.length) * 100;
    coursesPercentComplete.push({
      courseID: i,
      percentComplete: coursePercentComplete ? coursePercentComplete : 0,
    });
  }
  return coursesPercentComplete;
};
