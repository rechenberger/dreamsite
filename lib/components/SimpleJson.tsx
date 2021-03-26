import React from 'react'
import tw from 'twin.macro'

const Container = tw.pre`
  border
  rounded
  bg-gray-800
  text-gray-100
  text-xs
  p-2
`

export const SimpleJson = ({ value }: { value: any }) => {
  const json = JSON.stringify(value, null, 2)
  return <Container>{json}</Container>
}
