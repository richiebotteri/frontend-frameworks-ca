import { styled } from "styled-components";
import { Container } from "../../shared/Container";
import mediaQuery from "../../styles/breakpoint";

export const MainContainer = styled(Container)`
  padding: 20px;

  @media ${mediaQuery.tabletSm} {
    padding: 40px 0;
  }
`;
