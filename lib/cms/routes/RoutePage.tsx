import { RouteWithBlocksFragment } from 'lib/graphql/operations/GetPageBlocks.graphql'
import React, { FunctionComponent } from 'react'
import { Block } from '../blocks/Block'

export const RoutePage: FunctionComponent<{
  routePage: RouteWithBlocksFragment
}> = ({ routePage }) => {
  const blocks = routePage.blocks
  return (
    <>
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </>
  )
}
