import React from 'react'
import { BlockComponent, BlockType } from '../blocks'

export interface HeroBlockConfig {
  mainText: string
}

const HeroBlock: BlockComponent<HeroBlockConfig> = ({ config }) => {
  const { mainText } = config
  return (
    <>
      <h1>{mainText}</h1>
    </>
  )
}

export const HeroBlockType: BlockType<HeroBlockConfig> = {
  type: 'hero',
  component: HeroBlock,
  defaultConfig: {
    mainText: 'This is Hero',
  },
}
