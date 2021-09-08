import React from 'react'
import { Navbar } from '../navbar'
import { Head } from '../header'
import { Works } from '../works'
import { Project } from '../project'
import { Testimonal } from '../testimonal'

export const Main = () => {
  return (
    <>
      <Navbar />
      <Head />
      <Works />
      <Project />
      <Testimonal />
    </>
  )
}
