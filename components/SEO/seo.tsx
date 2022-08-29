import PropTypes from 'prop-types';
import Head from 'next/head';
import settings from './seoSettings';
import Script from 'next/script';
import escape from 'escape-html';

interface Props {
  openGraphType: string;
  url: string;
  title: string;
  description: string;
  image: string;
  createdAt?: string;
  updatedAt?: string;
  schemaType: string;
  keywords: string;
}

// Creates all social tags to be used with SEO component
// https://cheatcode.co/tutorials/how-to-handle-seo-metadata-in-next-js
const socialTags = ({
  openGraphType,
  url,
  title,
  description,
  image,
  createdAt,
  updatedAt,
}: Props) => {
  const metaTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:site',
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    {
      name: 'twitter:creator',
      content:
        settings &&
        settings.meta &&
        settings.meta.social &&
        settings.meta.social.twitter,
    },
    { name: 'twitter:image:src', content: image },
    { name: 'og:title', content: title },
    { name: 'og:type', content: openGraphType },
    { name: 'og:url', content: url },
    { name: 'og:image', content: image },
    { name: 'og:description', content: description },
    {
      name: 'og:site_name',
      content: settings && settings.meta && settings.meta.title,
    },
    {
      name: 'og:published_time',
      content: createdAt || new Date().toISOString(),
    },
    {
      name: 'og:modified_time',
      content: updatedAt || new Date().toISOString(),
    },
  ];

  return metaTags;
};

// Creates SEO component to be used on all internat-facing pages
// https://cheatcode.co/tutorials/how-to-handle-seo-metadata-in-next-js
const SEO = (props: Props) => {
  const { url, title, description, image, schemaType, keywords } = props;

  // This line required to remove title element receiving array warning
  // https://github.com/vercel/next.js/discussions/38256
  const stringTitle = `${title} | ezMTO`;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={keywords} key="keywords" />
        <meta name="author" content="Matt Laux" key="author" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        <title>{stringTitle}</title>
        <meta name="description" content={description} />
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={image} />
        {socialTags(props).map(({ name, content }) => {
          return <meta key={name} name={name} content={content} />;
        })}
      </Head>
      <Script
        id="ld_json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'http://schema.org',
            '@type': escape(schemaType),
            name: escape(title),
            about: escape(description),
            url: escape(url),
          }),
        }}
      />
    </>
  );
};

SEO.defaultProps = {
  url: 'https://retailalgotrader.com',
  openGraphType: 'website',
  schemaType: 'Article',
  title: settings && settings.meta && settings.meta.title,
  description: settings && settings.meta && settings.meta.description,
  image:
    settings &&
    settings.meta &&
    settings.meta.social &&
    settings.meta.social.graphic,
};

SEO.propTypes = {
  url: PropTypes.string,
  openGraphType: PropTypes.string,
  schemaType: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
