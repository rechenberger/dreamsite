import { FullBlockFragment } from 'lib/graphql/operations/GetPageBlocks.graphql'
import { useForm, usePlugin } from 'tinacms'

export const useBlockTina = ({
  block,
  fields,
}: {
  block: FullBlockFragment
  fields: any[]
}) => {
  const { id, type, config: configBefore } = block
  const formConfig = {
    id,
    label: type,
    initialValues: configBefore,
    onSubmit: (values) => {
      console.log({ onSubmit: values })
      alert(`onSubmit`)
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
