import { MainLayout } from 'lib/components/MainLayout'
import { Seo } from 'lib/components/Seo'
import { SimpleGrid } from 'lib/components/SimpleGrid'
import { SimpleJson } from 'lib/components/SimpleJson'
import {
  queryGetPageBlocks,
  useGetPageBlocksQuery,
} from 'lib/graphql/operations/GetPageBlocks.graphql'
import { getStaticPathsPlus } from 'lib/next/getStaticPathsPlus'
import { getStaticPropsPlus } from 'lib/next/getStaticPropsPlus'
import { useParams } from 'lib/next/useParams'
import React from 'react'

const CmsRoutePage = () => {
  const { slug } = useParams()
  const { data } = useGetPageBlocksQuery({ variables: { slug } })
  return (
    <MainLayout>
      <Seo title={slug} />
      <SimpleGrid>
        <SimpleJson value={data} />
      </SimpleGrid>
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
    // const { data } = await queryGetCharacters({ apolloClient })
    return [{ params: { slug: 'team' } }]
  },
})

export default CmsRoutePage
