import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import tw from 'twin.macro'

const Container = tw.a`
  cursor-pointer
  flex
  flex-col
  m-8
  space-y-2
  items-center
`
const Title = tw.h1`
  text-5xl
  tracking-wide
  bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500
`

export const Hero: FunctionComponent<{}> = () => {
  return (
    <Link href="/">
      <Container>
        <Image src="/images/logo.png" height={200} width={200} />
        <Title>DreamSite</Title>
      </Container>
    </Link>
  )
}
