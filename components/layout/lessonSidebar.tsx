import Link from 'next/link';
import styles from '../../styles/LessonSidebar.module.css';
import { useEffect, useState } from 'react';
import { fetchCompletedLessons } from '../../lib/lessonSidebarHelpers';
import coursesData from '../landingPages/coursesData';

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

// Sidebar containing all chapters and lessons for the current course
// https://getbootstrap.com/docs/5.2/components/offcanvas/
const LessonSidebar = () => {
  const [completedLessons, setCompletedLessons] = useState<Chapters[]>([]);

  // Fetches completed lessons. Delay of 1sec to allow database to update current lesson before retrieving
  useEffect(() => {
    setTimeout(() => {
      fetchCompletedLessons(coursesData.tradingAcademy.curriculum).then(
        (lessonData) => {
          setCompletedLessons(lessonData);
        }
      );
    }, 1000);
  }, []);

  return (
    <div className="offcanvas offcanvas-start" id="lessonSidebar">
      <div className="offcanvas-header">
        <h1 className="offcanvas-title">Lessons</h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="accordion" id="sidebarAccordion">
          {completedLessons.map((chapter) => (
            <div key={chapter.id} className="accordion-item">
              <h2 className="accordion-header" id={chapter.chapter}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#chapterId${chapter.id}`}
                  aria-expanded="false"
                  aria-controls={`chapterId${chapter.id}`}
                >
                  {chapter.chapter}
                </button>
              </h2>
              <div
                id={`chapterId${chapter.id}`}
                className="accordion-collapse collapse"
                aria-labelledby={chapter.chapter}
                data-bs-parent="#sidebarAccordion"
              >
                {chapter.lessons.map((lesson) => (
                  <Link
                    href={`/app/courses${lesson.path}`}
                    key={lesson.title}
                    passHref
                  >
                    <div className={`accordion-body border ${styles.lesson}`}>
                      <a className="text-decoration-none text-dark">
                        {lesson.title}
                      </a>
                      {lesson.completed ? (
                        <p className="badge bg-success ms-1">Completed</p>
                      ) : (
                        <p className="badge bg-danger ms-1">Incomplete</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LessonSidebar;
