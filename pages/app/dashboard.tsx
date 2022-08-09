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
  fetchCompletedChapters,
  percentCompleteByCourse,
} from '../../lib/dashboardHelpers';
import DOMPurify from 'isomorphic-dompurify';

// Renders user dashboard page
const Dashboard: NextPage = () => {
  const { data: session } = useSession();
  const [enrolledCourses, setEnrolledCourses] = useState([
    { course_id: 0, enrolled: false, current_chapter: 0, current_lesson: 0 },
  ]);
  const [completedChapters, setCompletedChapters] = useState([
    { chapter_id: 0, completed: false, course_id: 0 },
  ]);
  const [coursesPercentComplete, setCoursesPercentComplete] = useState([
    { courseID: 0, percentComplete: 0 },
  ]);

  // Fetch content from protected routes with custom header
  useEffect(() => {
    fetchEnrolledCourses().then((enrolledCourses) => {
      if (enrolledCourses) setEnrolledCourses(enrolledCourses);
    });
    fetchCompletedChapters().then((completedChapters) => {
      if (completedChapters) setCompletedChapters(completedChapters);
    });
  }, [session]);

  // Calculate percent complete for each course
  useEffect(() => {
    setCoursesPercentComplete(percentCompleteByCourse(completedChapters));
  }, [completedChapters]);

  return (
    <LayoutApp>
      <div className="mt-3 mt-md-0">
        <ProSignupBanner isPro={session?.user.isPro} />
      </div>
      {session?.user.name && (
        <p className="text-end">
          Signed in as {DOMPurify.sanitize(session.user.name)}
        </p>
      )}
      <h1>Course Catalog</h1>
      <div className="row">
        <div className="col-12 col-md-4">
          <CourseCard
            imagePath={coursesData.tradingAcademy.imagePath}
            imageHeight={1414}
            imageWidth={2121}
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
          ></CourseCard>
        </div>
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <CourseCard
            imagePath={coursesData.algorithmicTradingAcademy.imagePath}
            imageHeight={1055}
            imageWidth={1920}
            imageAlt=""
            cardTitle={coursesData.algorithmicTradingAcademy.title}
            cardText={coursesData.algorithmicTradingAcademy.shortDescription}
            coursePath={`/app/courses/tradingAcademy/${
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
          ></CourseCard>
        </div>
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <CourseCard
            imagePath={coursesData.equitiesAndCryptoWithTradingview.imagePath}
            imageHeight={358}
            imageWidth={1304}
            imageAlt=""
            cardTitle={coursesData.equitiesAndCryptoWithTradingview.title}
            cardText={
              coursesData.equitiesAndCryptoWithTradingview.shortDescription
            }
            coursePath="/app/courses/tradingAcademy"
            enrolled={getCourseEnrolled(
              coursesData.equitiesAndCryptoWithTradingview.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.equitiesAndCryptoWithTradingview.id,
              coursesPercentComplete
            )}
            isProCourse={true}
          ></CourseCard>
        </div>
      </div>
      <div className="row mt-0 mt-md-5 mb-5">
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <CourseCard
            imagePath={coursesData.forexTradingWithMT4.imagePath}
            imageHeight={1414}
            imageWidth={2121}
            imageAlt=""
            cardTitle={coursesData.forexTradingWithMT4.title}
            cardText={coursesData.forexTradingWithMT4.shortDescription}
            coursePath="/app/courses/tradingAcademy"
            enrolled={getCourseEnrolled(
              coursesData.forexTradingWithMT4.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.forexTradingWithMT4.id,
              coursesPercentComplete
            )}
            isProCourse={true}
          ></CourseCard>
        </div>
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <CourseCard
            imagePath={coursesData.futuresWithQuantconnect.imagePath}
            imageHeight={1414}
            imageWidth={2121}
            imageAlt=""
            cardTitle={coursesData.futuresWithQuantconnect.title}
            cardText={coursesData.futuresWithQuantconnect.shortDescription}
            coursePath="/app/courses/tradingAcademy"
            enrolled={getCourseEnrolled(
              coursesData.futuresWithQuantconnect.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.futuresWithQuantconnect.id,
              coursesPercentComplete
            )}
            isProCourse={true}
          ></CourseCard>
        </div>
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <CourseCard
            imagePath={coursesData.marketResearchWithPython.imagePath}
            imageHeight={1414}
            imageWidth={2121}
            imageAlt=""
            cardTitle={coursesData.marketResearchWithPython.title}
            cardText={coursesData.marketResearchWithPython.shortDescription}
            coursePath="/app/courses/tradingAcademy"
            enrolled={getCourseEnrolled(
              coursesData.marketResearchWithPython.id,
              enrolledCourses
            )}
            percentComplete={getPercentComplete(
              coursesData.marketResearchWithPython.id,
              coursesPercentComplete
            )}
            isProCourse={true}
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
