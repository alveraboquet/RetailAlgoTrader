import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface Props {
  imagePath: string;
  imageAlt: string;
  cardTitle: string;
  cardText: string;
  coursePath: string;
  enrolled: boolean;
  percentComplete: number;
  isProCourse: boolean;
  courseId: number;
}

// Bootstrap card component for courses
const CourseCard = ({
  imagePath,
  imageAlt,
  cardTitle,
  cardText,
  coursePath,
  enrolled,
  percentComplete,
  isProCourse,
  courseId,
}: Props) => {
  const { data: session } = useSession();

  const updateEnrollStatus = async () => {
    try {
      const res = await fetch('/api/app/courses/updateEnrollStatus', {
        method: 'PUT',
        headers: {
          'X-Custom-Header': 'lollipop',
        },
        body: JSON.stringify({
          courseId,
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
    <article className="card h-100 m-3 bg-light">
      {isProCourse ? (
        <p className="bg-warning text-center mb-0 pb-0 card-img-top">
          Pro Course
        </p>
      ) : (
        <p className="bg-dark text-center text-white mb-0 pb-0 card-img-top">
          Free Course
        </p>
      )}
      <Image src={imagePath} height={1000} width={1500} alt={imageAlt} />
      <div className="card-body">
        <h3 className="card-title">{cardTitle}</h3>
        <p className="card-text">{cardText}</p>
        <Link href={coursePath}>
          <button
            className="btn btn-dark w-100"
            disabled={!session?.user.isPro && isProCourse}
            onClick={updateEnrollStatus}
          >
            {enrolled ? 'Continue Course' : 'Begin Course'}
          </button>
        </Link>
        <div className="progress mt-4">
          <div
            className="progress-bar progress-bar-striped bg-warning text-dark"
            role="progressbar"
            style={{ width: `${percentComplete}%` }}
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {percentComplete}%
          </div>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
