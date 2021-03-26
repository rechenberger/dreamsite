import { CharacterCard } from 'lib/components/CharacterCard'
import { MainLayout } from 'lib/components/MainLayout'
import { SimpleGrid } from 'lib/components/SimpleGrid'
import {
  GetCharactersDocument,
  useGetCharactersQuery,
} from 'lib/graphql/operations/GetCharacters.graphql'
import { getStaticPropsPlus } from 'lib/next/getStaticPropsPlus'
import { map } from 'lodash'
import React from 'react'

const CharactersPage = () => {
  const { data } = useGetCharactersQuery()
  const characters = data?.characters?.results
  return (
    <MainLayout>
      <SimpleGrid>
        {map(characters, (character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </SimpleGrid>
    </MainLayout>
  )
}

export const getStaticProps = getStaticPropsPlus({
  queries: [{ query: GetCharactersDocument }],
})

export default CharactersPage
