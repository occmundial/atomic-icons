import { ReactElement } from 'react'
import Link from 'next/link'
import { NavTab, Text, Icon } from '@occmundial/occ-atomic'

const left: { [key: string]: string | ReactElement }[] = [
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

const right: { [key: string]: string | ReactElement }[] = [
    {
        key: '2',
        type: 'link',
        text: 'Github',
        link: 'https://github.com/occmundial/candy-wrapper'
    }
]

export default function Header() {
    return (
        <NavTab left={left} right={right} fixed />
    )
}
