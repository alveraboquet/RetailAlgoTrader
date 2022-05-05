/**
 * This is a general template for the quiz landing pages
 * Information specific to each landing page is passed in as props
 */
import SimilarCourseCard from './similarCourseCard';
import coursesData from './coursesData';
import Image from 'next/image';

interface Props {
  title: string;
  description: string;
  imagePath: string;
  curriculum: object;
  similar1Course: string;
  similar2Course: string;
}

const QuizLandingPage = ({
  title,
  description,
  imagePath,
  curriculum,
  similar1Course,
  similar2Course,
}: Props) => {
  const chapters = [];

  for (const chapter in curriculum) {
    chapters.push(
      <p key={chapter} className="bg-secondary rounded">
        {chapter}
      </p>
    );
  }

  return (
    <div className="p-3">
      <h1>{title}</h1>
      <p>{description}</p>
      <figure>
        <Image
          src={imagePath}
          className="card-img-top"
          height={1306}
          width={2295}
          alt="Investing nature themed"
        />
      </figure>
      <p>Check out the curriculum for {title}</p>
      <div className="ps-4 pe-4">{chapters}</div>
      <div className="p-3">
        <SimilarCourseCard
          title={coursesData[similar1Course].title}
          description={coursesData[similar1Course].shortDescription}
        />
        <div className="mt-3">
          <SimilarCourseCard
            title={coursesData[similar2Course].title}
            description={coursesData[similar2Course].shortDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizLandingPage;
