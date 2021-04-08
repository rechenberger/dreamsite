import { FullBlockFragment } from 'lib/graphql/operations/GetPageBlocks.graphql'
import { useSaveBlockMutation } from 'lib/graphql/operations/SaveBlock.graphql'
import { useForm, usePlugin } from 'tinacms'

export const useBlockTina = ({
  block,
  fields,
}: {
  block: FullBlockFragment
  fields: any[]
}) => {
  const [save] = useSaveBlockMutation()
  const { id, type, config: configBefore } = block

  const formConfig = {
    id,
    label: type,
    initialValues: configBefore,
    onSubmit: async (config) => {
      console.log({ config })
      await save({ variables: { id, config } })
      alert(`saved`)
    },
    fields,
  }

  const [configAfter, form] = useForm(formConfig)
  usePlugin(form)

  return {
    form,
    config: configAfter,
  }
}
