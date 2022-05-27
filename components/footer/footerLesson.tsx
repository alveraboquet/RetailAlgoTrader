/**
 * Footer component for lesson pages
 */
import Link from 'next/link';

interface Props {
  course: string;
  prevChapter: string;
  nextChapter: string;
  prevLesson: string;
  nextLesson: string;
}

const FooterLesson = ({
  course,
  prevChapter,
  nextChapter,
  prevLesson,
  nextLesson,
}: Props) => {
  // Update completed lesson in database
  const updateCurrentLesson = async () => {
    try {
      const res = await fetch('/api/app/courses/updateCurrentLesson', {
        headers: {
          'X-Custom-Header': 'lollipop',
        },
        method: 'PUT',
        body: JSON.stringify({
          course,
          prevChapter,
          nextChapter,
          prevLesson,
          nextLesson,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <footer className="bg-dark fixed-bottom" style={{ zIndex: '1' }}>
      <div className="container text-center p-3">
        <button className="btn btn-warning me-3">
          <Link href={`/app/courses/${course}/${prevChapter}/${prevLesson}`}>
            <a className="text-decoration-none text-dark fs-3 ps-3 pe-3">
              Prev
            </a>
          </Link>
        </button>
        <button className="btn btn-warning ms-3" onClick={updateCurrentLesson}>
          <Link href={`/app/courses/${course}/${nextChapter}/${nextLesson}`}>
            <a className="text-decoration-none text-dark fs-3 ps-3 pe-3">
              Next
            </a>
          </Link>
        </button>
      </div>
    </footer>
  );
};

export default FooterLesson;
