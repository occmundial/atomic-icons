import Head from 'next/head'
import fs from 'fs'
import { Text, Grid, Card, Flexbox } from '@occmundial/atomic/components'
import { spacing } from '@occmundial/atomic/tokens'

import Header from '@/components/Header'
import IconBox from '@/components/IconBox'

import { iconGroups } from 'utils/icon-groups'
import { Fragment, useMemo } from 'react'

export default function IconPage({ icons }) {
  const legacyIcons = useMemo(() => {
    return icons.filter(
      icon => !iconGroups.some(group => group.icons.includes(icon))
    )
  }, [icons])
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
          {iconGroups.map(group => (
            <div key={group.name}>
              <Text heading topBase>
                {group.name}
              </Text>
              <Flexbox display="flex" wrap="wrap" justifyContent="start">
                {group.icons.map(icon => (
                  <IconBox key={icon} icon={icon} />
                ))}
              </Flexbox>
            </div>
          ))}
          <div>
            <Text heading topBase>
              Legacy icons
            </Text>
            <Flexbox display="flex" wrap="wrap" justifyContent="start">
              {legacyIcons.map(icon => (
                <IconBox key={icon} icon={icon} />
              ))}
            </Flexbox>
          </div>
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
