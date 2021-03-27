import tw from 'twin.macro'

export const SimpleGrid = tw.div`
  grid
  gap-4
  // grid-cols-1
  // md:grid-cols-2
  // lg:grid-cols-4
  grid-template-columns[repeat(auto-fill, minmax(200px, 1fr))]
`
