import { NextPage } from 'next';
import { useRouter } from 'next/router';
import LayoutApp from '../../components/layout/layoutApp';
import PrintObject from '../../components/stripe/printObject';
import { fetchGetJSON } from '../../lib/fetchJSON';
import useSWR from 'swr';

const ResultPage: NextPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/stripe/checkoutSession/${router.query.session_id}`
      : null,
    fetchGetJSON
  );

  if (error) return <div>failed to load</div>;

  return (
    <LayoutApp>
      <div className="page-container">
        <h1>Checkout Payment Result</h1>
        <h2>Status: {data?.payment_intent?.status ?? 'loading...'}</h2>
        <h3>CheckoutSession response:</h3>
        <PrintObject content={data ?? 'loading...'} />
        <p>Bob</p>
      </div>
    </LayoutApp>
  );
};

export default ResultPage;
