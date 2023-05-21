import { styled } from "styled-components";
import { IconButton } from "../../common/IconLink.styled";
import mediaQuery from "../../../styles/breakpoint";

export const MenuToggleButton = styled(IconButton)`
  @media ${mediaQuery.tabletSm} {
    display: none;
  }
`;
