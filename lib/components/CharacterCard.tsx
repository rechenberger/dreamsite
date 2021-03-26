import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import tw from 'twin.macro'
import { CharacterCardFragment } from '../graphql/operations/GetCharacters.graphql'
import { SimpleJson } from './SimpleJson'

const Card = tw.div`
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
  return (
    <>
      <Card>
        <ImageContainer>
          <StyledImage src={image} layout="fill" />
        </ImageContainer>
        <JsonContainer>
          <SimpleJson value={propsToShow} tw="text-xl" />
        </JsonContainer>
      </Card>
    </>
  )
}
