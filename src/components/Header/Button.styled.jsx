import { styled } from "styled-components";
import { IconButton } from "../../shared/Button.styled";
import { alignItemsCenter, justifyCenter } from "../../shared/Flex.styles";
import mediaQuery from "../../styles/breakpoint";

export const Cart = styled(IconButton)`
  position: relative;
`;

export const CartCount = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background-color: black;
  border-radius: 100%;
  color: white;
  font-size: 10px;
  font-weight: bold;
  display: none;
  ${justifyCenter};
  ${alignItemsCenter};
`;

export const Contact = styled(IconButton)``;

export const NavButton = styled(IconButton)`
  @media ${mediaQuery.tabletSm} {
    display: none;
  }
`;
