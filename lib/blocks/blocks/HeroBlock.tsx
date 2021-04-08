import React from 'react'
import { InlineForm, InlineText } from 'react-tinacms-inline'
import styled from 'styled-components'
import { useForm, usePlugin } from 'tinacms'
import { BlockComponent, BlockType } from '../blocks'

export interface HeroBlockConfig {
  mainText: string
}

const Heading = styled.h1`
  font-size: 3em;
  font-weight: 900;
`

const HeroBlock: BlockComponent<HeroBlockConfig> = ({ config, id, type }) => {
  const formConfig = {
    id,
    label: type,
    initialValues: config,
    onSubmit: (values) => {
      console.log({ onSubmit: values })
      alert(`onSubmit`)
    },
    fields: [
      {
        name: 'mainText',
        label: 'Main Text',
        component: 'text',
      },
    ],
  }

  const [betterConfig, form] = useForm(formConfig)
  usePlugin(form)

  return (
    <>
      <InlineForm form={form}>
        <Heading>
          <InlineText name="mainText" />
        </Heading>
      </InlineForm>
      <Heading>{betterConfig.mainText}</Heading>
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
