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
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
`;
