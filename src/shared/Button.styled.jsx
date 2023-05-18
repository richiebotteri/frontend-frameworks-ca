import styled from "styled-components";
import * as flex from "./Flex.styles";

export const IconButton = styled.button`
  width: 35px;
  height: 35px;
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
  &svg {
    color: ${({ theme: { color } }) => color.icon};
  }
`;
