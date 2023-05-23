import Logo from "../Logo";
import Nav from "../Nav";
import Search from "../Search";
import * as iconLink from "../Link";
import * as c from "./styled";
import { useState } from "react";
import MenuButton from "../Button";

// c = container

export default function Header({ test }) {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenuOnClick() {
    menuToggle === false ? setMenuToggle(true) : setMenuToggle(false);
  }

  return (
    <c.Header onChange={test}>
      <c.MobileHeader>
        <Logo>SwiftShop</Logo>
        <MenuButton onClick={toggleMenuOnClick}>Bare</MenuButton>
      </c.MobileHeader>
      <c.Menu $isActive={menuToggle}>
        <Nav />
        <Search />
        <c.IconLinks>
          <iconLink.CartIconLink />
          <iconLink.ContactIconLink />
        </c.IconLinks>
      </c.Menu>
    </c.Header>
  );
}
