import {
  InMemoryCache,
  ApolloCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { helloVar } from "./state";

const cache: ApolloCache<NormalizedCacheObject> = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        hello: {
          read: (): string => helloVar(),
        },
      },
    },
  },
});

export default cache;
