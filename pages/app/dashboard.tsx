import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import LayoutApp from '../../components/layout/layoutApp';
import { NextPage, NextPageContext } from 'next';
import CourseCard from '../../components/course/courseCard';
import coursesData from '../../components/landingPages/coursesData';
import ProSignupBanner from '../../components/pricing/proSignupBanner';

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
    const fetchEnrolledCourses = async () => {
      try {
        const res = await fetch('/api/app/courses/enrolledCourses', {
          headers: {
            'X-Custom-Header': 'lollipop',
          },
        });
        if (res.status !== 200) {
          throw new Error();
        }
        const data = await res.json();
        if (data) {
          setEnrolledCourses(data);
          return;
        }
        setEnrolledCourses([]);
      } catch (err) {
        setEnrolledCourses([]);
      }
    };
    const fetchCompletedChapters = async () => {
      try {
        const res = await fetch('/api/app/chapters/completedChapters', {
          headers: {
            'X-Custom-Header': 'lollipop',
          },
        });
        if (res.status !== 200) {
          throw new Error();
        }
        const data = await res.json();
        if (data) {
          setCompletedChapters(data);
          return;
        }
        setCompletedChapters([]);
      } catch (err) {
        setCompletedChapters([]);
      }
    };
    fetchEnrolledCourses();
    fetchCompletedChapters();
  }, [session]);

  // Calculate percent complete for each course
  useEffect(() => {
    // fetchCompletedChapters returns array of objects ordered by descending course_id
    // Max course_id will be in first object
    const numCourses = completedChapters[0].course_id;
    setCoursesPercentComplete([]);
    for (let i = 1; i <= numCourses; i++) {
      const totalChaptersByCourse = completedChapters
        .filter((chapter) => chapter.course_id === i)
        .map((chapter) => chapter.chapter_id);
      const completedChaptersByCourse = completedChapters
        .filter((chapter) => chapter.course_id === i)
        .filter((chapter) => chapter.completed)
        .map((chapter) => chapter.chapter_id);
      const coursePercentComplete =
        (completedChaptersByCourse.length / totalChaptersByCourse.length) * 100;
      setCoursesPercentComplete((percentComplete) => [
        ...percentComplete,
        {
          courseID: i,
          percentComplete: coursePercentComplete ? coursePercentComplete : 0,
        },
      ]);
    }
  }, [completedChapters]);

  const getPercentComplete = (courseID: number) => {
    const coursePercentComplete = coursesPercentComplete.find(
      (course) => course.courseID === courseID
    );
    if (coursePercentComplete) return coursePercentComplete.percentComplete;
    else return 0;
  };

  const getCourseEnrolled = (courseID: number) => {
    const courseEnrolled = enrolledCourses.find(
      (course) => course.course_id === courseID
    );
    if (courseEnrolled) return courseEnrolled.enrolled;
    else return false;
  };

  const getCourseObject = (courseID: number) => {
    const courseObject = enrolledCourses.find(
      (course) => course.course_id === courseID
    );
    if (courseObject) return courseObject;
    else
      return {
        course_id: 0,
        enrolled: false,
        current_chapter: 0,
        current_lesson: 0,
      };
  };

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
              getCourseObject(1).current_chapter
            }/${getCourseObject(1).current_lesson}`}
            enrolled={getCourseEnrolled(1)}
            percentComplete={getPercentComplete(1)}
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
              getCourseObject(2).current_chapter
            }/${getCourseObject(2).current_lesson}`}
            enrolled={getCourseEnrolled(2)}
            percentComplete={getPercentComplete(2)}
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
            enrolled={getCourseEnrolled(3)}
            percentComplete={getPercentComplete(3)}
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
            enrolled={getCourseEnrolled(4)}
            percentComplete={getPercentComplete(4)}
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
            enrolled={getCourseEnrolled(5)}
            percentComplete={getPercentComplete(5)}
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
            enrolled={getCourseEnrolled(6)}
            percentComplete={getPercentComplete(6)}
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
