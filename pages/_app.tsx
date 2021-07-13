import "../styles/globals.css";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import {
  ApolloProvider,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client";

import { useApollo } from "../graphql/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  const client: ApolloClient<NormalizedCacheObject> = useApollo(
    pageProps.initialApolloState
  );

  useEffect(() => {
    const style: HTMLElement | null =
      document.getElementById("server-side-styles");
    if (style && style.parentNode) {
      style.parentNode.removeChild(style);
    }
  }, []);

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
export default MyApp;
