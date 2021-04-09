import { MainLayout } from 'lib/components/MainLayout'
import { Seo } from 'lib/components/Seo'
import {
  queryGetRouteSlugs,
  useGetRouteSlugsQuery,
} from 'lib/graphql/operations/GetRouteSlugs.graphql'
import { getStaticPropsPlus } from 'lib/next/getStaticPropsPlus'
import { useParams } from 'lib/next/useParams'
import { map } from 'lodash'
import Link from 'next/link'
import React from 'react'

const CmsIndex = () => {
  const { slug } = useParams()
  const { data } = useGetRouteSlugsQuery()
  const slugs = map(data?.routes, ({ slug }) => slug)
  return (
    <MainLayout>
      <Seo title={slug} />
      {map(slugs, (slug) => (
        <Link href={`/cms/${slug}`} key={slug}>
          <a>{slug}</a>
        </Link>
      ))}
    </MainLayout>
  )
}

export const getStaticProps = getStaticPropsPlus({
  getProps: async ({ apolloClient }) => {
    await queryGetRouteSlugs({ apolloClient })
  },
})

export default CmsIndex
