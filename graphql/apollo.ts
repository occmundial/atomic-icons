/* eslint-disable no-underscore-dangle */
import {
  ApolloClient, NormalizedCacheObject
} from '@apollo/client';
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries';
import { HttpLink } from '@apollo/client/link/http';
import { sha256 } from 'crypto-hash';
import { useMemo } from 'react';

import cache from './cache';
import schema from './schema';
import { CANDYSQL } from '../config';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const linkChain: any = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true
}).concat(new HttpLink({ uri: CANDYSQL }));

function createApolloClient(): any {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    name: 'candy-wrapper',
    version: process.env.NEXT_PUBLIC_VERSION || 'local',
    link: linkChain,
    cache,
    typeDefs: schema
  });
}

export function initializeApollo(initialState: any = null): any {
  const _apolloClient: any = apolloClient ?? createApolloClient();
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  if (typeof window === 'undefined') return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState: any = null): any {
  const store: any = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
