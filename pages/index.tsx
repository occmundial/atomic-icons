import Head from 'next/head'
import { Text, Flexbox, Grid, Card } from '@occmundial/occ-atomic'

import Header from '@/components/Header'

export default function Home() {
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
            height: '100vh'
          }}
        >
          <Card raisable>
            <Text center hero secondary>
              Atomic Icons
            </Text>
            <Text center large topBase bottomSmall>
              <strong>Atomic Icons</strong> library. This project is part of the{' '}
              <strong>Atomic UI</strong> project.
            </Text>
          </Card>
        </Flexbox>
      </Grid>
    </div>
  )
}
