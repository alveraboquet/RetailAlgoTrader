import HeaderApp from '../header/headerApp';
import FooterApp from '../footer/footerApp';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <HeaderApp />
      <main className="container fs-5">{children}</main>
      <FooterApp />
    </>
  );
};

export default Layout;
