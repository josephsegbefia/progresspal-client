import { useState } from "react";
// import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

import {
  NavbarWrapper,
  NavbarLogo,
  HamburgerMenu,
  HamburgerLine,
  NavbarLinks,
  NavbarLink,
  LinkItem
} from "../components/styled/styled";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  const toggleNavbar = () => {
    setIsOpened(!isOpened);
  };

  return (
    <NavbarWrapper isOpen={isOpened}>
      <NavbarLogo href="#">ProgressApp</NavbarLogo>
      <HamburgerMenu onClick={toggleNavbar}>
        <HamburgerLine isOpen={isOpened} />
        <HamburgerLine isOpen={isOpened} />
        <HamburgerLine isOpen={isOpened} />
      </HamburgerMenu>
      <NavbarLinks isOpen={isOpened}>
        <LinkItem to="/">
          <NavbarLink>Home</NavbarLink>
        </LinkItem>

        {isLoggedIn && (
          <>
            <LinkItem to="/profile">
              <NavbarLink>Profile</NavbarLink>
            </LinkItem>
            <LinkItem to="/projects">
              <NavbarLink>Projects</NavbarLink>
            </LinkItem>
            <LinkItem>
              <NavbarLink>Log out</NavbarLink>
            </LinkItem>
          </>
        )}

        {!isLoggedIn && (
          <>
            <LinkItem to="/login">
              <NavbarLink>Log In</NavbarLink>
            </LinkItem>
            <LinkItem to="/signup">
              <NavbarLink>Sign Up</NavbarLink>
            </LinkItem>
          </>
        )}
      </NavbarLinks>
    </NavbarWrapper>
  );
};

export default Navbar;
