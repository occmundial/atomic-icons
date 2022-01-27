import Link from 'next/link'
import { NavTab, Text } from '@occmundial/atomic/components'
import { NavPosition } from '@occmundial/atomic/components/NavTab'

const left: NavPosition = [
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

const right: NavPosition = [
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
