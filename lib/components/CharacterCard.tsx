import Image from 'next/image'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import tw from 'twin.macro'
import { CharacterCardFragment } from '../graphql/operations/GetCharacters.graphql'
import { SimpleJson } from './SimpleJson'

const Card = tw.a`
  cursor-pointer
  flex
  flex-col
  overflow-hidden
  rounded
`

const StyledImage = tw(Image)`
  object-cover
`

const ImageContainer = tw.div`
  relative
  h-40
  // aspect-ratio[1]
`

const JsonContainer = tw.div`
  
`

export const CharacterCard: FunctionComponent<{
  character: CharacterCardFragment
}> = ({ character }) => {
  const { id, image, name } = character
  const propsToShow = { name }
  const href = `/characters/${id}`
  return (
    <>
      <Link href={href} passHref>
        <Card>
          <ImageContainer>
            <StyledImage src={image} layout="fill" />
          </ImageContainer>
          <JsonContainer>
            <SimpleJson value={propsToShow} tw="text-xl" />
          </JsonContainer>
        </Card>
      </Link>
    </>
  )
}
