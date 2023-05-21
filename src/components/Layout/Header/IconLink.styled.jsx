import { styled } from "styled-components";
import { alignItemsCenter, justifyCenter } from "../../../styles/flex.styles";
import { IconLink } from "../../common/IconLink.styled";

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
  ${justifyCenter};
  ${alignItemsCenter};
`;

export const Contact = styled(IconLink)``;
