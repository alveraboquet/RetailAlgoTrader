import Image from 'next/image';
import Link from 'next/link';

interface Props {
  imagePath: string;
  imageHeight: number;
  imageWidth: number;
  imageAlt: string;
  cardTitle: string;
  cardText: string;
  postPath: string;
  enrolled: boolean;
  percentComplete: number;
}

const CourseCard = ({
  imagePath,
  imageHeight,
  imageWidth,
  imageAlt,
  cardTitle,
  cardText,
  postPath,
  enrolled,
  percentComplete,
}: Props) => {
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
        <button className="btn btn-warning w-100">
          <Link href={postPath}>
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
