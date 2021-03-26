import { useGetCharactersQuery } from '../lib/graphql/operations/GetCharacters.graphql'

export default function Home() {
  const { data } = useGetCharactersQuery()
  const characters = data?.characters
  return (
    <div>
      <h1>DreamSite</h1>
      <pre>{JSON.stringify(characters, null, 2)}</pre>
    </div>
  )
}
