import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import LayoutApp from '../../components/layout/layoutApp';
import { NextPage, NextPageContext } from 'next';
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
      <ProSignupBanner isPro={session?.user.isPro} />
      {session?.user && (
        <p className="text-end">
          Signed in as {session.user?.name ?? session.user.email}
        </p>
      )}
      <h1>Course Catalog</h1>
      <div className="row">
        <div className="col-4">
          <CourseCard
            imagePath={coursesData.tradingAcademy.imagePath}
            imageHeight={1414}
            imageWidth={2121}
            imageAlt=""
            cardTitle={coursesData.tradingAcademy.title}
            cardText={coursesData.tradingAcademy.shortDescription}
            coursePath={`/app/courses/tradingAcademy/${
              getCourseObject(1, enrolledCourses).current_chapter
            }/${getCourseObject(1, enrolledCourses).current_lesson}`}
            enrolled={getCourseEnrolled(1, enrolledCourses)}
            percentComplete={getPercentComplete(1, coursesPercentComplete)}
          ></CourseCard>
        </div>
        <div className="col-4">
          <CourseCard
            imagePath={coursesData.algorithmicTradingAcademy.imagePath}
            imageHeight={1055}
            imageWidth={1920}
            imageAlt=""
            cardTitle={coursesData.algorithmicTradingAcademy.title}
            cardText={coursesData.algorithmicTradingAcademy.shortDescription}
            coursePath={`/app/courses/tradingAcademy/${
              getCourseObject(2, enrolledCourses).current_chapter
            }/${getCourseObject(2, enrolledCourses).current_lesson}`}
            enrolled={getCourseEnrolled(2, enrolledCourses)}
            percentComplete={getPercentComplete(2, coursesPercentComplete)}
          ></CourseCard>
        </div>
        <div className="col-4">
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
            enrolled={getCourseEnrolled(3, enrolledCourses)}
            percentComplete={getPercentComplete(3, coursesPercentComplete)}
          ></CourseCard>
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-4">
          <CourseCard
            imagePath={coursesData.forexTradingWithMT4.imagePath}
            imageHeight={1414}
            imageWidth={2121}
            imageAlt=""
            cardTitle={coursesData.forexTradingWithMT4.title}
            cardText={coursesData.forexTradingWithMT4.shortDescription}
            coursePath="/app/courses/tradingAcademy"
            enrolled={getCourseEnrolled(4, enrolledCourses)}
            percentComplete={getPercentComplete(4, coursesPercentComplete)}
          ></CourseCard>
        </div>
        <div className="col-4">
          <CourseCard
            imagePath={coursesData.futuresWithQuantconnect.imagePath}
            imageHeight={1414}
            imageWidth={2121}
            imageAlt=""
            cardTitle={coursesData.futuresWithQuantconnect.title}
            cardText={coursesData.futuresWithQuantconnect.shortDescription}
            coursePath="/app/courses/tradingAcademy"
            enrolled={getCourseEnrolled(5, enrolledCourses)}
            percentComplete={getPercentComplete(5, coursesPercentComplete)}
          ></CourseCard>
        </div>
        <div className="col-4">
          <CourseCard
            imagePath={coursesData.marketResearchWithPython.imagePath}
            imageHeight={1414}
            imageWidth={2121}
            imageAlt=""
            cardTitle={coursesData.marketResearchWithPython.title}
            cardText={coursesData.marketResearchWithPython.shortDescription}
            coursePath="/app/courses/tradingAcademy"
            enrolled={getCourseEnrolled(6, enrolledCourses)}
            percentComplete={getPercentComplete(6, coursesPercentComplete)}
          ></CourseCard>
        </div>
      </div>
    </LayoutApp>
  );
};

export default Dashboard;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

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
}
