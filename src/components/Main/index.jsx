import { MainContainer } from "./styled";

export default function Main({ children }) {
  return (
    <main>
      <MainContainer>{children}</MainContainer>
    </main>
  );
}
