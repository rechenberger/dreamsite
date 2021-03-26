import { map } from 'lodash'
import React from 'react'
import { MainLayout } from '../../lib/components/MainLayout'
import { SimpleGrid } from '../../lib/components/SimpleGrid'
import { SimpleJson } from '../../lib/components/SimpleJson'
import {
  GetCharactersDocument,
  useGetCharactersQuery,
} from '../../lib/graphql/operations/GetCharacters.graphql'
import { getStaticPropsPlus } from '../../lib/next/getStaticPropsPlus'

const CharactersPage = () => {
  const { data } = useGetCharactersQuery()
  const characters = data?.characters?.results
  return (
    <MainLayout>
      <SimpleGrid>
        {map(characters, (character) => {
          const { id } = character
          return <SimpleJson key={id} value={character} />
        })}
      </SimpleGrid>
    </MainLayout>
  )
}

export const getStaticProps = getStaticPropsPlus({
  queries: [{ query: GetCharactersDocument }],
})

export default CharactersPage
