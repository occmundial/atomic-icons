import Link from 'next/link'
import { NavTab, Text } from '@occmundial/atomic/components'
import { NavPosition } from '@occmundial/atomic/components/NavTab'
import { spacing } from '@occmundial/atomic/tokens'

const left: NavPosition = [
  {
    key: '1',
    type: 'custom',
    custom: (
      <Text headline style={{ marginRight: spacing.base }}>
        <Link href="/">
          <a style={{ textDecoration: 'none' }}>🍬</a>
        </Link>
      </Text>
    )
  },
  {
    key: '2',
    type: 'link',
    text: 'Icons',
    link: '/icons'
  },
  {
    key: '3',
    type: 'link',
    text: 'Migration',
    link: '/migration'
  }
]

const right: NavPosition = [
  {
    key: '1',
    type: 'link',
    text: 'Github',
    link: 'https://github.com/occmundial/atomic-icons-ct'
  }
]

export default function Header() {
  const isMobile = false
  return <NavTab left={left} right={right} fixed isFluid={isMobile} />
}
