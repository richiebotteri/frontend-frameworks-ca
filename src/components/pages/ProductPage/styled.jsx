import { styled } from "styled-components";
import { Container } from "../../../shared/Container";
import * as flex from "../../../styles/flex.styles";
import { IconButton, IconLink } from "../../../shared/IconLink/styled";
import { Description } from "../HomePage/styled";
import mediaQuery from "../../../styles/breakpoint";

export const ProductContainer = styled(Container)`
  height: auto;
  min-width: 270px;
  ${flex.column};
  border: 1px solid #ebebeb;
  @media ${mediaQuery.tabletMd} {
    height: 450px;
    ${flex.row};
  }
`;
export const ImgContainer = styled.div`
  width: 100%;
  max-height: 500px;
  background-color: lightgray;
  @media ${mediaQuery.tabletMd} {
    width: 60%;
    ${flex.row};
  }
`;

export const ContentContainer = styled.div`
  ${flex.column};
  ${flex.justifyBetween};
  flex: 1;
  padding: 40px 20px;
  gap: 30px;
  background-color: #fcfcfc;
  @media ${mediaQuery.tabletSm} {
    padding: 40px;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const sharedStyles = `
width: 100%;
padding: 20px;
border-radius: 40px;
background-color: #fffaef;
`;

export const CheckoutLink = styled(IconLink)`
  ${sharedStyles}
`;

export const AddToCartButton = styled(IconButton)`
  ${sharedStyles}
`;

export const PriceContainer = styled.div`
  ${flex.row};
  ${flex.alignItemsEnd};
  ${flex.justifyBetween};
  gap: 10px;
  border-bottom: 2px solid black;
  padding-bottom: 20px;
`;

export const DiscountPercentage = styled.p`
  width: fit-content;
  text-align: center;
  height: fit-content;
  padding: 10px;
  margin: 0;
  background-color: #f39595;
  font-size: 16px;
  font-family: "Ubuntu";
  top: 0;
  right: 0;
`;

export const ProductDescription = styled(Description)`
  font-size: 18px;
  line-height: 1.5rem;
`;

export const TextLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-family: "ubuntu";
`;

export const ReviewParentContainer = styled.div`
  ${flex.column};
  gap: 20px;
  margin-top: 20px;
`;

export const ReviewContainer = styled(Container)`
  padding: 20px;
  background-color: #fcfcfc;
  border: 1px solid #ebebeb;

  @media ${mediaQuery.tabletSm} {
    padding: 20px 40px;
  }
`;

export const ReviewTop = styled.div`
  ${flex.row};
  gap: 20px;
  border-bottom: 3px solid black;
  > * {
    margin: 10px 0;
  }
`;
