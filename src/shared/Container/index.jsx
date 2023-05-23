import { styled } from "styled-components";

export const Container = styled.div`
  width: ${({ theme: { width } }) => width.sectionContainer};
  margin: 0 auto;
`;
