import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface Props {
  imagePath: string;
  imageHeight: number;
  imageWidth: number;
  imageAlt: string;
  cardTitle: string;
  cardText: string;
  coursePath: string;
  enrolled: boolean;
  percentComplete: number;
  isProCourse: boolean;
}

// Bootstrap card component for courses
const CourseCard = ({
  imagePath,
  imageHeight,
  imageWidth,
  imageAlt,
  cardTitle,
  cardText,
  coursePath,
  enrolled,
  percentComplete,
  isProCourse,
}: Props) => {
  const { data: session } = useSession();

  return (
    <article className="card h-100 m-3 bg-light">
      <figure>
        <Image
          src={imagePath}
          className="card-img-top"
          height={imageHeight}
          width={imageWidth}
          alt={imageAlt}
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{cardTitle}</h3>
        <p className="card-text">{cardText}</p>
        <button
          className="btn btn-warning w-100"
          disabled={!session?.user.isPro && isProCourse}
        >
          <Link href={coursePath}>
            <a className="text-decoration-none text-dark">
              {enrolled ? 'Continue Course' : 'Begin Course'}
            </a>
          </Link>
        </button>
        <div className="progress mt-4">
          <div
            className="progress-bar"
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
