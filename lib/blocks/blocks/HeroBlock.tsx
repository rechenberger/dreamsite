import React from 'react'
import { InlineForm, InlineText } from 'react-tinacms-inline'
import styled from 'styled-components'
import { BlockComponent, BlockType } from '../blocks'
import { useBlockTina } from '../useBlockTina'

export interface HeroBlockConfig {
  mainText: string
}

const Heading = styled.h1`
  font-size: 3em;
  font-weight: 900;
`

const HeroBlock: BlockComponent<HeroBlockConfig> = (block) => {
  const { form, config } = useBlockTina({
    block,
    fields: [
      {
        name: 'mainText',
        label: 'Main Text',
        component: 'text',
      },
    ],
  })

  return (
    <>
      <InlineForm form={form}>
        <Heading>
          <InlineText name="mainText" />
        </Heading>
      </InlineForm>
      <Heading>{config.mainText}</Heading>
    </>
  )
}

export const HeroBlockType: BlockType<HeroBlockConfig> = {
  type: 'hero',
  component: HeroBlock,
  defaultConfig: {
    mainText: 'This is Hero',
  },
}
