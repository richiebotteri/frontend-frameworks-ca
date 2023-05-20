import { PropTypes } from "prop-types";
import Header from "../Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
