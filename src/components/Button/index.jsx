import { MenuIconButton } from "./styled";

export default function MenuButton({ onClick, children }) {
  return <MenuIconButton onClick={onClick}>{children}</MenuIconButton>;
}
