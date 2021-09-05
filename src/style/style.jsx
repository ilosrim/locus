import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Locus } from "../images/locus.svg";
import { ReactComponent as H } from "../images/h.svg";
import Bg from "../images/header-bg-2.png";

// main content
export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

// navbar section //
export const Nav = styled.div`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// navbar brand
Nav.NavBrand = styled.div`
  width: 100px;
`;
Nav.NavBrandLink = styled.a`
  display: flex;
  align-items: center;
`;
Nav.NavLogo = styled(Logo)`
  width: 30%;
  margin-right: 5px;
`;
Nav.NavLocus = styled(Locus)`
  width: 70%;
`;
// navbar items
Nav.NavItems = styled.ul`
  display: flex;
`;
Nav.NavLinks = styled.li`
  list-style: none;
  margin-right: 25px;
`;
export const Link = styled.a`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 22px;
  line-height: 27px;
  color: #404242;
  position: relative;
  ::after {
    content: "";
    width: 70%;
    height: 0;
    background-color: #fec62d;
    position: absolute;
    bottom: -4px;
    left: 15%;
    border-radius: 15px;
    transition: all 0.3s linear;
  }
  :hover {
    color: #58a9a5;
    ::after {
      height: 4px;
    }
  }
`;
// navbar button
export const Button = styled.button`
  padding: 8px 60px;
  background: #58a9a5;
  border-radius: ${({border})=> border ? '15px' : '15px 15px 15px 0'};
  font-family: sans-serif;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
`;

// header section
export const Header = styled.div`
  padding-top: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeadInfo = styled.div`
  width: 50%;
`;
HeadInfo.Title = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 65px;
  line-height: 70px;
  color: #1C2323;
`;
HeadInfo.Desc = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #404242;
  margin: 20px 0;
`;
HeadInfo.Button = styled.button`
  padding: 8px 37px;
  background: #58A9A5;
  border-radius: 20px 20px 20px 0px;
  border: none;
  outline: none;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #FFFFFF;
  cursor: pointer;
`;

export const HeadBg = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Bg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const HeadBgImage = styled(H)`
width: 80%;
`;