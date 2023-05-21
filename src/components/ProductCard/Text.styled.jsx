import { styled } from "styled-components";

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
  padding-top: 20px;
`;
export const Price = styled.p`
  ${resetSpacing};
  font-family: ${({ theme: { font } }) => font.primary};
  font-size: 24px;
`;

export const DiscountPrice = styled(Price)`
  color: #df0707;
`;

export const Del = styled.del`
  color: #666666;
`;
