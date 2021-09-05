import React from "react";
import { Wrapper, Work, Title, Desc, Link } from "../style/style";

export const Works = () => {
  return (
    <>
      <Wrapper>
        <Work>
          <Title center>How it works</Title>
          <Desc center>Spice up your space even simpler than you think</Desc>

          <Work.Container>
            <div>
              <Work.Bg />
              <Work.Text>
                We provide design and build for commercial building, interior
                and furniture to improve the better life.
                <Link mr mt>
                  See Video
                </Link>
                <Work.Play></Work.Play>
              </Work.Text>
            </div>
            <div>
              
            </div>
          </Work.Container>
        </Work>
      </Wrapper>
    </>
  );
};
