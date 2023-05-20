import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
