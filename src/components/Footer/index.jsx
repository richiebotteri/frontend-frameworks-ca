import * as styled from "./styled";

export default function Footer() {
  return (
    <styled.Footer>
      <styled.footerContainer>
        <h2>Who We Are</h2>
        <p>
          SwiftShop is your ultimate destination for all your online shopping
          needs. We strive to provide a seamless and convenient shopping
          experience, offering a wide range of products from top brands at
          competitive prices.
        </p>
      </styled.footerContainer>
      <styled.CopyRightContainer>
        <styled.CopyParagraph>
          © 2023 Richie Botteri. All rights reserved.
        </styled.CopyParagraph>
      </styled.CopyRightContainer>
    </styled.Footer>
  );
}
