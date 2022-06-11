import Header from '../header/header';
import Footer from '../footer/footer';

interface Props {
  children: React.ReactNode;
}

// Layout component for pages that do not require sign-in
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="fs-5">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
