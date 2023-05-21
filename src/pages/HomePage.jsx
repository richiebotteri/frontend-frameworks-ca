import { styled } from "styled-components";
import * as grid from "../styles/flex.styles";
import ProductCard from "../components/ProductCard";
import mediaQuery from "../styles/breakpoint";

const ProductGrid = styled.div`
  margin-top: 40px;
  display: grid;
  ${grid.justifyCenter}
  grid-template-columns: auto;
  gap: 30px;

  @media ${mediaQuery.tabletSm} {
    grid-template-columns: repeat(2, auto);
    justify-content: none;
  }

  @media ${mediaQuery.tabletMd} {
    grid-template-columns: repeat(2, auto);
  }

  @media ${mediaQuery.laptopLg} {
    grid-template-columns: repeat(3, auto);
  }
`;

export default function HomePage() {
  return (
    <>
      <h1>See our Products!</h1>
      <ProductGrid>
        <ProductCard />
      </ProductGrid>
    </>
  );
}
