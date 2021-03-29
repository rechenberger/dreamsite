import { CharacterCard } from 'lib/components/CharacterCard'
import { MainLayout } from 'lib/components/MainLayout'
import { Seo } from 'lib/components/Seo'
import { SimpleGrid } from 'lib/components/SimpleGrid'
import { SimpleJson } from 'lib/components/SimpleJson'
import {
  queryGetCharacter,
  useGetCharacterQuery,
} from 'lib/graphql/operations/GetCharacter.graphql'
import { queryGetCharacters } from 'lib/graphql/operations/GetCharacters.graphql'
import { getStaticPathsPlus } from 'lib/next/getStaticPathsPlus'
import { getStaticPropsPlus } from 'lib/next/getStaticPropsPlus'
import { useParams } from 'lib/next/useParams'
import { map } from 'lodash'
import React from 'react'
import tw from 'twin.macro'

const Details = tw.div`
  bg-gray-800
  overflow-hidden
  flex
  items-stretch
  justify-items-stretch
  sm:col-start-2
  col-span-full
  rounded
`

const CharacterDetailsPage = () => {
  const { characterId } = useParams()
  const { data } = useGetCharacterQuery({ variables: { id: characterId } })
  const character = data?.character
  const { name, image } = character
  return (
    <MainLayout>
      <Seo title={name} image={{ url: image, alt: name }} />
      <SimpleGrid>
        <CharacterCard character={character} />
        <Details>
          <SimpleJson value={character} tw="w-full" />
        </Details>
      </SimpleGrid>
    </MainLayout>
  )
}

export const getStaticProps = getStaticPropsPlus({
  getProps: async ({ params, apolloClient }) => {
    const id = params.characterId as string
    try {
      await queryGetCharacter({ apolloClient, variables: { id } })
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
    const { data } = await queryGetCharacters({ apolloClient })
    return map(data?.characters?.results, ({ id }) => ({
      params: {
        characterId: id,
      },
    }))
  },
})

export default CharacterDetailsPage
