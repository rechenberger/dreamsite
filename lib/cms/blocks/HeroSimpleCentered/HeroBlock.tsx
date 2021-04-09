import React from 'react'
import { BlocksControls } from 'react-tinacms-inline'
import { BlockComponent, BlockType } from '../blocks'
import { HeroSimpleCenteredTemplate } from './HeroSimpleCenteredTemplate'

export interface HeroBlockConfig {
  mainText: string
  paragraphText: string
}

const HeroBlock: BlockComponent<HeroBlockConfig> = (blockProps) => {
  console.log({ blockProps })
  const { index } = blockProps
  return (
    <>
      <BlocksControls index={index}>
        <HeroSimpleCenteredTemplate {...blockProps} />
      </BlocksControls>
    </>
  )
}

export const HeroBlockType: BlockType<HeroBlockConfig> = {
  type: 'hero',
  Component: HeroBlock,
  template: {
    label: 'Hero Block',
    fields: [
      {
        name: 'paragraphText',
        label: 'Paragraph Text',
        description: 'Write some more Text',
        component: 'textarea',
      },
    ],
    defaultItem: {
      mainText: 'This is Hero',
      paragraphText: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.`,
    },
  },
}
