import { useForm, usePlugin } from '@tinacms/react-core'
import { RouteWithBlocksFragment } from 'lib/graphql/operations/GetPageBlocks.graphql'
import { map } from 'lodash'
import React, { FunctionComponent } from 'react'
import { InlineBlocks, InlineForm } from 'react-tinacms-inline'
import { PAGE_BLOCKS } from '../blocks/PageBlocks.static'

export const RoutePage: FunctionComponent<{
  routePage: RouteWithBlocksFragment
}> = ({ routePage }) => {
  const { slug } = routePage
  const blocksFromDb = routePage.blocks

  const blocks = map(blocksFromDb, (block) => ({
    _template: block.type,
    ...block,
  }))

  const [, form] = useForm({
    id: slug,
    label: slug,
    initialValues: {
      // slug,
      blocks,
    },
    onSubmit: async (newData) => {
      console.log({ newData })
      alert('Saved Whole RoutePage')
    },
  })

  usePlugin(form)

  return (
    <>
      {/* <ModalProvider> */}
      <InlineForm form={form}>
        <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} />
      </InlineForm>
      {/* </ModalProvider> */}
    </>
  )
}
