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

  &:focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    outline: none;
  }
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
  background-color: lightgray;
  z-index: 4;
  overflow-y: scroll;
`;
export const SearchResult = styled.a`
  ${flex.row};
  ${flex.alignItemsCenter};
  height: 45px;
  background-color: #fcfcfc;
  padding-left: 20px;
  border-bottom: 1px solid #ebebeb;
  cursor: pointer;

  &p {
    padding: 0;
    margin: 0;
  }

  &:hover,
  &:focus {
    background-color: #ebebeb;
    outline: none;
  }
`;
