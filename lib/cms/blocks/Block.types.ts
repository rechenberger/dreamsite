import { FullBlockFragment } from 'lib/graphql/operations/GetPageBlocks.graphql'
import { FunctionComponent } from 'react'

export interface BlockType<TConfig> {
  type: string
  Component: BlockComponent<TConfig>
  template: {
    label: string
    defaultItem: { config: TConfig }
    fields: any[]
  }
}

export type BlockComponent<TConfig> = FunctionComponent<{
  data: BlockData<TConfig>
  index: number
  name: string
}>

export type BlockData<TConfig> = Partial<FullBlockFragment> & {
  _template: string
  config: TConfig
}
