import { Block } from 'lib/cms/blocks/Block'
import { MainLayout } from 'lib/components/MainLayout'
import { Seo } from 'lib/components/Seo'
import {
  queryGetPageBlocks,
  useGetPageBlocksQuery,
} from 'lib/graphql/operations/GetPageBlocks.graphql'
import { queryGetRouteSlugs } from 'lib/graphql/operations/GetRouteSlugs.graphql'
import { getStaticPathsPlus } from 'lib/next/getStaticPathsPlus'
import { getStaticPropsPlus } from 'lib/next/getStaticPropsPlus'
import { useParams } from 'lib/next/useParams'
import { map } from 'lodash'
import React from 'react'

const CmsRoutePage = () => {
  const { slug } = useParams()
  const { data } = useGetPageBlocksQuery({ variables: { slug } })
  const blocks = data.route.blocks
  return (
    <MainLayout>
      <Seo title={slug} />
      {blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </MainLayout>
  )
}

export const getStaticProps = getStaticPropsPlus({
  getProps: async ({ params, apolloClient }) => {
    const slug = params.slug as string
    try {
      await queryGetPageBlocks({ apolloClient, variables: { slug } })
    } catch (error) {
      return {
        notFound: true,
      }
    }
  },
})

export const getStaticPaths = getStaticPathsPlus({
  fallback: 'blocking',
  getPaths: async ({ apolloClient }) => {
    const { data } = await queryGetRouteSlugs({ apolloClient })
    const slugs = map(data?.routes, ({ slug }) => slug)
    return map(slugs, (slug) => ({ params: { slug } }))
  },
})

export default CmsRoutePage
