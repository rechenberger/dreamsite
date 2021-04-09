import { FullBlockFragment } from 'lib/graphql/operations/GetPageBlocks.graphql'
import React, { FunctionComponent } from 'react'
import { getBlockType } from './blocks'

export const Block: FunctionComponent<{ block: FullBlockFragment }> = ({
  block,
}) => {
  const { type } = block
  const blockType = getBlockType(type)
  const Component = blockType.Component
  return <Component {...block} />
}
