export const getPercentComplete = (
  courseID: number,
  coursesPercentComplete: { courseID: number; percentComplete: number }[]
) => {
  const coursePercentComplete = coursesPercentComplete.find(
    (course) => course.courseID === courseID
  );
  if (coursePercentComplete) return coursePercentComplete.percentComplete;
  else return 0;
};

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

export const fetchCompletedChapters = async () => {
  try {
    const res = await fetch('/api/app/chapters/completedChapters', {
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

// fetchCompletedChapters returns array of objects ordered by descending course_id
// Max course_id will be in first object
export const percentCompleteByCourse = (
  completedChapters: {
    chapter_id: number;
    completed: boolean;
    course_id: number;
  }[]
) => {
  const coursesPercentComplete = [];
  const numCourses = completedChapters[0].course_id;
  for (let i = 1; i <= numCourses; i++) {
    const totalChaptersByCourse = completedChapters
      .filter((chapter) => chapter.course_id === i)
      .map((chapter) => chapter.chapter_id);
    const completedChaptersByCourse = completedChapters
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
