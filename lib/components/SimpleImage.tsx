import Image from 'next/image'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const StyledImage = tw(Image)`
  object-cover
`

const ImageContainer = styled.div<{ aspectRatio: number }>(
  ({ aspectRatio }) => [
    tw`
        relative
        h-0
      `,
    {
      paddingTop: `${100 * (1 / aspectRatio)}%`,
    },
  ]
)

export const SimpleImage: FunctionComponent<{
  src: string
  aspectRatio: number
}> = ({ src, aspectRatio }) => {
  return (
    <ImageContainer aspectRatio={aspectRatio}>
      <StyledImage src={src} layout="fill" />
    </ImageContainer>
  )
}
