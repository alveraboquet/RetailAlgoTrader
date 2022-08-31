import Link from 'next/link';

interface Props {
  course: string;
  prevChapter: string;
  nextChapter: string;
  prevLesson: string;
  nextLesson: string;
  setUpdateLessons: any;
}

// Footer component for lesson pages
const FooterLesson = ({
  course,
  prevChapter,
  nextChapter,
  prevLesson,
  nextLesson,
  setUpdateLessons,
}: Props) => {
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
            onClick={() => setUpdateLessons(true)}
          >
            Next
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default FooterLesson;
