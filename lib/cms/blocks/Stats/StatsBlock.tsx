import { BlocksControls } from 'react-tinacms-inline'
import { BlockComponent, BlockType } from '../Block.types'
import { StatsTemplate } from './StatsTemplate'

export interface StatsBlockConfig {
  heading: string
}

const StatsBlock: BlockComponent<StatsBlockConfig> = (blockProps) => {
  // console.info(blockProps)
  const { index } = blockProps
  return (
    <>
      <BlocksControls index={index}>
        <StatsTemplate {...blockProps} />
      </BlocksControls>
    </>
  )
}

export const StatsBlockType: BlockType<StatsBlockConfig> = {
  type: 'stats',
  Component: StatsBlock,
  template: {
    label: 'Stats Block',
    defaultItem: {
      config: {
        heading: 'This is Stats',
      },
    },
  },
}
