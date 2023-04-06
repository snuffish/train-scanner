import { Box, Container } from '@mui/material'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter()

	return (
		<>
			<Navbar key={router.asPath} />
			<Box id="AppContainer">
				<Component {...pageProps} />
			</Box>
		</>
	)
}

export default MyApp
