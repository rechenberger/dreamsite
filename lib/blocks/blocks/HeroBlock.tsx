import React from 'react'
import { InlineForm, InlineGroup, InlineText } from 'react-tinacms-inline'
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
        <InlineGroup
          name="hero"
          fields={[
            {
              name: 'typography.style',
              label: 'Type Style',
              description: 'Select a type style for the hero copy',
              component: 'select',
              options: ['Swiss-Style', 'Art-Nouveau', 'Command-Line'],
            },
            {
              name: 'typography.color',
              label: 'Type Color',
              description: 'Select a color for the hero copy',
              component: 'color',
              widget: 'block',
              colors: ['#404040', '#ff0000', '#1B1E25'],
            },
          ]}
        >
          <Heading>
            <InlineText name="mainText" />
          </Heading>
        </InlineGroup>
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
