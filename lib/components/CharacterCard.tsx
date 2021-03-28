import { SimpleJson } from 'lib/components/SimpleJson'
import { CharacterCardFragment } from 'lib/graphql/operations/CharacterCard.graphql'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import tw from 'twin.macro'
import { SimpleImage } from './SimpleImage'

const Card = tw.a`
  cursor-pointer
  flex
  flex-col
  overflow-hidden
  rounded
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
          <SimpleImage src={image} aspectRatio={1 / 1} />
          <JsonContainer>
            <SimpleJson value={propsToShow} tw="text-xl" />
          </JsonContainer>
        </Card>
      </Link>
    </>
  )
}
