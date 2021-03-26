import React, { useCallback } from 'react'
import tw from 'twin.macro'

const Container = tw.pre`
  border
  rounded
  bg-gray-800
  text-gray-100
  text-xs
  p-2
  cursor-help
`

export const SimpleJson = ({ value }: { value: any }) => {
  const json = JSON.stringify(value, null, 2)
  const onClick = useCallback(() => {
    console.log(value)
  }, [value])
  return <Container onClick={onClick}>{json}</Container>
}
