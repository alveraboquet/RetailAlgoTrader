import HeaderApp from '../header/headerApp';
import FooterApp from '../footer/footerApp';
import NoIndexNoFollowMeta from '../SEO/noIndexNoFollowMeta';
import MockSiteBanner from '../mockSiteBanner';

interface Props {
  children: React.ReactNode;
}

// Layout component for pages that require sign-in
const LayoutApp = ({ children }: Props) => {
  return (
    <>
      <NoIndexNoFollowMeta />
      <MockSiteBanner />
      <HeaderApp />
      <main className="container fs-5">{children}</main>
      <FooterApp />
    </>
  );
};

export default LayoutApp;
