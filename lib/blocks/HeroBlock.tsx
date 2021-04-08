import React, { FunctionComponent } from 'react'
import { BlockType } from './blocks'

export interface HeroBlockConfig {
  mainText: string
}

const HeroBlock: FunctionComponent<{ config: HeroBlockConfig }> = ({
  config,
}) => {
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
