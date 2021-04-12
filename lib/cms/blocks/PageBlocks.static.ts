import { HeroBlockType } from './HeroSimpleCentered/HeroBlock'
import { StatsBlockType } from './Stats/StatsBlock'
import { transformBlockTypes } from './transformBlockTypes'

export const PAGE_BLOCKS = transformBlockTypes([HeroBlockType, StatsBlockType])
