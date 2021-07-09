import Head from 'next/head'
import { useRouter } from 'next/router'
import {
	Flexbox,
	Text,
	Card,
	Icon,
	Grid,
	colors,
	iconSizes
} from '@occmundial/occ-atomic'

import Header from '@/components/Header'

const { medium } = iconSizes

export default function NotFound() {
	const router = useRouter()
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
							<Icon
								iconName="warning"
								colors={[colors.sec]}
								width={medium}
								height={medium}
							/>{' '}
							404
						</Text>
						<Text>
							There's no page <strong>{router.asPath}</strong>
						</Text>
					</Card>
				</Flexbox>
			</Grid>
		</div>
	)
}
