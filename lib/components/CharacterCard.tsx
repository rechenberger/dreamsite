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

const Name = tw.div`
  p-2
  bg-gray-800
  truncate
  text-purple-400
  text-center
  group-hover:underline
`

export const CharacterCard: FunctionComponent<{
  character: CharacterCardFragment
}> = ({ character }) => {
  const { id, image, name } = character
  const href = `/characters/${id}`
  return (
    <>
      <Link href={href} passHref>
        <Card className="group">
          <SimpleImage src={image} aspectRatio={1 / 1} />
          <Name>{name}</Name>
        </Card>
      </Link>
    </>
  )
}
