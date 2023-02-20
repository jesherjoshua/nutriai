import '@/styles/globals.css'
import {Footer} from '../Components';
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps,session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
