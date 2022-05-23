import Header from '../header/header';
import Footer from '../footer/footer';

interface Props {
  children: React.ReactNode;
}

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
