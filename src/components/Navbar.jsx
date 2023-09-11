import { useState } from "react";

import {
  NavbarWrapper,
  NavbarLogo,
  HamburgerMenu,
  HamburgerLine,
  NavbarLinks,
  NavbarLink
} from "../components/styled/styled";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleNavbar = () => {
    setIsOpened(!isOpened);
  };

  return (
    <NavbarWrapper isOpen={isOpened}>
      <NavbarLogo href="#">Your Logo</NavbarLogo>
      <HamburgerMenu onClick={toggleNavbar}>
        <HamburgerLine isOpen={isOpened} />
        <HamburgerLine isOpen={isOpened} />
        <HamburgerLine isOpen={isOpened} />
      </HamburgerMenu>
      <NavbarLinks isOpen={isOpened}>
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink href="#">Profile</NavbarLink>
        <NavbarLink href="#">Projects</NavbarLink>
        <NavbarLink href="#">Log In</NavbarLink>
        <NavbarLink href="#">Log Out</NavbarLink>
        <NavbarLink href="#">Sign Up</NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
