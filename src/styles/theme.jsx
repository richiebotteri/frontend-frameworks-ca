import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import "@fontsource/roboto";
import "@fontsource/ubuntu/700.css";

const theme = {
  spacing: {
    p1: "var(--p-1)",
    p2: "var(--p-2)",
    p3: "var(--p-3)",
    p4: "var(--p-4)",

    gap1: "var(--flex-gap-1)",
    gap2: "var(--flex-gap-2)",
    gap3: "var(--flex-gap-3)",
  },
  shape: {
    radius: "var(--radius-searchbar)",
    containerWidth: "var(--container)",
    searchWidth: "var(--search)",
  },
  background: {},
  color: {
    icon: "var(--color-dark)",
  },
  font: {
    primary: "ubuntu",
    secondary: "roboto",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  // This tells eslint that "children" is required to be a valid React node
  //  Which includes numbers, strings, elements or an array of these types
  children: PropTypes.node.isRequired,
};

export default Theme;
