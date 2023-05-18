import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Container from "./Container.styled";
import { LogoLink } from "./Logo.styled";
import * as Navbar from "./Navbar.styled";
import * as Search from "./SearchBar.styled";
import * as Icon from "@fortawesome/free-solid-svg-icons";
import * as IconButton from "./Button.styled";
import { useState } from "react";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleMenuOnClick() {
    menuToggle === false ? setMenuToggle(true) : setMenuToggle(false);
  }

  return (
    <Container.Header>
      <Container.MobileHeader>
        <LogoLink href="#">Hello</LogoLink>
        <IconButton.NavButton onClick={toggleMenuOnClick}>
          <FontAwesomeIcon icon={Icon.faBars} />
        </IconButton.NavButton>
      </Container.MobileHeader>
      <Container.Menu $isActive={menuToggle}>
        <Navbar.Nav>
          <Navbar.Ul>
            <Navbar.Li>
              <Navbar.A>Home</Navbar.A>
            </Navbar.Li>
            <Navbar.Li>
              <Navbar.A>Contact</Navbar.A>
            </Navbar.Li>
          </Navbar.Ul>
        </Navbar.Nav>
        <Container.Search>
          <Search.InputEl />
          <Search.IconEl>
            <FontAwesomeIcon icon={Icon.faMagnifyingGlass} />
          </Search.IconEl>
        </Container.Search>
        <Container.IconButtons>
          <IconButton.Cart>
            <FontAwesomeIcon icon={Icon.faCartShopping} />
            <IconButton.CartCount />
          </IconButton.Cart>
          <IconButton.Contact>
            <FontAwesomeIcon icon={Icon.faHeadphones} />
          </IconButton.Contact>
        </Container.IconButtons>
      </Container.Menu>
    </Container.Header>
  );
}
