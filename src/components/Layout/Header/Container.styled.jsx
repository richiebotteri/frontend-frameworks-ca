import { styled } from "styled-components";
import mediaQuery from "../../../styles/breakpoint";
import * as flex from "../../../styles/flex.styles";

// Outer Container

export const Header = styled.header`
  ${flex.column};
  ${flex.justifyCenter};
  gap: ${({ theme: { spacing } }) => spacing.gap1};
  padding: ${({ theme: { spacing } }) => spacing.p3};
  width: ${({ theme: { width } }) => width.sectionContainer};
  margin: 0 auto;
  @media ${mediaQuery.tabletSm} {
    ${flex.row};
    ${flex.justifyBetween};
    gap: ${({ theme: { spacing } }) => spacing.gap3};
  }
`;

// Mid Container
export const MobileHeader = styled.div`
  ${flex.row}
  ${flex.justifyBetween}
`;

export const Menu = styled.div`
  display: ${(props) => (props.$isActive === true ? "flex" : "none")};
  flex-direction: column;
  gap: 20px;
  width: 100%;

  @media ${mediaQuery.tabletSm} {
    ${flex.row}
    ${flex.justifyBetween}
  }
`;

// Inner Containers

export const IconLinks = styled.div`
  ${flex.row};
  gap: 10px;
`;

export const LogoSearch = styled.div`
  ${flex.row};
  ${flex.justifyBetween};
`;
