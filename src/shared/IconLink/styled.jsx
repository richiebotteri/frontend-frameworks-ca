import styled from "styled-components";
import * as flex from "../../styles/flex.styles";

const sharedStyled = `
  width: 45px;
  height: 45px;
  border-radius: 100%;
  border: 1px solid lightgray;
  ${flex.row};
  ${flex.justifyCenter};
  ${flex.alignItemsCenter};
  background-color: white;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }

  font-size: 18px;
`;

export const IconButton = styled.button`
  ${sharedStyled}
`;

export const IconLink = styled.a`
  ${sharedStyled}
`;
