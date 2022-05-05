/**
 * This component renders a small card for similar courses on the quiz landing pages
 * It takes title, description, and path to icon as props
 */
import Link from 'next/link';

interface Props {
  title: string;
  description: string;
}

const SimilarCourseCard = ({ title, description }: Props) => {
  return (
    <div className="card">
      <div className="card-header">Similar Resource</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href="/signup">
          <a>
            <button className="btn btn-warning">Start {title}</button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SimilarCourseCard;
