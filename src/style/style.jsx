import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Locus } from "../images/locus.svg";
import { ReactComponent as H } from "../images/h.svg";
import Bg from "../images/header-bg-2.png";
import WorkBg from "../images/works-bg.png";
// import Play from '../images/play.png';

export const Button = styled.button`
  padding: 8px 60px;
  background: #58a9a5;
  border-radius: ${({ border }) => (border ? "15px" : "15px 15px 15px 0")};
  font-family: sans-serif;
  font-weight: 500;
  font-size: 25px;
  line-height: 37px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: sans-serif;
  font-size: 22px;
  line-height: 27px;
  color: #404242;
  position: relative;
  cursor: pointer;
  margin-right: ${({ mr }) => mr && "auto"};
  margin-top: ${({ mt }) => mt && "20px"};
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

// main content
export const Container = styled.div`
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
// navbar button

// header section
export const Header = styled.div`
  padding-top: 105px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;
export const HeadInfo = styled.div`
  width: 50%;
`;
export const Title = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 65px;
  line-height: 70px;
  color: #1c2323;
  text-align: ${({ center }) => center && "center"};
`;
export const Desc = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  color: #404242;
  margin: 20px 0;
  text-align: ${({ center }) => center && "center"};
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

// works section
export const Work = styled.div`
  margin-top: 105px;
`;
Work.Head = styled.div`
  width: 100%;
  display: flex;
`;
Work.Bg = styled.div`
  height: 300px;
  width: 70%;
  background-image: url(${WorkBg});
  background-position: center;
  background-size: cover;
  border-radius: 8px 0 0 8px;
`;
Work.Text = styled.div`
  width: 30%;
  border-radius: 0 8px 8px 0;
  padding: 50px 90px 70px;
  box-sizing: border-box;
  background-color: #ccf0e6;
`;
Work.Footer = styled.div`
  display: flex;
`;
Work.FooterBg = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Work.FooterBgImage = styled.img`
  width: 100%;
`;
Work.FooterText = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
`
