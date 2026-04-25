import { Link } from "react-router-dom";
import { Logo } from "./Logo";

type Props = {
  onLogoClick?: () => void;
};

export const HeaderLogo = ({ onLogoClick }: Props) => {
  return (
    <Link to="/" onClick={onLogoClick}>
      <Logo />
    </Link>
  );
};
