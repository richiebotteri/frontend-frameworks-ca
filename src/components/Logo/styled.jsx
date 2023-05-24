import { styled } from "styled-components";
import * as flex from "../../styles/flex.styles";
import mediaQuery from "../../styles/breakpoint";

export const LogoLink = styled.a`
  padding: 0 10px;
  margin: 0;
  ${flex.row};
  ${flex.justifyCenter};
  ${flex.alignItemsCenter};
  font-family: ${({ theme: { font } }) => font.primary};
  @media ${mediaQuery.mobilXs} {
    padding: 0;
  }
`;
