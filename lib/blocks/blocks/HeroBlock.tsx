import React from 'react'
import { InlineForm, InlineGroup, InlineText } from 'react-tinacms-inline'
import styled from 'styled-components'
import tw from 'twin.macro'
import { BlockComponent, BlockType } from '../blocks'
import { useBlockTina } from '../useBlockTina'

export interface HeroBlockConfig {
  mainText: string
}

const Heading = styled.h1`
  font-size: 3em;
  font-weight: 900;
  border: 1px solid black;
`

const HeroContainer = tw.div`
  bg-gray-500
  p-16
  rounded
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
          name="."
          fields={
            [
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
            ] as any // TODO: fix typing
          }
        >
          <HeroContainer>
            <Heading>
              <InlineText name="mainText" />
            </Heading>
          </HeroContainer>
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
