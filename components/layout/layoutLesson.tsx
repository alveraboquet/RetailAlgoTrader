import HeaderApp from '../header/headerApp';
import FooterLesson from '../footer/footerLesson';
import coursesData from '../landingPages/coursesData';
import { signIn, useSession } from 'next-auth/react';
import ProSignupBanner from '../pricing/proSignupBanner';
import { useRouter } from 'next/router';
import LessonSidebar from './lessonSidebar';
import styles from '../../styles/LayoutLesson.module.css';

interface Props {
  children: React.ReactNode;
  course: string;
  prevChapter: string;
  nextChapter: string;
  prevLesson: string;
  nextLesson: string;
}

// Layout component for lesson pages
// Children prop is mdx component with lesson material
const LayoutLesson = (props: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return null;
  }

  if (status === 'unauthenticated') {
    signIn();
    return null;
  }

  // Return to dashboard if user is not pro and attempts to access pro course
  if (!session?.user.isPro && coursesData[props.course].isProCourse === true) {
    router.push('/app/dashboard');
  }

  return (
    <div>
      <button
        className={`${styles.lessonButton} position-fixed bottom-0 start-0 m-2 btn btn-light`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#lessonSidebar"
      >
        Lessons
      </button>
      <LessonSidebar curriculum={coursesData.tradingAcademy.curriculum} />
      <div className={styles.pageLayout}>
        <div className={styles.headerHeight}>
          <HeaderApp />
        </div>
        <div className="mt-4 mt-md-0">
          <ProSignupBanner isPro={session?.user.isPro} />
        </div>
        <div className={`${styles.lessonBody} bg-light`}>
          <div className="container text-center">{props.children}</div>
        </div>
        <div className={styles.footerHeight}>
          <FooterLesson
            course={props.course}
            prevChapter={props.prevChapter}
            nextChapter={props.nextChapter}
            prevLesson={props.prevLesson}
            nextLesson={props.nextLesson}
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutLesson;
