/* eslint-disable no-underscore-dangle */
import {
  ApolloClient, ApolloLink, NormalizedCacheObject
} from '@apollo/client'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { HttpLink } from '@apollo/client/link/http'
import { sha256 } from 'crypto-hash'
import { useMemo } from 'react'

import cache from './cache'
import schema from './schema'
import { CANDYSQL } from '../config'

type ApolloClientType = ApolloClient<NormalizedCacheObject>

let apolloClient: ApolloClientType

const linkChain: ApolloLink = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true
}).concat(new HttpLink({ uri: CANDYSQL }))

function createApolloClient(): ApolloClientType {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    name: 'candy-wrapper',
    version: process.env.NEXT_PUBLIC_VERSION || 'local',
    link: linkChain,
    cache,
    typeDefs: schema
  })
}

export function initializeApollo(initialState: NormalizedCacheObject = null): ApolloClientType {
  const _apolloClient: ApolloClientType = apolloClient ?? createApolloClient()
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  if (typeof window === 'undefined') return _apolloClient
  apolloClient = apolloClient ?? _apolloClient

  return apolloClient
}

export function useApollo(initialState: NormalizedCacheObject = null): ApolloClientType {
  const store: any = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
