import { BlockType } from '../Block.types'
import { HeroSimpleCenteredTemplate } from './HeroSimpleCenteredTemplate'

export interface HeroBlockConfig {
  mainText: string
  paragraphText: string
}

export const HeroBlockType: BlockType<HeroBlockConfig> = {
  type: 'hero',
  Component: HeroSimpleCenteredTemplate,
  template: {
    label: 'Hero Block',
    fields: [
      {
        name: 'config.paragraphText',
        label: 'Paragraph Text',
        description: 'Write some more Text',
        component: 'textarea',
      },
    ],
    defaultItem: {
      config: {
        mainText: 'This is Hero',
        paragraphText: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.`,
      },
    },
  },
}
