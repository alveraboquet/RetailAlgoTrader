import SimilarCourseCard from './similarCourseCard';
import coursesData from './coursesData';
import Image from 'next/image';

interface Lessons {
  id: number;
  title: string;
  path: string;
}

interface Chapters {
  chapter: string;
  lessons: Lessons[];
  id: string;
}

interface Props {
  title: string;
  description: string;
  imagePath: string;
  curriculum: Chapters[];
  similar1Course: string;
  similar2Course: string;
}

/**
 * This is a general template for the quiz landing pages
 * Information specific to each landing page is passed in as props
 */
const QuizLandingPage = ({
  title,
  description,
  imagePath,
  curriculum,
  similar1Course,
  similar2Course,
}: Props) => {
  const chapters = curriculum;

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
      {chapters.map((chapter) => (
        <div
          key={chapter.id}
          className="ps-4 pe-4 mb-3 bg-secondary rounded text-white w-75 mx-auto"
        >
          {chapter.chapter}
        </div>
      ))}
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
