import React from 'react'
import { Container, Button, Header, HeadInfo, HeadBg, HeadBgImage, Title, Desc } from '../style/style'

export const Head = () => {
  return (
    <Container>
      <Header>
        <HeadInfo>
          <Title>
            Get the inspiration
            of interior design
            here
          </Title>
          <Desc>
            Architecture not only about engineering, it even
            lands to art and aesthetics. With us, you will get
            a residentical design with an extraordinary touch
            of art.
          </Desc>
          <Button>
            Let's go
          </Button>
        </HeadInfo>
        <HeadBg>
          <HeadBgImage />
        </HeadBg>
      </Header>
    </Container>
  )
}
