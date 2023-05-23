import { styled } from "styled-components";
import { IconButton } from "../../shared/IconLink/styled";
import mediaQuery from "../../styles/breakpoint";

export const MenuIconButton = styled(IconButton)`
  @media ${mediaQuery.tabletMd} {
    display: none;
  }
`;
