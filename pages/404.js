import Link from 'next/link'

export default function Custom404 () {
  return (
    <main id='404'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center'>
            <h1>Oops, esta página no existe</h1>
            <br />
            <p>Mejor vuelve al inicio</p>
            <br />
            <Link href='/'>
              <a className='btn btn-primary'>Volver al Inicio</a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          main {
            min-height: 100vh;
            padding: 100px 0;
          }
        `}
      </style>
    </main>
  )
}
