import '../styles/main.css'
import baseStyles from '../styles/base'
import { BingoProvider } from '../context/bingo-context'

function MyApp ({ Component, pageProps }) {
  return (
    <BingoProvider>
      <style jsx>
        {baseStyles}
      </style>
      <Component {...pageProps} />
    </BingoProvider>
  )
}

export default MyApp
