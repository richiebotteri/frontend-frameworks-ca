import { styled } from "styled-components";
import * as flex from "../../../styles/flex.styles";
import mediaQuery from "../../../styles/breakpoint";

// Containers

export const CardGrid = styled.div`
  display: grid;
  margin-top: 40px;
  ${flex.justifyCenter}
  grid-template-columns: auto;
  gap: 30px;

  @media ${mediaQuery.tabletSm} {
    grid-template-columns: repeat(2, auto);
    justify-content: none;
  }

  @media ${mediaQuery.tabletMd} {
    grid-template-columns: repeat(2, auto);
  }

  @media ${mediaQuery.laptopLg} {
    grid-template-columns: repeat(3, auto);
  }
`;

export const LinkContainer = styled.a`
  ${flex.column}
  width: 100%;
  max-width: 400px;
  height: 400px;
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media ${mediaQuery.mobilXs} {
    max-width: 300px;
    min-width: 230px;
  }
`;

export const ImageContainer = styled.div`
  width: inherit;
  position: relative;
  ${flex.row}
  ${flex.justifyEnd}
  height: 50%;
`;

export const ContentContainer = styled.div`
  width: inherit;
  padding: 20px;
  ${flex.column}
  ${flex.justifyBetween};
  background-color: #f3f3f3;
  height: 50%;
`;

export const RatingContainer = styled.div`
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

export const RowContainer = styled.div`
  ${flex.row};
  ${flex.justifyBetween};
  ${flex.alignItemsCenter};
  padding-top: 10px;
`;

export const PriceContainer = styled.div`
  ${flex.row};
  ${flex.justifyBetween};
  ${flex.alignItemsEnd};
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
`;

// Image

export const Img = styled.img`
  width: inherit; /* Inherits from card container */
  object-fit: cover;
`;

// Text

const resetSpacing = `
padding: 0;
margin: 0;
`;

export const Title = styled.p`
  font-family: ${({ theme: { font } }) => font.primary};
  font-size: 20px;
  ${resetSpacing};
`;
export const Description = styled.p`
  ${resetSpacing};
`;
export const PriceText = styled.p`
  ${resetSpacing};
  font-family: ${({ theme: { font } }) => font.primary};
  font-size: 24px;
`;

export const DiscountPrice = styled(PriceText)`
  color: #df0707;
`;

export const Del = styled.del`
  color: #666666;
`;
