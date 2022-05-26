/**
 * Footer component for lesson pages
 */
import Link from 'next/link';

const FooterLesson = () => {
  const prevLesson = '/';
  const nextLesson = '/';

  return (
    <footer className="bg-dark fixed-bottom" style={{ zIndex: '1' }}>
      <div className="container text-center p-3">
        <button className="btn btn-warning me-3">
          <Link href={prevLesson}>
            <a className="text-decoration-none text-dark fs-3 ps-3 pe-3">
              Prev
            </a>
          </Link>
        </button>
        <button className="btn btn-warning ms-3">
          <Link href={nextLesson}>
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
