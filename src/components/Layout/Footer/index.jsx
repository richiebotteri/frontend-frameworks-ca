import { FooterContainer } from "./FooterContainer.styled";
import { CopyRightContainer } from "./CopyRightContainer";
import { CopyParagraph } from "./CopyParagraph.styled";
import { styled } from "styled-components";

const StyledFooter = styled.footer`
  background-color: #eee;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer>
        <h2>Who We Are</h2>
        <p>
          SwiftShop is your ultimate destination for all your online shopping
          needs. We strive to provide a seamless and convenient shopping
          experience, offering a wide range of products from top brands at
          competitive prices.
        </p>
      </FooterContainer>
      <CopyRightContainer>
        <CopyParagraph>
          © 2023 Richie Botteri. All rights reserved.
        </CopyParagraph>
      </CopyRightContainer>
    </StyledFooter>
  );
}
