import React from 'react'
import { MainLayout } from '../../lib/components/MainLayout'
import { SimpleJson } from '../../lib/components/SimpleJson'
import { createApolloClientSsr } from '../../lib/graphql/apollo/apollo'
import {
  GetCharactersDocument,
  useGetCharactersQuery,
} from '../../lib/graphql/operations/GetCharacters.graphql'

const CharactersPage = () => {
  const { data } = useGetCharactersQuery()
  const characters = data?.characters
  return (
    <MainLayout>
      <SimpleJson value={characters} />
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const apolloClient = createApolloClientSsr({})

  await apolloClient.query({
    query: GetCharactersDocument,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default CharactersPage
