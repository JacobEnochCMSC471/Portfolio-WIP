import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #000000;
  min-height: 65px;
  display: flex;
  justify-content: flex-end;
  padding: 0.2rem calc((100vw - 1000px) / 24);
  z-index: 1;
  margin-left: -30px;
  }
`;

export const NavLink = styled(Link)`
    color: white;
    display: flex;
    align-items: center;
    font-family: "Courier New";
    font-weight: bold;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: hand;
    z-index: 1;
    &.active {
    color: #4d4dff;
  }

  &:hover{
    background-color: white;
    color: black;
`;


export const NavMenu = styled.div`
  display: flex;
  z-index: 1;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

