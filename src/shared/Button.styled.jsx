import styled from "styled-components";
import * as flex from "./Flex.styles";

export const IconButton = styled.button`
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
  &svg {
    color: ${({ theme: { color } }) => color.icon};
  }
`;
