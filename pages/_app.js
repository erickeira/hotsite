import '../styles/globals.css'
import AuthProvider from '../context';

export const runtime = 'experimental-edge';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}
