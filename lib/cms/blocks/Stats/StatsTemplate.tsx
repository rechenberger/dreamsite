import { FunctionComponent } from 'react'
import 'twin.macro'

export const StatsTemplate: FunctionComponent<{}> = () => {
  return (
    <div>
      <h3 tw="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
      <dl tw="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div tw="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt tw="text-sm font-medium text-gray-500 truncate">
            Total Subscribers
          </dt>
          <dd tw="mt-1 text-3xl font-semibold text-gray-900">71,897</dd>
        </div>

        <div tw="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt tw="text-sm font-medium text-gray-500 truncate">
            Avg. Open Rate
          </dt>
          <dd tw="mt-1 text-3xl font-semibold text-gray-900">58.16%</dd>
        </div>

        <div tw="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
          <dt tw="text-sm font-medium text-gray-500 truncate">
            Avg. Click Rate
          </dt>
          <dd tw="mt-1 text-3xl font-semibold text-gray-900">24.57%</dd>
        </div>
      </dl>
    </div>
  )
}
