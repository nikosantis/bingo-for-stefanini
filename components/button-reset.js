import { useBingoDispatch, useBingoState } from '../context/bingo-context'

export default function ButtonReset () {
  const { reset, launchConfetti } = useBingoDispatch()
  const { runConfetti } = useBingoState()
  return (
    <section className='button-sort'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-5'>
            <div className='wrapper'>
              <button
                className='btn btn-danger btn-lg mx-auto'
                onClick={reset}
              >
                Reiniciar
              </button>
              <button
                className='btn btn-info btn-lg mx-auto'
                onClick={() => launchConfetti(!runConfetti)}
              >
                Confetti
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .button-sort {
            margin-bottom: 50px;
          }
          .wrapper {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </section>
  )
}
