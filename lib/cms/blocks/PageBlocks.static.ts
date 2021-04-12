import { keyBy } from 'lodash'
import { HeroBlockType } from './HeroSimpleCentered/HeroBlock'
import { StatsBlockType } from './Stats/StatsBlock'

export const PAGE_BLOCKS = keyBy(
  [HeroBlockType, StatsBlockType],
  ({ type }) => type
)
