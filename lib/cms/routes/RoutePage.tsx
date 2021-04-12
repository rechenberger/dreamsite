import { useForm, usePlugin } from '@tinacms/react-core'
import { Cms_Block_Insert_Input } from 'lib/graphql/operations/CharacterCard.graphql'
import { FullRoutePageFragment } from 'lib/graphql/operations/GetPageBlocks.graphql'
import { useSaveBlocksMutation } from 'lib/graphql/operations/SaveBlocks.graphql'
import { filter, map } from 'lodash'
import React, { FunctionComponent } from 'react'
import { InlineBlocks, InlineForm } from 'react-tinacms-inline'
import tw from 'twin.macro'
import { BlockData } from '../blocks/Block.types'
import { PAGE_BLOCKS } from '../blocks/PageBlocks.static'

const InlineBlocksStyled = tw(InlineBlocks)`
  flex
  flex-col
  space-y-8`

export const RoutePage: FunctionComponent<{
  routePage: FullRoutePageFragment
}> = ({ routePage }) => {
  const { slug, tenantId, stage } = routePage
  const blocksFromDb = routePage.blocks

  const [saveBlocks] = useSaveBlocksMutation()

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
      // console.log({ newData })
      const newBlocks = newData.blocks as BlockData<any>[]
      const blocksToInsert = map(
        newBlocks,
        ({ config, _template, type, id }, position) =>
          ({
            id,
            config,
            type: type || _template,
            position,
            routeSlug: slug,
            tenantId,
            stage,
            // TODO: do not hardcode
            locale: 'en',
          } as Cms_Block_Insert_Input)
      )

      const oldBlockIds = map(blocksFromDb, ({ id }) => id)
      const newBlockIds = map(blocksToInsert, ({ id }) => id)
      const blockIdsToDelete = filter(
        oldBlockIds,
        (id) => !newBlockIds.includes(id)
      )

      await saveBlocks({
        variables: { blocks: blocksToInsert, blockIdsToDelete },
      })
    },
  })

  usePlugin(form)

  return (
    <>
      {/* <ModalProvider> */}
      <InlineForm form={form}>
        <InlineBlocksStyled name="blocks" blocks={PAGE_BLOCKS} />
      </InlineForm>
      {/* </ModalProvider> */}
    </>
  )
}
