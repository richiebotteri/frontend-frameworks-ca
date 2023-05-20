import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Container from "./Container.styled";
import { LogoLink } from "./Logo.styled";
import * as Nav from "./Navbar.styled";
import * as Search from "./SearchBar.styled";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import * as IconLink from "./IconLink.styled";
import { MenuToggleButton } from "./MenuToggleButton.styled";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenuOnClick() {
    menuToggle === false ? setMenuToggle(true) : setMenuToggle(false);
  }

  return (
    <Container.Header>
      <Container.MobileHeader>
        <LogoLink href="/">Hello</LogoLink>
        <MenuToggleButton onClick={toggleMenuOnClick}>
          <FontAwesomeIcon icon={Icon.faBars} />
        </MenuToggleButton>
      </Container.MobileHeader>
      <Container.Menu $isActive={menuToggle}>
        <Nav.Nav>
          <Nav.Ul>
            <Nav.Li>
              <Nav.A href="/">Home</Nav.A>
            </Nav.Li>
          </Nav.Ul>
        </Nav.Nav>
        <Container.Search>
          <Search.InputEl />
          <Search.IconEl>
            <FontAwesomeIcon icon={Icon.faMagnifyingGlass} />
          </Search.IconEl>
        </Container.Search>
        <Container.IconLinks>
          <IconLink.Cart href="/CartPage">
            <FontAwesomeIcon icon={Icon.faCartShopping} />
            <IconLink.CartCount />
          </IconLink.Cart>
          <IconLink.Contact href="/ContactPage">
            <FontAwesomeIcon icon={Icon.faHeadphones} />
          </IconLink.Contact>
        </Container.IconLinks>
      </Container.Menu>
    </Container.Header>
  );
}
