import { LogoLink } from "./styled";

export default function Logo({ children, href }) {
  return <LogoLink href={href}>{children}</LogoLink>;
}
