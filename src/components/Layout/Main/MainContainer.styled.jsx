import { styled } from "styled-components";

export const MainContainer = styled.div`
  width: ${({ theme: { width } }) => width.sectionContainer};
  padding: ${({ theme: { spacing } }) => spacing.p3};
  padding-bottom: ${({ theme: { spacing } }) => spacing.p4};
  margin: auto;
`;
