import HeaderApp from '../header/headerApp';
import FooterLesson from '../footer/footerLesson';
import Sidebar from 'react-sidebar';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import coursesData from '../landingPages/coursesData';
import { signIn, useSession } from 'next-auth/react';
import ProSignupBanner from '../../components/pricing/proSignupBanner';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
  course: string;
  prevChapter: string;
  nextChapter: string;
  prevLesson: string;
  nextLesson: string;
}

const LayoutLesson = ({
  children,
  course,
  prevChapter,
  nextChapter,
  prevLesson,
  nextLesson,
}: Props) => {
  const { data: session, status } = useSession();
  const ref = useRef<any>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent) => {
      if (sidebarOpen && ref.current && !ref.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [sidebarOpen]);

  if (status === 'loading') {
    return null;
  }

  if (status === 'unauthenticated') {
    signIn();
    return null;
  }

  if (!session?.user.isPro) {
    router.push('/app/dashboard');
  }

  return (
    <div>
      <Sidebar
        sidebar={
          <div ref={ref}>
            <h1>Sidebar content</h1>
            <Link href="/signup">
              <a className="text-decoration-none text-dark">
                Get Started for Free
              </a>
            </Link>
            {coursesData.tradingAcademy.curriculum.map((chapter) => (
              <div
                key={chapter}
                className="ps-4 pe-4 mb-3 bg-secondary rounded text-white w-75 mx-auto"
              >
                {chapter}
              </div>
            ))}
          </div>
        }
        open={sidebarOpen}
        styles={{ sidebar: { background: 'white' } }}
      >
        <button
          style={{ zIndex: '2' }}
          className="position-fixed bottom-0 start-0 m-4 btn btn-light"
          onClick={() => setSidebarOpen(true)}
        >
          Lessons
        </button>
      </Sidebar>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
        }}
      >
        <div style={{ height: '80px' }}>
          <HeaderApp />
        </div>
        <ProSignupBanner isPro={session?.user.isPro} />
        <div
          className="mt-4 bg-light"
          style={{ height: '100%', overflowY: 'auto' }}
        >
          <div className="container text-center">{children}</div>
        </div>
        <div style={{ height: '100px' }}>
          <FooterLesson
            course={course}
            prevChapter={prevChapter}
            nextChapter={nextChapter}
            prevLesson={prevLesson}
            nextLesson={nextLesson}
          />
        </div>
      </div>
    </div>
  );
};

export default LayoutLesson;
