import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuIconButton } from "./styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MenuButton({ onClick }) {
  return (
    <MenuIconButton onClick={onClick}>
      <FontAwesomeIcon icon={faBars} />
    </MenuIconButton>
  );
}
