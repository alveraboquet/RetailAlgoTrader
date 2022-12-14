import Link from 'next/link';
import { updateCurrentLesson } from '../../lib/lessonSidebarHelpers';

interface Props {
  course: string;
  prevChapter: string;
  nextChapter: string;
  prevLesson: string;
  nextLesson: string;
  currentLessonId: number;
}

// Array of lesson IDs that are the last lessons in a course
const lastLessonIDs = [92];

// Footer component for lesson pages
const FooterLesson = ({
  course,
  prevChapter,
  nextChapter,
  prevLesson,
  nextLesson,
  currentLessonId,
}: Props) => {
  if (lastLessonIDs.includes(currentLessonId)) {
    return (
      <footer className="bg-dark fixed-bottom" style={{ zIndex: '1' }}>
        <div className="container text-end text-md-center pt-1">
          <Link href={`/app/courses/${course}/${prevChapter}/${prevLesson}`}>
            <button className="btn btn-warning me-0 me-md-3 mb-1 fs-5">
              Prev
            </button>
          </Link>
          <Link href={'/app/dashboard'}>
            <button
              className="btn btn-warning ms-3 mb-1 fs-5"
              onClick={() =>
                updateCurrentLesson({
                  course,
                  prevChapter,
                  nextChapter,
                  prevLesson,
                  nextLesson,
                  currentLessonId,
                })
              }
            >
              Return to dashboard
            </button>
          </Link>
        </div>
      </footer>
    );
  } else {
    return (
      <footer className="bg-dark fixed-bottom" style={{ zIndex: '1' }}>
        <div className="container text-end text-md-center pt-1">
          <Link href={`/app/courses/${course}/${prevChapter}/${prevLesson}`}>
            <button className="btn btn-warning me-0 me-md-3 mb-1 fs-5">
              Prev
            </button>
          </Link>
          <Link href={`/app/courses/${course}/${nextChapter}/${nextLesson}`}>
            <button
              className="btn btn-warning ms-3 mb-1 fs-5"
              onClick={() =>
                updateCurrentLesson({
                  course,
                  prevChapter,
                  nextChapter,
                  prevLesson,
                  nextLesson,
                  currentLessonId,
                })
              }
            >
              Next
            </button>
          </Link>
        </div>
      </footer>
    );
  }
};

export default FooterLesson;
