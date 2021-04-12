import { BlockType } from '../Block.types'
import { StatsTemplate } from './StatsTemplate'

export interface StatsBlockConfig {
  heading: string
}

export const StatsBlockType: BlockType<StatsBlockConfig> = {
  type: 'stats',
  Component: StatsTemplate,
  template: {
    label: 'Stats Block',
    defaultItem: {
      config: {
        heading: 'This is Stats',
      },
    },
  },
}
