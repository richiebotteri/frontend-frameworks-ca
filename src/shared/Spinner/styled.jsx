import { styled } from "styled-components";

export const SpinnerContainer = styled.div`
  display: ${(props) => (props.$isLoading === true ? "block" : "none")};
  border: 16px solid #f3f3f3;
  border-top: 16px solid #707070;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 2s linear infinite;
`;
