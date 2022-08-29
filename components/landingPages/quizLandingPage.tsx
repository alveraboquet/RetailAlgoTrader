/* eslint-disable security/detect-object-injection */
// Object injection is not an issue here as there is no user input
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
  altText: string;
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
  altText,
  curriculum,
  similar1Course,
  similar2Course,
}: Props) => {
  const chapters = curriculum;

  return (
    <article className="container p-3">
      <h1 className="mt-3 mb-3">{title}</h1>
      <p>{description}</p>
      <figure className="w-50 mx-auto">
        <Image src={imagePath} height={1000} width={1500} alt={altText} />
      </figure>
      <p>Check out the curriculum for {title}</p>
      <div className="accordion" id="curriculumAccordion">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="accordion-item">
            <h2 className="accordion-header" id={chapter.chapter}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#chapterId${chapter.id}`}
                aria-expanded="false"
                aria-controls={`chapterId${chapter.id}`}
              >
                {chapter.chapter}
              </button>
            </h2>
            <div
              id={`chapterId${chapter.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={chapter.chapter}
              data-bs-parent="#curriculumAccordion"
            >
              {chapter.lessons.map((lesson) => (
                <div
                  key={lesson.title}
                  className="accordion-body bg-light border"
                >
                  {lesson.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
    </article>
  );
};

export default QuizLandingPage;
