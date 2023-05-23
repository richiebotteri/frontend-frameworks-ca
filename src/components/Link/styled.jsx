import { styled } from "styled-components";
import { IconLink } from "../../shared/IconLink/styled";
import * as flex from "../../styles/flex.styles";

export const Cart = styled(IconLink)`
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
  ${flex.justifyCenter};
  ${flex.alignItemsCenter};
`;

export const Contact = styled(IconLink)``;
