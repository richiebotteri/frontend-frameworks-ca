import { styled } from "styled-components";
import { MainContainer } from "./MainContainer.styled";
import * as flex from "../../../styles/flex.styles";

const StyledMain = styled.main`
  ${flex.column}
  flex: 1;
`;

export default function Main({ children }) {
  return (
    <StyledMain>
      <MainContainer>{children}</MainContainer>
    </StyledMain>
  );
}
