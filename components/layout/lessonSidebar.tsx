import Link from 'next/link';
import styles from '../../styles/LessonSidebar.module.css';

interface Lessons {
  title: string;
  path: string;
}

interface Chapters {
  chapter: string;
  lessons: Lessons[];
  id: string;
}

interface Props {
  curriculum: Chapters[];
}

// Sidebar containing all chapters and lessons for the current course
// https://getbootstrap.com/docs/5.2/components/offcanvas/
const LessonSidebar = ({ curriculum }: Props) => {
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
          {curriculum.map((chapter) => (
            <div key={chapter.id} className="accordion-item">
              <h2 className="accordion-header" id={chapter.chapter}>
                <button
                  className="accordion-button"
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
                    <div className={`accordion-body ${styles.lesson}`}>
                      <a className="text-decoration-none text-dark">
                        {lesson.title}
                      </a>
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
