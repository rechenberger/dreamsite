import { map } from 'lodash'
import Link from 'next/link'
import React from 'react'
import tw from 'twin.macro'
import { MainLayout } from '../lib/components/MainLayout'

const Container = tw.div`
  flex
  flex-col
  self-center
`

const StyledLink = tw.a`
  cursor-pointer
  hover:underline
  text-purple-500
`

export default function Home() {
  const links = [
    {
      label: 'Characters',
      href: '/characters',
    },
    // {
    //   label: 'Episodes',
    //   href: '/episodes',
    // },
  ]
  return (
    <MainLayout>
      <Container>
        {map(links, ({ label, href }) => (
          <Link href={href}>
            <StyledLink>{label}</StyledLink>
          </Link>
        ))}
      </Container>
    </MainLayout>
  )
}
