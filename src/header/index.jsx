import React from 'react'
import { Wrapper, Header, HeadInfo, HeadBg, HeadBgImage } from '../style/style'

export const Head = () => {
  return (
    <Wrapper>
      <Header>
        <HeadInfo>
          <HeadInfo.Title>
            Get the inspiration
            of interior design
            here
          </HeadInfo.Title>
          <HeadInfo.Desc>
            Architecture not only about engineering, it even
            lands to art and aesthetics. With us, you will get
            a residentical design with an extraordinary touch
            of art.
          </HeadInfo.Desc>
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
