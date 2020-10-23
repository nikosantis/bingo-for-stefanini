import { useBingoState, useBingoDispatch } from '../context/bingo-context'

export default function ButtonSort () {
  const { loading, finished } = useBingoState()
  const { sorting } = useBingoDispatch()
  return (
    <section className='button-sort'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-5'>
            <div className='wrapper'>
              {!finished && (
                <button
                  className='btn btn-primary btn-lg mx-auto'
                  onClick={sorting}
                  disabled={loading || finished}
                >
                  Sortear números
                </button>
              )}
              {finished && <div className='game-over'>Juego Terminado 🎉</div>}
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
          .game-over {
            font-weight: bold;
            font-size: 1.5rem;
          }
        `}
      </style>
    </section>
  )
}
