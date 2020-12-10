import Confetti from 'react-confetti'
import { getViewport } from '../lib/getViewport'
import { useBingoState } from '../context/bingo-context'

export default function ConfetiAll () {
  const { runConfetti } = useBingoState()
  if (!runConfetti) return null
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
