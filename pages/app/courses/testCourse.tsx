import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import LayoutApp from '../../../components/layout/layoutApp';
import AccessDenied from '../../../components/auth/accessDenied';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';

const TestCourse = () => {
  const { data: session, status } = useSession();
  const loading = status === 'loading';
  const [data, setData] = useState(Object);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  // If session exists, display content
  return (
    <LayoutApp>
      <h1>Test Course</h1>;<p>{data ? data.first_name : 'No data'}</p>
    </LayoutApp>
  );
};

export default TestCourse;

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
