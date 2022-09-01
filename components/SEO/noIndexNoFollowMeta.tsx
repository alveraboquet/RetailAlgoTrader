import Head from 'next/head';

const NoIndexNoFollowMeta = () => {
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default NoIndexNoFollowMeta;
