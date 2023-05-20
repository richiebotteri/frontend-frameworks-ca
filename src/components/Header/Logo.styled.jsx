import styled from "styled-components";
import * as flex from "../../styles/flex.styles";

export const LogoLink = styled.a`
  padding: 0 20px;
  margin: 0;
  ${flex.row};
  ${flex.justifyCenter};
  ${flex.alignItemsCenter};
  font-family: ${({ theme: { font } }) => font.primary};
`;
