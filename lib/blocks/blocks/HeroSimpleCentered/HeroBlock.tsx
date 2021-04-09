import React from 'react'
import { InlineForm, InlineGroup } from 'react-tinacms-inline'
import { BlockComponent, BlockType } from '../../blocks'
import { useBlockTina } from '../../useBlockTina'
import { HeroSimpleCenteredTemplate } from './HeroSimpleCenteredTemplate'

export interface HeroBlockConfig {
  mainText: string
  paragraphText: string
}

const HeroBlock: BlockComponent<HeroBlockConfig> = (block) => {
  const { form, config } = useBlockTina({
    block,
    // fields: [
    //   {
    //     name: 'mainText',
    //     label: 'Main Text',
    //     component: 'text',
    //   },
    // ],
  })

  return (
    <>
      <InlineForm form={form}>
        <InlineGroup
          name="."
          fields={[
            {
              name: 'paragraphText',
              label: 'Paragraph Text',
              description: 'Write some more Text',
              component: 'textarea',
            },
          ]}
        >
          <HeroSimpleCenteredTemplate {...block} config={config} />
        </InlineGroup>
      </InlineForm>
    </>
  )
}

export const HeroBlockType: BlockType<HeroBlockConfig> = {
  type: 'hero',
  component: HeroBlock,
  defaultConfig: {
    mainText: 'This is Hero',
    paragraphText: `Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.`,
  },
}
