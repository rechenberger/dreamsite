import { find } from 'lodash'
import { FunctionComponent } from 'react'
import { HeroBlockType } from './HeroBlock'

export interface BlockType<TConfig> {
  type: string
  component: FunctionComponent<any>
  defaultConfig: TConfig
}

export const BlockTypes = [HeroBlockType]

export const getBlockType = (type: string) => {
  return find(BlockTypes, (t) => t.type === type)
}
