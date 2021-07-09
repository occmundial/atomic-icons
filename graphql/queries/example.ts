import { DocumentNode, gql } from '@apollo/client'

export const EXAMPLE_QUERY: DocumentNode = gql`
  query ExampleQuery {
    hello @client
  }
`
