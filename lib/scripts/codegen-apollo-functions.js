const plugin = (schema, documents, config) => {
  // CONFIG
  const {
    apolloFunctionsPrefix,
    apolloFunctionsPostfix,
    apolloFunctionsGlobalClient,
  } = config || {}
  const PREFIX = apolloFunctionsPrefix || true
  const POSTFIX = firstLetterUpperCase(apolloFunctionsPostfix) || ''
  const GLOBAL_APOLLO_CLIENT = apolloFunctionsGlobalClient || ''
  const ALLOW_GLOBAL_APOLLO_CLIENT = !!GLOBAL_APOLLO_CLIENT

  const textsToInsert = []

  // GENERIC TYPES AND FUNCTIONS
  textsToInsert.push(`
type QueryFuncOptions<TVars, TData> = Omit<Apollo.QueryOptions<TVars, TData>, 'query'> & {
  apolloClient${ALLOW_GLOBAL_APOLLO_CLIENT ? '?' : ''}: Apollo.ApolloClient<any>
}

type MutationFuncOptions<TVars, TData> = Omit<Apollo.MutationOptions<TData, TVars>, 'mutation'> & {
  apolloClient${ALLOW_GLOBAL_APOLLO_CLIENT ? '?' : ''}: Apollo.ApolloClient<any>
}

const createQueryFunc = <TVars, TData>(query) => ({apolloClient, ...options}: QueryFuncOptions<TVars, TData>) => {
  ${
    ALLOW_GLOBAL_APOLLO_CLIENT
      ? `apolloClient = apolloClient || ${GLOBAL_APOLLO_CLIENT}`
      : ``
  }
  return apolloClient.query<TData, TVars>({
    query,
    ...options
  })
}

const createMutationFunc = <TVars, TData>(mutation) => ({apolloClient, ...options}: MutationFuncOptions<TVars, TData>) => {
  ${
    ALLOW_GLOBAL_APOLLO_CLIENT
      ? `apolloClient = apolloClient || ${GLOBAL_APOLLO_CLIENT}`
      : ``
  }
  return apolloClient.mutate<TData, TVars>({
    mutation,
    ...options
  })
}
`)

  // QUERIES AND MUTATIONS
  documents.forEach((doc) => {
    doc.document.definitions.forEach((definition) => {
      const { kind, operation } = definition
      if (kind !== 'OperationDefinition') return

      const name = definition.name?.value
      if (!name) return

      const isQuery = operation === 'query'
      const isMutation = operation === 'mutation'

      if (isQuery || isMutation) {
        const verb = isQuery ? 'query' : 'mutate'
        const prefix = PREFIX === true ? verb : PREFIX

        const funcName = firstLetterLowerCase(`${prefix}${name}${POSTFIX}`)

        const text = isQuery
          ? `export const ${funcName} = createQueryFunc<${name}QueryVariables, ${name}Query>(${name}Document)`
          : `export const ${funcName} = createMutationFunc<${name}MutationVariables, ${name}Mutation>(${name}Document)`

        textsToInsert.push(text)
      }
    })
  })

  // CREATE TEXT TO APPEND
  const overallText = textsToInsert.join('\n')
  return overallText
}

module.exports = {
  plugin,
}

function firstLetterLowerCase(input) {
  if (!input) return input
  const firstLetter = input[0]
  const rest = input.slice(1)
  return `${firstLetter.toLowerCase()}${rest}`
}

function firstLetterUpperCase(input) {
  if (!input) return input
  const firstLetter = input[0]
  const rest = input.slice(1)
  return `${firstLetter.toUpperCase()}${rest}`
}
