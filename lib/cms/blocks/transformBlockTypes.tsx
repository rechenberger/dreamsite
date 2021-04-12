import { keyBy, map } from 'lodash'
import React, { FunctionComponent } from 'react'
import { BlocksControls } from 'react-tinacms-inline'
import { BlockComponentProps, BlockType } from './Block.types'

const BlockWithControls: FunctionComponent<{
  blockProps: BlockComponentProps<any>
  blockType: BlockType<any>
}> = ({ blockProps, blockType }) => {
  return (
    <>
      <BlocksControls index={blockProps.index}>
        <blockType.Component {...blockProps} />
      </BlocksControls>
    </>
  )
}

export const transformBlockTypes = (blockTypes: BlockType<any>[]) => {
  const blockTypesWithControls = map(blockTypes, (blockType) => {
    return {
      ...blockType,
      Component: (blockProps) => (
        <BlockWithControls blockProps={blockProps} blockType={blockType} />
      ),
    }
  })

  const blocksByKey = keyBy(blockTypesWithControls, ({ type }) => type)

  return blocksByKey
}
