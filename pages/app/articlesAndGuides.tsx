import type { GetServerSideProps, NextPage } from 'next';
import LayoutApp from '../../components/layout/layoutApp';
import PostCard from '../../components/post/postCard';
import { useSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import ProSignupBanner from '../../components/pricing/proSignupBanner';

// Renders blog page with collection of articles and guides
const ArticlesAndGuides: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <LayoutApp>
        <article className="container">
          <div className="mt-3 mt-md-0">
            <ProSignupBanner isPro={session?.user.isPro} />
          </div>
          <div className="row">
            <aside className="col-md-4 mb-3">
              <PostCard
                imagePath="/images/website/genericStock.webp"
                imageHeight={1306}
                imageWidth={2295}
                imageAlt="Picture of market candles"
                cardTitle="What are market makers and how do they work?"
                cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
                postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
                buttonText="Read More"
              />
            </aside>
            <aside className="col-md-4 mb-3">
              <PostCard
                imagePath="/images/website/genericStock.webp"
                imageHeight={1306}
                imageWidth={2295}
                imageAlt="Picture of market candles"
                cardTitle="article3"
                cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
                postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
                buttonText="Read More"
              />
            </aside>
            <aside className="col-md-4 mb-3">
              <PostCard
                imagePath="/images/website/genericStock.webp"
                imageHeight={1306}
                imageWidth={2295}
                imageAlt="Picture of market candles"
                cardTitle="article4"
                cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
                postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
                buttonText="Read More"
              />
            </aside>
          </div>
          <div className="row mb-5 ">
            <aside className="col-md-4 mb-3">
              <PostCard
                imagePath="/images/website/genericStock.webp"
                imageHeight={1306}
                imageWidth={2295}
                imageAlt="Picture of market candles"
                cardTitle="article5"
                cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
                postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
                buttonText="Read More"
              />
            </aside>
            <aside className="col-md-4 mb-3">
              <PostCard
                imagePath="/images/website/genericStock.webp"
                imageHeight={1306}
                imageWidth={2295}
                imageAlt="Picture of market candles"
                cardTitle="article2"
                cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
                postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
                buttonText="Read More"
              />
            </aside>
            <aside className="col-md-4 mb-3">
              <PostCard
                imagePath="/images/website/genericStock.webp"
                imageHeight={1306}
                imageWidth={2295}
                imageAlt="Picture of market candles"
                cardTitle="article6"
                cardText="There is a lot of confusion and inaccurate beliefs around market makers
        and their roles in the market."
                postPath="/posts/whatAreMarketMakersAndHowDoTheyWork"
                buttonText="Read More"
              />
            </aside>
          </div>
        </article>
      </LayoutApp>
    </div>
  );
};

export default ArticlesAndGuides;

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
