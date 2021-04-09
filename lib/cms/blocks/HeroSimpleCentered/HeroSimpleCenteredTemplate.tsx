import { BlockComponent } from 'lib/cms/blocks/blocks'
import React from 'react'
import { InlineText } from 'react-tinacms-inline'
import 'twin.macro'
import { HeroBlockConfig } from './HeroBlock'

export const HeroSimpleCenteredTemplate: BlockComponent<HeroBlockConfig> = ({
  data,
}) => {
  return (
    <>
      <div tw="relative bg-gray-50 pt-6 pb-16 sm:pb-24">
        <main tw="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div tw="text-center">
            <h1 tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span tw="block xl:inline">
                <InlineText name="mainText" />
              </span>
              {/* <span tw="block text-indigo-600 xl:inline">online business</span> */}
            </h1>
            <p tw="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {data.paragraphText}
            </p>
            <div tw="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div tw="rounded-md shadow">
                <a
                  href="#"
                  tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div tw="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
