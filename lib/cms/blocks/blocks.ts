import { FullBlockFragment } from 'lib/graphql/operations/GetPageBlocks.graphql'
import { find } from 'lodash'
import { FunctionComponent } from 'react'
import { HeroBlockType } from './HeroSimpleCentered/HeroBlock'

export interface BlockType<TConfig> {
  type: string
  Component: BlockComponent<TConfig>
  template: {
    label: string
    defaultItem: { config: TConfig }
    fields: any[]
  }
}

export const BlockTypes = [HeroBlockType]

export const getBlockType = (type: string) => {
  return find(BlockTypes, (t) => t.type === type)
}

// TODO: use FullBlockFragment?
// export type BlockComponent<TConfig> = FunctionComponent<{
//   config: TConfig
//   id: string
//   type: string
// }>

export type BlockComponent<TConfig> = FunctionComponent<{
  data: BlockData<TConfig>
  index: number
  name: string
}>

export type BlockData<TConfig> = Partial<FullBlockFragment> & {
  _template: string
  config: TConfig
}
