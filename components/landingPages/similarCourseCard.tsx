import Link from 'next/link';

interface Props {
  title: string;
  description: string;
}

/**
 * This component renders a small card for similar courses on the quiz landing pages
 * It takes title, description, and path to icon as props
 */
const SimilarCourseCard = ({ title, description }: Props) => {
  return (
    <div className="card">
      <div className="card-header">Similar Resource</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link href="/auth/signup">
          <button className="btn btn-warning">Start {title}</button>
        </Link>
      </div>
    </div>
  );
};

export default SimilarCourseCard;
