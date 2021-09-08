import React from "react";
import { Container, Desc, Title, Projects, TwoLine } from "../style/style";

export const Project = () => {
  return (
    <Container>
      <Title center>Our project </Title>
      <Desc center>Introducing our first official project</Desc>

      <Projects>
        <TwoLine />
        <Projects.Contents>
          <Projects.Content>
            <Projects.Title>Project Livingroom</Projects.Title>
            <Projects.Text>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </Projects.Text>
            <Projects.Bg one />
          </Projects.Content>

          <Projects.Content>
            <Projects.Bg two />
            <Projects.Title>Project workspace</Projects.Title>
            <Projects.Text>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </Projects.Text>
          </Projects.Content>

          <Projects.Content>
            <Projects.Title>Library</Projects.Title>
            <Projects.Text>
              A simple guide to create the perfect livingro- om for . Night Watc
              works beautifully in a wi- de gamut of arrangements.
            </Projects.Text>
            <Projects.Bg three />
          </Projects.Content>
        </Projects.Contents>
      </Projects>
    </Container>
  );
};
