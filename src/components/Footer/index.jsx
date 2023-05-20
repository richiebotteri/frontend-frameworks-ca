import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconLink } from "../common/IconLink.styled";

import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { FooterContainer } from "./FooterContainer.styled";
import { CopyRightContainer } from "./CopyRightContainer";
import { CopyParagraph } from "./CopyParagraph.styled";

export default function Footer() {
  return (
    <footer>
      <FooterContainer>
        <h2>Who We Are</h2>
        <p>
          SwiftShop is your ultimate destination for all your online shopping
          needs. We strive to provide a seamless and convenient shopping
          experience, offering a wide range of products from top brands at
          competitive prices.
        </p>

        <h2>Support</h2>
        <IconLink href="/ContactPage">
          <FontAwesomeIcon icon={faHeadphones} />
        </IconLink>
      </FooterContainer>
      <CopyRightContainer>
        <CopyParagraph>
          © 2023 Richie Botteri. All rights reserved.{" "}
        </CopyParagraph>
      </CopyRightContainer>
    </footer>
  );
}
