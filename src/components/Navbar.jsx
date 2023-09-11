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
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper isOpen={isOpen}>
      <NavbarLogo href="#">Your Logo</NavbarLogo>
      <HamburgerMenu onClick={toggleNavbar}>
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
        <HamburgerLine isOpen={isOpen} />
      </HamburgerMenu>
      <NavbarLinks isOpen={isOpen}>
        <NavbarLink href="#">Home</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
