import type { NextPage, NextPageContext } from 'next';
import LayoutApp from '../../components/layout/layoutApp';
import PostCard from '../../components/post/postCard';
import { getSession, useSession } from 'next-auth/react';
import ProSignupBanner from '../../components/pricing/proSignupBanner';

// Renders blog page with collection of articles and guides
const ArticlesAndGuides: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <LayoutApp>
        <article className="container">
          <ProSignupBanner isPro={session?.user.isPro} />
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
