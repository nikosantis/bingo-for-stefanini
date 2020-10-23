export default function Header () {
  return (
    <header>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h1>🎉 GRAN BINGO GRAN DE STEFANINI 🎉</h1>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          header {
            margin-bottom: 30px;
            text-align: center;
            padding: 10px 0;
          }
          h1 {
            font-size: 2rem;
          }
        `}
      </style>
    </header>
  )
}
