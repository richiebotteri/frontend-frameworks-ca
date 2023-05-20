import styled from "styled-components";
import * as flex from "../../styles/flex.styles";
import mediaQuery from "../../styles/breakpoint";

export const Nav = styled.nav`
  font-family: ${({ theme: { font } }) => font.secondary};
  ${flex.row}
  ${flex.alignItemsCenter}
`;

export const Ul = styled.ul`
  ${flex.column}
  margin: 0;
  padding: 0;

  @media ${mediaQuery.tabletSm} {
    ${flex.row};
  }
`;

export const Li = styled.li`
  padding: 20px 20px;

  @media ${mediaQuery.tabletSm} {
    padding: 10px;
  }
`;

export const A = styled.a`
  &:hover {
    text-decoration: 2px underline;
  }
`;
