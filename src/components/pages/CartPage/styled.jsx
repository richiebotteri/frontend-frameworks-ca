import { styled } from "styled-components";
import * as flex from "../../../styles/flex.styles";
import mediaQuery from "../../../styles/breakpoint";
import { IconButton } from "../../../shared/IconLink/styled";

export const CartParentContainer = styled.div`
  min-width: fit-content;
  max-width: 700px;
  ${flex.column};
`;

export const emptyCartCtnr = styled.div`
  ${flex.row};
  ${flex.justifyCenter};
  ${flex.alignItemsCenter};
  flex: 1;
  color: #636363;
`;

export const CheckoutContainer = styled.div`
  ${flex.column};
  padding: 40px;
  border: 1px solid #ebebeb;
  background-color: #fcfcfc;
`;

export const CheckoutButton = styled(IconButton)`
  width: 100%;
  padding: 20px;
  border-radius: 40px;
  background-color: #ff9e9e;
  border: none;
  font-family: "ubuntu";

  &:hover {
    background-color: #f88e8e;
  }
`;

export const CheckoutPriceCtnr = styled.div`
  ${flex.row};
  ${flex.justifyBetween};
  ${flex.alignItemsEnd};
  border-bottom: 2px solid lightgray;
  margin-bottom: 40px;
  h2,
  p {
    font-size: 24px;
    font-family: "ubuntu";
    margin-bottom: 15px;
  }
`;

export const CartContainer = styled.div`
  ${flex.column}
  gap: 20px;
  background-color: lightgray;
  padding: 20px;
  overflow: scroll;
  min-height: 200px;
  max-height: 500px;
`;

export const CartItemCntr = styled.div`
  padding: 20px;
  border: 1px solid #ebebeb;
  border-bottom: 2px solid #c8c8c8;
  background-color: #fcfcfc;
  ${flex.column}
  gap: 20px;

  @media ${mediaQuery.tabletSm} {
    ${flex.row}
  }
`;

export const CartItemImgCntr = styled.div`
  display: none;
  width: 150px;
  height: 150px;
  background-color: lightgray;

  @media ${mediaQuery.tabletSm} {
    display: block;
  }
`;

export const CartItemContent = styled.div`
  ${flex.column}
  ${flex.justifyBetween}
  gap: 20px;
  flex: 1;
  > * {
    margin: 0;
  }
`;
export const QuantityTrashCtnr = styled.div`
  ${flex.row}
  ${flex.alignItemsEnd}
  ${flex.justifyBetween}
  gap: 20px;
`;

export const QuantityContainer = styled.div`
  ${flex.row}
  ${flex.alignItemsCenter}
gap: 5px;
`;

export const TitleLinkCtnr = styled.div`
  ${flex.row}
  ${flex.alignItemsCenter}
gap: 10px;
`;

export const Title = styled.h3`
  padding: 0;
  margin: 0;
`;

export const QuantityCounter = styled.div`
  width: 35px;
  height: 35px;
  ${flex.row}
  ${flex.alignItemsCenter}
${flex.justifyCenter}
border: 1px solid lightgray;
`;
