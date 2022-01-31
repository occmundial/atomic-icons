import Head from 'next/head'
import fs from 'fs'
import { Text, Grid, Card, Flexbox } from '@occmundial/atomic/components'
import { spacing } from '@occmundial/atomic/tokens'

import Header from '@/components/Header'
import IconBox from '@/components/IconBox'

export default function IconPage({ icons }) {
  return (
    <div>
      <Head>
        <title>Candy🍬Wrapper</title>
      </Head>
      <Header />
      <Grid style={{ paddingTop: spacing.xLarge }}>
        <Card style={{ marginTop: 24, marginBottom: 64 }}>
          <Text hero center bottomMedium>
            Icons
          </Text>
          <Flexbox display="flex" wrap="wrap" justifyContent="center">
            {icons.map(icon => (
              <IconBox key={icon} icon={icon} />
            ))}
          </Flexbox>
        </Card>
      </Grid>
    </div>
  )
}

export async function getStaticProps() {
  const icons = fs.readdirSync('./icons')

  return {
    props: {
      icons: icons.map(icon => icon.replace(/\.svg$/, ''))
    }
  }
}
