import { useBingoState } from '../context/bingo-context'
import Loading from './loading'

export default function LastNumber () {
  const { lastNumber, loading } = useBingoState()
  return (
    <div className='last-number'>
      <div className='number'>
        {
          loading
            ? <Loading />
            : lastNumber || '😱'
        }
      </div>
      <style jsx>
        {`
          .last-number {
            margin-bottom: 50px;
            display: flex;
            justify-content: center;
          }
          .number {
            border: 1px solid black;
            padding: 15px;
            font-size: 2rem;
          }
        `}
      </style>
    </div>
  )
}
