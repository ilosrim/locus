import React from "react";
import { Container, Testimonals, TestInfo, Title } from "../style/style";
import Imzo1 from "../images/imzo1.png";
import Imzo2 from "../images/imzo2.png";
import Imzo3 from "../images/imzo3.png";
import Imzo4 from "../images/imzo4.png";
import TestBg from "../images/testbg.png";

export const Testimonal = () => {
  return (
    <Container>
      <Title center>Testimonal</Title>
      <Testimonals>
        <img src={Imzo1} alt="rasm" />
        <img src={Imzo2} alt="rasm" />
        <img src={Imzo3} alt="rasm" />
        <img src={Imzo4} alt="rasm" />
      </Testimonals>
      <TestInfo>
        <TestInfo.Bg>
          <img src={TestBg} alt="rasm" />
        </TestInfo.Bg>
        <TestInfo.Text>
          <TestInfo.Top>
            <TestInfo.TopInfo>
              <h3>105</h3>
              <p>project done</p>
            </TestInfo.TopInfo>
            <TestInfo.TopInfo>
              <h3>12</h3>
              <p>years of exprince</p>
            </TestInfo.TopInfo>
            <TestInfo.TopInfo>
              <h3>10+</h3>
              <p>big company partnership</p>
            </TestInfo.TopInfo>
          </TestInfo.Top>
          <TestInfo.Bottom>
            <h4>
              "Not able to tell you how happy I am with interior design.
              Interior design has completely surpassed our expectations.
              Interior design saved my business. Interior design is worth much
              more than I paid." - Roscoe
            </h4>
            <p>- Roscoe</p>
          </TestInfo.Bottom>
        </TestInfo.Text>
      </TestInfo>
    </Container>
  );
};
