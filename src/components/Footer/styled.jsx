import { styled } from "styled-components";
import { Container } from "../../shared/Container";

export const Footer = styled.footer`
  background-color: #eee;
`;

export const CopyRightContainer = styled.div`
  background-color: #eee;
  border-top: 2px solid #acacac;
  padding: ${({ theme: { spacing } }) => spacing.p2} 0;
`;

export const CopyParagraph = styled.p`
  text-align: center;
  font-size: 12px;
  padding: 0;
  margin: 0;
`;

export const footerContainer = styled(Container)`
  padding: ${({ theme: { spacing } }) => spacing.p4} 0;
`;

/* { theme: { spacing } }) => spacing.p3 */
