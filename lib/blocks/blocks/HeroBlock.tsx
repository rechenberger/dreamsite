import React from 'react'
import { useForm, usePlugin } from 'tinacms'
import { BlockComponent, BlockType } from '../blocks'

export interface HeroBlockConfig {
  mainText: string
}

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
      <h1>{betterConfig.mainText}</h1>
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
