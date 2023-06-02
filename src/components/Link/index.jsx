import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as i from "@fortawesome/free-solid-svg-icons";
import * as styled from "./styled";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export function CartIconLink() {
  const { state } = useContext(CartContext);
  let cartCount = state.items.length;
  return (
    <>
      <styled.Cart href="/CartPage">
        <FontAwesomeIcon icon={i.faCartShopping} />
        <styled.CartCount count={cartCount}>{cartCount}</styled.CartCount>
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
