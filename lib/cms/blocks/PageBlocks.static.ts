import { keyBy } from 'lodash'
import { HeroBlockType } from './HeroSimpleCentered/HeroBlock'

export const PAGE_BLOCKS = keyBy([HeroBlockType], ({ type }) => type)
