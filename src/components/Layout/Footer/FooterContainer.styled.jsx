import { styled } from "styled-components";

export const FooterContainer = styled.div`
  width: ${({ theme: { width } }) => width.sectionContainer};
  padding: ${({ theme: { spacing } }) => spacing.p3};
  margin: auto;
`;
