import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  background-color: papayawhip;
`;

const teal = "#008080";
const coral = "#FF6B6B";

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

  top: 0;
  left: 0;
  width: 90%;

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

export const NavbarLink = styled.li`
  color: ${teal};
  text-decoration: none;
  cursor: pointer;
  list-style: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
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

// Sign up Form

export const SignUpWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin-right: 20px;
  margin-left: 20px;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const FormWrapper = styled.div`
  max-width: 400px;
  margin: 5rem auto;

  @media screen and (max-width: 576px) {
    max-width: 200px;
    margin: 5rem auto;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: white;
  font-weight: bold;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ff6b6b;
  font-family: "Courier Prime", sans-serif;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  background-color: ${teal};
  color: white;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  // font-weight: bold;
  font-family: "Courier Prime", sans-serif;

  &:hover {
    background: white;
    color: ${teal};
  }
`;

export const Pwrapper = styled.p`
position: absolute,
top: 50%,
left: 50%,
transform: translate(-50%, -50%)
`;

// Login Form
export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${teal};
  color: white;
  margin: 5rem;
  padding: 20px;

  border: 2px solid ${borderColor};

  @media screen and (max-width: 992px) {
    margin: 1rem;
  }

  @media screen and (max-width: 576px) {
    margin: 1rem;
  }
`;

// Profile Page
export const ProfileContainer = styled.div`
  display: flex;
  width: 80%;
  // max-width: 600px;
  margin: 0 auto;
  border: 0.1px solid ${teal};
  border-radius: 3rem;
  justify-content: center;
  padding: 2rem;
  // align-items: center;
  height: 100vh;
`;
export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid ${coral};
`;
