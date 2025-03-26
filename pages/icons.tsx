import Head from 'next/head'
import fs from 'fs'
import {
  Text,
  Grid,
  Card,
  Flexbox,
  TextField,
  Pill,
  SlideDown
} from '@occmundial/atomic/components'
import { spacing } from '@occmundial/atomic/tokens'

import Header from '@/components/Header'
import IconBox from '@/components/IconBox'

import { iconGroups } from 'utils/icon-groups'
import { useMemo, useState } from 'react'
import Row from '@occmundial/atomic/components/Grid/Row'
import Col from '@occmundial/atomic/components/Grid/Col'
import IconFont from '@/components/iconFont'

export default function IconPage() {
  const [filter, setFilter] = useState('')
  const [type, setType] = useState<'svg' | 'font'>('svg')
  const filteredIcons = useMemo(() => {
    return iconGroups
      .map(group => ({
        name: group.name,
        icons: group.icons.filter(icon =>
          icon.toLowerCase().includes(filter.toLowerCase())
        )
      }))
      .filter(group => group.icons.length > 0)
  }, [filter])
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
          <Row>
            <Col
              sm={{ col: 8, offset: 2 }}
              md={{ col: 6, offset: 3 }}
              lg={{ col: 4, offset: 4 }}
            >
              <TextField
                iconName="search"
                value={filter}
                onChange={setFilter}
                style={{ marginBottom: spacing.base }}
              />
              <Pill
                group={[
                  { id: 'svg', label: 'SVG' },
                  { id: 'font', label: 'Font' }
                ]}
                selected={type}
                onChange={(value: 'svg' | 'font') => setType(value)}
              />
            </Col>
          </Row>
          {filteredIcons.map(group => (
            <div key={group.name}>
              <SlideDown title={group.name} expanded>
                <Flexbox display="flex" wrap="wrap" justifyContent="start">
                  {group.icons.map(icon =>
                    type === 'svg' ? (
                      <IconBox key={icon} icon={icon} />
                    ) : (
                      <IconFont key={icon} icon={icon} />
                    )
                  )}
                </Flexbox>
              </SlideDown>
            </div>
          ))}
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
