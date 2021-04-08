import { find } from 'lodash'
import { FunctionComponent } from 'react'
import { HeroBlockType } from './blocks/HeroBlock'

export interface BlockType<TConfig> {
  type: string
  component: BlockComponent<TConfig>
  defaultConfig: TConfig
}

export const BlockTypes = [HeroBlockType]

export const getBlockType = (type: string) => {
  return find(BlockTypes, (t) => t.type === type)
}

// TODO: use FullBlockFragment?
export type BlockComponent<TConfig> = FunctionComponent<{
  config: TConfig
  id: string
  type: string
}>
