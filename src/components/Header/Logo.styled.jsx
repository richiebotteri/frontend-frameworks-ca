import styled from "styled-components";
import * as flex from "../../shared/Flex.styles";

export const LogoLink = styled.a`
  padding: 0;
  margin: 0;
  ${flex.row};
  ${flex.justifyCenter};
  ${flex.alignItemsCenter};
  font-family: ${({ theme: { font } }) => font.primary};
`;
