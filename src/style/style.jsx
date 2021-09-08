import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Locus } from "../images/locus.svg";
import { ReactComponent as H } from "../images/h.svg";
import Bg from "../images/header-bg-2.png";
import WorkBg from "../images/works-bg.png";
// import Play from '../images/play.png';
import Pro1 from "../images/pro1.png";
import Pro2 from "../images/pro2.png";
import Pro3 from "../images/pro3.png";

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
  margin-right: ${({ ml }) => ml && "auto"};
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
  display: ${({ flex }) => (flex ? "flex" : "block")};
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
  margin: 100px 0;
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
  padding: 50px 40px 70px;
  box-sizing: border-box;
  background-color: #ccf0e6;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #486958;
  }
`;
Work.Footer = styled.div`
  display: flex;
  margin-top: 100px;
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
  height: 100%;
`;
Work.FooterText = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
`;
Work.FooterTxt = styled.div`
  width: 100%;
  height: 100%;
  padding: 55px 30px;
  h1 {
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 60px;
    color: #1c2323;
  }
  p {
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    color: #486958;
  }
`;

// project section
export const TwoLine = styled.div`
  width: 100px;
  height: 15px;
  border-top: 5px solid #58a9a5;
  border-bottom: 5px solid #58a9a5;
  text-align: center;
  margin: 50px 0 90px;
`;
export const Projects = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
`;
Projects.Contents = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;
Projects.Content = styled.div`
  width: 350px;
  height: 600px;
`;
Projects.Title = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 60px;
  color: #58a9a5;
`;
Projects.Text = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #486958;
`;

Projects.Bg = styled.div`
  width: 350px;
  height: 350px;
  background-image: ${(props) =>
    props.one
      ? `url(${Pro1})`
      : props.two
      ? `url(${Pro2})`
      : props.three && `url(${Pro3})`};
  background-size: cover;
  margin-top: 25px;
`;

// testimonal section
export const Testimonals = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const TestInfo = styled.div`
  width: 100%;
  display: flex;
  margin: 100px 0;
`;
TestInfo.Bg = styled.div`
  width: 35%;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
  }
`;
TestInfo.Text = styled.div`
  width: 65%;
  background-color: #ccf0e6;
  box-sizing: border-box;
`;
TestInfo.Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 80px;
`;
TestInfo.TopInfo = styled.div`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 70px;
  line-height: 105px;
  color: #58a9a5;
  h3 {
    font-size: 70px;
    margin: 0;
  }
  p {
    font-size: 20px;
    margin: 0;
  }
`;
TestInfo.Bottom = styled.div`
  padding: 0 80px;
  h4,
  p {
    margin: 0;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 37px;
    color: #000;
  }
  p {
    color: #486958;
    font-style: italic;
    margin-top: 15px;
  }
`;

// contact section
export const LeftSec = styled.div`
  width: 35%;
  margin-bottom: 100px;
`;
export const RightSec = styled.div`
  width: 65%;
  height: 400px;
  border: 1px solid #486958;
  padding: 40px;
  margin-bottom: 100px;
  input,
  textarea {
    width: 99%;
    border: none;
    outline: none;
    padding: 25px 15px;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 37px;
    color: #486958;
    ::placeholder {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 37px;
      color: #486958;
    }
  }
`;
