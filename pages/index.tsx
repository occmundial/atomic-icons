import Head from "next/head";
import { useQuery } from "@apollo/client";
import { Text, Flexbox, Grid, Card } from "@occmundial/occ-atomic";
import { EXAMPLE_QUERY } from "graphql/queries/example";

import Header from "@/components/Header";
import { initializeApollo } from "@/graphql/apollo";
import { ExampleQuery } from "@/graphql/types/ExampleQuery";

export default function Home() {
  // This query does not make a new request on the client
  const { data } = useQuery<ExampleQuery>(EXAMPLE_QUERY);

  return (
    <div>
      <Head>
        <title>Candy🍬Wrapper</title>
      </Head>
      <Header />
      <Grid>
        <Flexbox
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="col"
          style={{
            height: "100vh",
          }}
        >
          <Card raisable>
            <Text center hero secondary>
              Candy🍬Wrapper
            </Text>
            <Text center large topBase bottomSmall>
              <strong>Candy🍬Wrapper</strong> is a boilerplate system to create
              new Next.js applications with some implemented tools like OCC
              Atomic and Apollo Client, configured to point to the CandysQL
              endpoint and working with server-side rendering. It's working with
              Webpack 5 and Module Federation.
            </Text>
            {data && (
              <Text center subheading strong info>
                {JSON.stringify(data)}
              </Text>
            )}
          </Card>
        </Flexbox>
      </Grid>
    </div>
  );
}

// Example to retrieve GraphQL data in SSR
export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: EXAMPLE_QUERY,
  });

  return {
    props: {
      initializeApollo: apolloClient.cache.extract(),
    },
  };
}
