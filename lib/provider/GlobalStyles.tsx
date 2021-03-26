import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles, theme } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  html, body {
    ${tw`min-h-full`}
  }
  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}

    
    ${tw`
      bg-gray-100
      text-gray-800
    `}
  }
`

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)
