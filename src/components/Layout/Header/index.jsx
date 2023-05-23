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
  const [searchQuery, setSearchQuery] = useState("");

  function toggleMenuOnClick() {
    menuToggle === false ? setMenuToggle(true) : setMenuToggle(false);
  }

  function onSearchFormChange(event) {
    const searchInput = event.target;
    const inputSearchQuery = searchInput.value;
    setSearchQuery(inputSearchQuery);
  }

  console.log(searchQuery);

  return (
    <Container.Header>
      <Container.MobileHeader>
        <LogoLink href="/">SwiftShop</LogoLink>
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
        <Search.Form onChange={onSearchFormChange} query={searchQuery}>
          <Search.InputEl
            type="text"
            name="search"
            placeholder="ex: Samsung Galaxy A4"
          />
          <Search.IconEl>
            <FontAwesomeIcon icon={Icon.faMagnifyingGlass} />
          </Search.IconEl>
        </Search.Form>
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
