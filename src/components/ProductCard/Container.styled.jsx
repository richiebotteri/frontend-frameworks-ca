import { styled } from "styled-components";
import * as flex from "../../styles/flex.styles";
import mediaQuery from "../../styles/breakpoint";

export const CardLink = styled.a`
  ${flex.column}
  width: 100%;
  height: 400px;
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media ${mediaQuery.mobilXs} {
    width: 230px;
  }
`;

export const Image = styled.div`
  width: inherit;
  position: relative;
  ${flex.row}
  ${flex.justifyEnd}
  height: 50%;
`;

export const Content = styled.div`
  width: inherit;
  padding: 20px;
  ${flex.column}
  ${flex.justifyBetween};
  background-color: #f3f3f3;
  height: 50%;
`;

export const Rating = styled.div`
  position: absolute;
  width: 70px;
  color: white;
  ${flex.row};
  ${flex.justifyCenter};
  ${flex.alignItemsCenter};
  gap: 5px;
  background-color: #646464;
  font-size: 14px;
`;

export const Row = styled.div`
  ${flex.row};
  ${flex.justifyBetween};
  ${flex.alignItemsCenter};
  padding-top: 10px;
`;

export const Price = styled.div`
  ${flex.row}
  flex-wrap: wrap;
  gap: 10px;
`;
