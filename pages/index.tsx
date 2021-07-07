/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { Text, Flexbox, Grid } from '@occmundial/occ-atomic'
import { EXAMPLE_QUERY } from 'graphql/queries/example'
import { initializeApollo } from '@/graphql/apollo'

export default function Home() {
  // This query does not make a new request on the client
  const { data } = useQuery(EXAMPLE_QUERY)

  return (
    <div>
      <Head>
        <title>Candy🍬Wrapper</title>
      </Head>
      <Grid>
        <Flexbox
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="col"
          style={{
            height: '100vh'
          }}
        >
          <Text hero>Candy🍬Wrapper</Text>
          <Text center large topBase bottomSmall>Candy Wrapper is a boilerplate system to create new Next.js applications with some implemented tools like OCC Atomic and Apollo Client, configured to point to the CandysQL endpoint. It's working with Webpack 5 and Module Federation.</Text>
          {data && (
            <Text subheading strong info>{JSON.stringify(data)}</Text>
          )}
        </Flexbox>
      </Grid>
    </div>
  )
}

// Example to retrieve GraphQL data in SSR
export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: EXAMPLE_QUERY
  })

  return {
    props: {
      initializeApollo: apolloClient.cache.extract()
    }
  }
}