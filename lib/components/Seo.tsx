import { SITE_NAME } from 'lib/config/config'
import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'
import React, { FunctionComponent } from 'react'

export const Seo: FunctionComponent<NextSeoProps> = (props) => {
  return <NextSeo {...props} />
}

export const SeoDefaults: FunctionComponent = () => {
  return (
    <DefaultSeo
      titleTemplate={`${SITE_NAME} | %s`}
      defaultTitle={`${SITE_NAME}`}
      // openGraph={{
      //   type: 'website',
      //   locale: 'en_IE',
      //   url: 'https://dreamsite.vercel.app/',
      //   site_name: 'SiteName',
      // }}
      // twitter={{
      //   handle: '@handle',
      //   site: '@site',
      //   cardType: 'summary_large_image',
      // }}
    />
  )
}
