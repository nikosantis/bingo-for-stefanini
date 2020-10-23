import Confetti from 'react-confetti'
import { useBingoState } from '../context/bingo-context'
import { getViewport } from '../lib/getViewport'

export default function Confeti () {
  const { finished } = useBingoState()
  if (!finished) return null
  const { width, height } = getViewport()

  return (
    <div className='confetti'>
      <Confetti width={width} height={height} />
      <style jsx>
        {`
          .confetti {
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </div>
  )
}
