import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: papayawhip;
`;

const teal = "#008080";

// Styled components for the navigation bar
export const NavbarWrapper = styled.div.attrs((props) => ({
  // Filter out the 'isOpen' prop
  isOpen: undefined
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  z-index: 100;
  transition: background-color 0.3s ease;

  @media screen and (max-width: 768px) {
    background-color: ${(props) => (props.isOpen ? "white" : "transparent")};
    transition: background-color 0.3s ease;
  }
`;

export const NavbarLogo = styled.a`
  font-size: 1.5rem;
  color: ${teal};
  text-decoration: none;
  font-weight: bold;
`;

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    width: 100%;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 101;
  }
`;

export const NavbarLink = styled.a`
  color: ${teal};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const HamburgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${teal};
  margin: 3px 0;
  transition: transform 0.3s ease;

  ${(props) =>
    props.isOpen &&
    `
    &:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }
  `}
`;

//Styled Components for the HomePage
const borderColor = "#333"; // Color that pairs well with teal

// Styled components for the grid
export const HomePageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  grid-gap: 20px;
  margin-top: 50px;
  margin-right: 20px;
  margin-left: 20px;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4.5, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto; // Each grid item takes up one row
  }
`;

export const GridItem = styled.div`
  background-color: ${teal};
  color: white;
  padding: 20px;

  border: 2px solid ${borderColor};

  @media screen and (max-width: 992px) {
    grid-column: span 2;
    grid-row: span 1;
  }

  @media screen and (max-width: 576px) {
    grid-column: span 1;
    grid-row: span 1;
  }
`;
