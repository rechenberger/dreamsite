import styled from 'styled-components'
import tw from 'twin.macro'

export const SimpleGrid = styled.div<{ minColWidth?: string }>(
  ({ minColWidth = '200px' }) => [
    tw`
    grid
    gap-4
`,
    { gridTemplateColumns: `repeat(auto-fill, minmax(${minColWidth}, 1fr))` },
  ]
)
