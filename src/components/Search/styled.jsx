import styled from "styled-components";
import * as flex from "../../styles/flex.styles";
import mediaQuery from "../../styles/breakpoint";

export const SearchForm = styled.form`
  ${flex.row};
  ${flex.alignItemsCenter};
  position: relative;
  width: 100%;
  max-width: 500px;
  @media ${mediaQuery.tabletMd} {
    ${flex.justifyBetween};
  }
`;

export const SearchInput = styled.input`
  border-radius: 40px;
  border: 1px solid lightgray;
  height: 45px;
  padding-left: 20px;
  width: inherit;
  z-index: 5;
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  z-index: 6;
`;

export const SearchResults = styled.div`
  display: ${(props) =>
    props.$isSearch !== "" && props.$isTermMatch === true ? "block" : "none"};
  position: absolute;
  top: 20px;
  width: inherit;
  padding-top: 40px;
  min-height: 45px;
  max-height: 150px;
  border-radius: 0 0 10px 10px;
  border: 1px solid lightgray;
  background-color: lightblue;
  z-index: 4;
  overflow-y: scroll;
`;
export const SearchResult = styled.a`
  ${flex.row};
  ${flex.alignItemsCenter};
  height: 45px;
  background-color: #caf4ff;
  padding-left: 20px;
  border-bottom: 1px solid lightblue;
  cursor: pointer;

  &p {
    padding: 0;
    margin: 0;
  }

  &:hover {
    background-color: #f1fdff;
  }
`;
