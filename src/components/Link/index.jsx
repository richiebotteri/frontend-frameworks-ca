import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as i from "@fortawesome/free-solid-svg-icons";
import * as styled from "./styled";

export function CartIconLink() {
  return (
    <>
      <styled.Cart href="/CartPage">
        <FontAwesomeIcon icon={i.faCartShopping} />
        <styled.CartCount />
      </styled.Cart>
    </>
  );
}

export function ContactIconLink() {
  return (
    <>
      <styled.Contact href="/ContactPage">
        <FontAwesomeIcon icon={i.faHeadphones} />
      </styled.Contact>
    </>
  );
}
