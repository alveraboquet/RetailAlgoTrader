import { useState, useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import LayoutApp from '../../components/layout/layoutApp';
import AccessDenied from '../../components/auth/accessDenied';
import { NextPageContext } from 'next';

const Dashboard = () => {
  const { data: session } = useSession();
  const [data, setData] = useState('');
  console.log(session?.user?.email);

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/app/user/1', {
          headers: {
            'X-Custom-Header': 'lollipop',
          },
        });
        const data = await res.json();
        if (data) {
          setData(data.first_name);
        }
      } catch (err) {
        setData('Failed to load data');
      }
    };
    fetchData();
  }, [session]);

  // If no session exists, display access denied message
  if (!session) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <LayoutApp>
      <h1>Protected Page</h1>
      <p>{data}</p>
    </LayoutApp>
  );
};

export default Dashboard;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
