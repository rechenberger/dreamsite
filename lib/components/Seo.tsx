import { BASE_URL, SITE_NAME } from 'lib/config/config'
import { DefaultSeo, NextSeo, NextSeoProps } from 'next-seo'
import { OpenGraphImages } from 'next-seo/lib/types'
import React, { FunctionComponent } from 'react'

export const Seo: FunctionComponent<
  NextSeoProps & { image?: OpenGraphImages }
> = ({ image, ...props }) => {
  const images = image ? [image] : []
  return <NextSeo {...props} openGraph={{ images }} />
}

export const SeoDefaults: FunctionComponent = () => {
  return (
    <DefaultSeo
      titleTemplate={`${SITE_NAME} | %s`}
      defaultTitle={`${SITE_NAME}`}
      openGraph={{
        type: 'website',
        locale: 'en_US',
        url: BASE_URL,
        site_name: SITE_NAME,
      }}
      // twitter={{
      //   handle: '@handle',
      //   site: '@site',
      //   cardType: 'summary_large_image',
      // }}
    />
  )
}
