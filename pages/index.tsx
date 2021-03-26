import tw from 'twin.macro'
import { SimpleJson } from '../lib/components/SimpleJson'
import { createApolloClientSsr } from '../lib/graphql/apollo/apollo'
import {
  GetCharactersDocument,
  useGetCharactersQuery,
} from '../lib/graphql/operations/GetCharacters.graphql'

const Layout = tw.div`
  m-8
  flex
  flex-col
  space-y-8
`

export default function Home() {
  const { data } = useGetCharactersQuery()
  const characters = data?.characters
  return (
    <Layout>
      <h1>DreamSite</h1>
      <SimpleJson value={characters} />
    </Layout>
  )
}

export async function getStaticProps() {
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
