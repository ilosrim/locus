import React from "react";
import { Container, Desc, Link, Title, Work } from "../style/style";
import WorkImg from "../images/work-img.png";

export const Works = () => {
  return (
    <Container>
      <Title center>How it works</Title>
      <Desc center>Spice up your space even simpler than you think</Desc>

      <Work>
        <Work.Head>
          <Work.Bg />
          <Work.Text>
            <p>
              We provide design and build for commercial building, interior and
              furniture to improve the better life.
            </p>
            <Link> SEE VIDEO</Link>
          </Work.Text>
        </Work.Head>
        <Work.Footer>
          <Work.FooterBg have>
            <Work.FooterBgImage src={WorkImg} />
          </Work.FooterBg>
          <Work.FooterText>
            <Work.FooterTxt>
              <h1>Our mission is to deliver aesthetic visual for your home</h1>
              <p>
                By applying bacis psychology principles, we are going to explain
                how perception works and how we can use this understanding to
                maximise the space that we occupy in our homes.
              </p>
            </Work.FooterTxt>
          </Work.FooterText>
        </Work.Footer>
      </Work>
    </Container>
  );
};
