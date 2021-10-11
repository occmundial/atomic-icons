import Link from 'next/link'
import { NavTab, Text } from '@occmundial/occ-atomic'

const left = [
  {
    key: '1',
    type: 'custom',
    custom: (
      <Text headline>
        <Link href="/">
          <a style={{ textDecoration: 'none' }}>🍬</a>
        </Link>
      </Text>
    )
  }
]

const right = [
  {
    key: '2',
    type: 'link',
    text: 'Github',
    link: 'https://github.com/occmundial/atomic-icons'
  }
]

export default function Header() {
  return <NavTab left={left} right={right} fixed />
}
