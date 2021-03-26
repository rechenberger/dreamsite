import React, { FunctionComponent } from 'react'
import tw from 'twin.macro'
import { Hero } from './Hero'

const Layout = tw.div`
  m-8
  flex
  flex-col
  space-y-8
`

export const MainLayout: FunctionComponent<{}> = ({ children }) => {
  return (
    <Layout>
      <Hero />
      {children}
    </Layout>
  )
}
