import Header from '../header/header';
import Footer from '../footer/footer';
import React from 'react';
import SEO from '../SEO/seo';
import JumpTopButton from '../post/jumpTopButton';
import styles from '../../styles/LayoutPost.module.css';
import Link from 'next/link';
import MockSiteBanner from '../mockSiteBanner';

interface Props {
  children: React.ReactNode;
  url: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  keywords: string;
}

// Layout component for blog posts
// Children prop is mdx component with blog post material
const LayoutPost = (props: Props) => {
  return (
    <div className={styles.page}>
      <SEO
        url={props.url}
        openGraphType="article"
        schemaType="article"
        title={props.title}
        description={props.description}
        image={props.image}
        createdAt={props.createdAt}
        updatedAt={props.updatedAt}
        keywords={props.keywords}
      />
      <JumpTopButton />
      <div id="top"></div>
      <MockSiteBanner />
      <Header />
      <div className={`${styles.postContainer}`}>
        <Link href="/blog">
          <a className="text-decoration-none text-dark">
            &larr; Return to Articles
          </a>
        </Link>
        <article className={styles.post}>
          <div>{props.children}</div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPost;
