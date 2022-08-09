import Link from 'next/link';

interface Props {
  course: string;
  prevChapter: string;
  nextChapter: string;
  prevLesson: string;
  nextLesson: string;
  currentLessonId: number;
}

// Footer component for lesson pages
const FooterLesson = ({
  course,
  prevChapter,
  nextChapter,
  prevLesson,
  nextLesson,
  currentLessonId,
}: Props) => {
  // Update completed lesson in database
  const updateCurrentLesson = async () => {
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

  return (
    <footer className="bg-dark fixed-bottom" style={{ zIndex: '1' }}>
      <div className="container text-end text-md-center pt-1">
        <button className="btn btn-warning me-0 me-md-3 mb-1">
          <Link href={`/app/courses/${course}/${prevChapter}/${prevLesson}`}>
            <a className="text-decoration-none text-dark fs-5">Prev</a>
          </Link>
        </button>
        <button
          className="btn btn-warning ms-3 mb-1"
          onClick={updateCurrentLesson}
        >
          <Link href={`/app/courses/${course}/${nextChapter}/${nextLesson}`}>
            <a className="text-decoration-none text-dark fs-5">Next</a>
          </Link>
        </button>
      </div>
    </footer>
  );
};

export default FooterLesson;
