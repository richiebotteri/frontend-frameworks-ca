import { styled } from "styled-components";
import * as flex from "../../shared/Flex.styles";

export const CardLink = styled.a`
  display: inline-block;
  width: 230px;
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.div`
  width: inherit;
  position: relative;
  ${flex.row}
  ${flex.justifyEnd}
`;

export const Content = styled.div`
  width: inherit;
  padding: 20px;
  ${flex.column}
  background-color: #f3f3f3;
`;

export const Discount = styled.div`
  width: 60px;
  height: 40px;
  background-color: lightgreen;
  ${flex.row}
  ${flex.justifyCenter}
${flex.alignItemsCenter}
position: absolute;
  top: 0;
`;

export const Rating = styled.div`
  padding-top: 10px;
`;

export const Row = styled.div`
  ${flex.row};
  ${flex.justifyBetween};
  ${flex.alignItemsCenter};
  padding-top: 10px;
`;

export const Price = styled.div`
  ${flex.row}
  gap: 10px;
`;
