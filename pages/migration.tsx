import Head from 'next/head'

import { Text, Grid, Card } from '@occmundial/atomic/components'
import { spacing } from '@occmundial/atomic/tokens'

import Header from '@/components/Header'
import { migrationTable } from 'utils/migration-table'

export default function IconPage() {
  return (
    <div>
      <Head>
        <title>Candy🍬Wrapper</title>
      </Head>
      <Header />
      <Grid style={{ paddingTop: spacing.xLarge }}>
        <Card style={{ marginTop: 24, marginBottom: 64 }}>
          <Text hero center bottomMedium>
            Migration guide
          </Text>
          <Text bottomMedium>
            There's a lot of new icons in v2 and some have new names. v1 has two
            styles of icons, solid and outline, but v2 only has outline icons.
            The default iconset in v1 was the outline icons, so in most cases
            you can just remove the <code>-o</code> suffix from the icon name to
            get the new name. For example,
            <code>search-o</code> in v1 should just be <code>search</code> in
            v2. Solid icons will automatically be converted to outline icons.
            Here's a table for all the icons that now correspond to a different
            name in v2:
          </Text>
          <table>
            <thead>
              <tr>
                <th>v1 icon</th>
                <th>v2 icon</th>
              </tr>
            </thead>
            <tbody>
              {migrationTable.map(([v1, v2]) => (
                <tr key={v1}>
                  <td>
                    <code>{v1}</code>
                  </td>
                  <td>
                    <code>{v2}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Text bottomTiny>
            * There's not a direct equivalent in v2 for these icons yet.
          </Text>
          <Text>
            The original arrow icons looked like chevrons. The new arrow icons
            are more arrow-like and there's new chevron icons, so replace all
            instances of arrow with chevron if you want the old chevron style.
          </Text>
        </Card>
      </Grid>
    </div>
  )
}
