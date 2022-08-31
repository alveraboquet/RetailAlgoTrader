import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import LayoutApp from '../../components/layout/layoutApp';
import { GetServerSideProps, NextPage } from 'next';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import CourseCard from '../../components/course/courseCard';
import coursesData from '../../components/landingPages/coursesData';
import ProSignupBanner from '../../components/pricing/proSignupBanner';
import {
  getPercentComplete,
  getCourseEnrolled,
  getCourseObject,
  fetchEnrolledCourses,
  fetchCompletedLessonsByCourse,
  percentCompleteByCourse,
} from '../../lib/dashboardHelpers';

// Renders user dashboard page
const Dashboard: NextPage = () => {
  const { data: session } = useSession();
  const [enrolledCourses, setEnrolledCourses] = useState([
    { course_id: 0, enrolled: false, current_chapter: 0, current_lesson: 0 },
  ]);
  const [completedLessons, setCompletedLessons] = useState([
    {
      user_id: '',
      lesson_id: 0,
      completed: false,
      chapter_id: 0,
      course_id: 0,
    },
  ]);
  const [coursesPercentComplete, setCoursesPercentComplete] = useState([
    { courseID: 0, percentComplete: 0 },
  ]);

  // Fetch content from protected routes with custom header
  useEffect(() => {
    fetchEnrolledCourses().then((enrolledCourses) => {
      if (enrolledCourses) setEnrolledCourses(enrolledCourses);
    });
    fetchCompletedLessonsByCourse().then((completedLessons) => {
      if (completedLessons) setCompletedLessons(completedLessons);
    });
  }, [session]);

  // Calculate percent complete for each course
  useEffect(() => {
    setCoursesPercentComplete(percentCompleteByCourse(completedLessons));
  }, [completedLessons]);

  return (
    <LayoutApp>
      <div className="mt-3 mt-md-0">
        <ProSignupBanner isPro={session?.user.isPro} />
      </div>
      <h1 className="mt-3" data-testid="dashboard">
        Course Catalog
      </h1>
      <div className="row mb-5">
        <div className="col-12 col-md-6 col-lg-4">
          <CourseCard
            imagePath={coursesData.tradingAcademy.imagePath}
            imageAlt=""
            cardTitle={coursesData.tradingAcademy.title}
            cardText={coursesData.tradingAcademy.shortDescription}
            coursePath={`/app/courses/tradingAcademy/${
              getCourseObject(coursesData.tradingAcademy.id, enrolledCourses)
                .current_chapter
            }/${
              getCourseObject(coursesData.tradingAcademy.id, enrolledCourses)
                .current_lesson
            }`}
            enrolled={getCourseEnrolled(
              coursesData.tradingAcademy.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.tradingAcademy.id,
              coursesPercentComplete
            )}
            isProCourse={false}
            courseId={coursesData.tradingAcademy.id}
          ></CourseCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
          <CourseCard
            imagePath={coursesData.algorithmicTradingAcademy.imagePath}
            imageAlt=""
            cardTitle={coursesData.algorithmicTradingAcademy.title}
            cardText={coursesData.algorithmicTradingAcademy.shortDescription}
            coursePath={`/app/courses/algorithmicTradingAcademy/${
              getCourseObject(
                coursesData.algorithmicTradingAcademy.id,
                enrolledCourses
              ).current_chapter
            }/${
              getCourseObject(
                coursesData.algorithmicTradingAcademy.id,
                enrolledCourses
              ).current_lesson
            }`}
            enrolled={getCourseEnrolled(
              coursesData.algorithmicTradingAcademy.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.algorithmicTradingAcademy.id,
              coursesPercentComplete
            )}
            isProCourse={true}
            courseId={coursesData.algorithmicTradingAcademy.id}
          ></CourseCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
          <CourseCard
            imagePath={coursesData.equitiesAndCryptoWithTradingView.imagePath}
            imageAlt=""
            cardTitle={coursesData.equitiesAndCryptoWithTradingView.title}
            cardText={
              coursesData.equitiesAndCryptoWithTradingView.shortDescription
            }
            coursePath={`/app/courses/equitiesAndCryptoWithTradingView/${
              getCourseObject(
                coursesData.equitiesAndCryptoWithTradingView.id,
                enrolledCourses
              ).current_chapter
            }/${
              getCourseObject(
                coursesData.equitiesAndCryptoWithTradingView.id,
                enrolledCourses
              ).current_lesson
            }`}
            enrolled={getCourseEnrolled(
              coursesData.equitiesAndCryptoWithTradingView.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.equitiesAndCryptoWithTradingView.id,
              coursesPercentComplete
            )}
            isProCourse={true}
            courseId={coursesData.equitiesAndCryptoWithTradingView.id}
          ></CourseCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-4">
          <CourseCard
            imagePath={coursesData.forexTradingWithMT4.imagePath}
            imageAlt=""
            cardTitle={coursesData.forexTradingWithMT4.title}
            cardText={coursesData.forexTradingWithMT4.shortDescription}
            coursePath={`/app/courses/forexTradingWithMT4/${
              getCourseObject(
                coursesData.forexTradingWithMT4.id,
                enrolledCourses
              ).current_chapter
            }/${
              getCourseObject(
                coursesData.forexTradingWithMT4.id,
                enrolledCourses
              ).current_lesson
            }`}
            enrolled={getCourseEnrolled(
              coursesData.forexTradingWithMT4.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.forexTradingWithMT4.id,
              coursesPercentComplete
            )}
            isProCourse={true}
            courseId={coursesData.forexTradingWithMT4.id}
          ></CourseCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-4">
          <CourseCard
            imagePath={coursesData.futuresWithQuantConnect.imagePath}
            imageAlt=""
            cardTitle={coursesData.futuresWithQuantConnect.title}
            cardText={coursesData.futuresWithQuantConnect.shortDescription}
            coursePath={`/app/courses/futuresWithQuantConnect/${
              getCourseObject(
                coursesData.futuresWithQuantConnect.id,
                enrolledCourses
              ).current_chapter
            }/${
              getCourseObject(
                coursesData.futuresWithQuantConnect.id,
                enrolledCourses
              ).current_lesson
            }`}
            enrolled={getCourseEnrolled(
              coursesData.futuresWithQuantConnect.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.futuresWithQuantConnect.id,
              coursesPercentComplete
            )}
            isProCourse={true}
            courseId={coursesData.futuresWithQuantConnect.id}
          ></CourseCard>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-4">
          <CourseCard
            imagePath={coursesData.marketResearchWithPython.imagePath}
            imageAlt=""
            cardTitle={coursesData.marketResearchWithPython.title}
            cardText={coursesData.marketResearchWithPython.shortDescription}
            coursePath={`/app/courses/marketResearchWithPython/${
              getCourseObject(
                coursesData.marketResearchWithPython.id,
                enrolledCourses
              ).current_chapter
            }/${
              getCourseObject(
                coursesData.marketResearchWithPython.id,
                enrolledCourses
              ).current_lesson
            }`}
            enrolled={getCourseEnrolled(
              coursesData.marketResearchWithPython.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.marketResearchWithPython.id,
              coursesPercentComplete
            )}
            isProCourse={true}
            courseId={coursesData.marketResearchWithPython.id}
          ></CourseCard>
        </div>
      </div>
    </LayoutApp>
  );
};

export default Dashboard;

// Export the `session` prop to use sessions with Server Side Rendering
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
