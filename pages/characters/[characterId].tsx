import { map } from 'lodash'
import React from 'react'
import { CharacterCard } from '../../lib/components/CharacterCard'
import { MainLayout } from '../../lib/components/MainLayout'
import { SimpleGrid } from '../../lib/components/SimpleGrid'
import {
  GetCharacterDocument,
  GetCharacterQuery,
  GetCharacterQueryVariables,
  useGetCharacterQuery,
} from '../../lib/graphql/operations/GetCharacter.graphql'
import {
  GetCharactersDocument,
  GetCharactersQuery,
} from '../../lib/graphql/operations/GetCharacters.graphql'
import { getStaticPathsPlus } from '../../lib/next/getStaticPathsPlus'
import { getStaticPropsPlus } from '../../lib/next/getStaticPropsPlus'
import { useParams } from '../../lib/next/useParams'

const CharacterDetailsPage = () => {
  const { characterId } = useParams()
  const { data } = useGetCharacterQuery({ variables: { id: characterId } })
  const character = data?.character
  return (
    <MainLayout>
      <SimpleGrid>
        <CharacterCard character={character} />
      </SimpleGrid>
    </MainLayout>
  )
}

export const getStaticProps = getStaticPropsPlus({
  getProps: async ({ params, apolloClient }) => {
    const id = params.characterId as string
    try {
      await apolloClient.query<GetCharacterQuery, GetCharacterQueryVariables>({
        query: GetCharacterDocument,
        variables: {
          id,
        },
      })
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
    const { data } = await apolloClient.query<GetCharactersQuery>({
      query: GetCharactersDocument,
    })
    return map(data?.characters?.results, ({ id }) => ({
      params: {
        characterId: id,
      },
    }))
  },
})

export default CharacterDetailsPage
