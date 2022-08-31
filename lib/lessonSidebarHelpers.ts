interface Lessons {
  id: number;
  title: string;
  path: string;
  completed?: boolean;
}

interface Chapters {
  chapter: string;
  lessons: Lessons[];
  id: string;
}

interface ChapterId {
  chapter_id: number;
}

interface DatabaseLesson {
  user_id: string;
  lesson_id: number;
  completed: boolean;
  lesson: ChapterId;
}

export const fetchCompletedLessons = async (curriculum: Chapters[]) => {
  try {
    const res = await fetch('/api/app/lessons/getCompletedLessons', {
      headers: {
        'X-Custom-Header': 'lollipop',
      },
    });
    if (res.status !== 200) {
      throw new Error();
    }
    const lessonData = await res.json();
    const courseData = curriculum;

    // Iterate through each chapter from the curriculum prop (FE curriculum data)
    courseData.forEach((chapter) => {
      // Iterate through each lesson from the FE chapter
      chapter.lessons.forEach((lesson) => {
        // Iterate each lesson from the BE lessonData
        lessonData.forEach((dbLesson: DatabaseLesson) => {
          // If id of FE lesson and BE lesson match and BE lesson shows as complete update FE lesson to show as complete
          if (lesson.id === dbLesson.lesson_id) {
            if (dbLesson.completed) {
              lesson.completed = true;
            } else {
              lesson.completed = false;
            }
          }
        });
      });
    });

    return courseData;
  } catch (err) {
    console.log(err);
    return curriculum;
  }
};

interface UpdateCurrentLessonProps {
  course: string;
  prevChapter: string;
  nextChapter: string;
  prevLesson: string;
  nextLesson: string;
  currentLessonId: number;
}

// Update completed lesson in database
export const updateCurrentLesson = async ({
  course,
  prevChapter,
  nextChapter,
  prevLesson,
  nextLesson,
  currentLessonId,
}: UpdateCurrentLessonProps) => {
  try {
    const res = await fetch('/api/app/courses/updateCurrentLesson', {
      method: 'PUT',
      headers: {
        'X-Custom-Header': 'lollipop',
      },
      body: JSON.stringify({
        course,
        prevChapter,
        nextChapter,
        prevLesson,
        nextLesson,
        currentLessonId,
      }),
    });
    if (res.status !== 200) {
      throw new Error();
    }
  } catch (err) {
    console.log(err);
  }
};
