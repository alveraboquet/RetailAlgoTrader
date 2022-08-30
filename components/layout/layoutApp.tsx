import HeaderApp from '../header/headerApp';
import FooterApp from '../footer/footerApp';
import Script from 'next/script';

interface Props {
  children: React.ReactNode;
}

// Layout component for pages that require sign-in
const LayoutApp = ({ children }: Props) => {
  return (
    <>
      <HeaderApp />
      <Script
        src="https://js.stripe.com/v3"
        async
        crossOrigin="true"
        strategy="lazyOnload"
      />
      <main className="container fs-5">{children}</main>
      <FooterApp />
    </>
  );
};

export default LayoutApp;
