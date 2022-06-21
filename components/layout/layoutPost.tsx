import Header from '../header/header';
import Footer from '../footer/footer';
import React from 'react';
import SEO from '../SEO/seo';

interface Props {
  children: React.ReactNode;
  url: string;
  title: string;
  description: string;
  image: string;
}

// Layout component for blog posts
// Children prop is mdx component with blog post material
const LayoutPost = (props: Props) => {
  return (
    <div>
      <SEO
        url={props.url}
        openGraphType="website"
        schemaType="website"
        title={props.title}
        description={props.description}
        image={props.image}
      />
      <Header />
      <div className="container">
        <article className="row fs-5 m-2" style={{ color: '#3c484e' }}>
          <div className="container p-0 p-md-5 pt-md-3 pb-md-3 rounded">
            {props.children}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutPost;
