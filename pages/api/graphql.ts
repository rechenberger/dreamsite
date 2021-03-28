import { HttpLink } from 'apollo-link-http'
import { introspectSchema, makeRemoteExecutableSchema } from 'apollo-server'
import { ApolloServer } from 'apollo-server-micro'
// import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools'
import fetch from 'node-fetch'

// FROM: https://www.contentful.com/blog/2019/01/30/combining-apis-graphql-schema-stitching-part-2/
const getSchema = async () => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL,
    fetch: fetch as any,
  })
  const remoteSchema = await introspectSchema(httpLink as any)
  const schema = makeRemoteExecutableSchema({
    schema: remoteSchema,
    link: httpLink as any,
  })

  return schema
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const handler = async (req, res) => {
  const schema = await getSchema()
  const apolloServer = new ApolloServer({ schema })
  return apolloServer.createHandler({ path: '/api/graphql' })(req, res)
}

export default handler
