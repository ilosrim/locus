import React from 'react'
import { Wrapper, Header, HeadInfo, HeadBg, HeadBgImage, Title, Desc } from '../style/style'

export const Head = () => {
  return (
    <Wrapper>
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
          <HeadInfo.Button>
            Let's go
          </HeadInfo.Button>
        </HeadInfo>
        <HeadBg>
          <HeadBgImage />
        </HeadBg>
      </Header>
    </Wrapper>
  )
}
