import React from "react";
import { Button, Container, Desc, LeftSec, RightSec, Title, TwoLine } from "../style/style";

export const Contact = () => {
  return (
    <Container flex>
      <LeftSec>
        <Title>Contact Us</Title>
        <Desc>Have any questions? Want help before getting started?</Desc>
        <TwoLine />
      </LeftSec>
      <RightSec>
        <input type="text" placeholder='Full name'/>
        <input type="text" placeholder='Email address'/>
        <textarea placeholder='Description' cols="30" rows="2"></textarea>
        <Button ml>Send now</Button>
      </RightSec>
    </Container>
  );
};
