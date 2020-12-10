export default function Footer () {
  return (
    <footer>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 text-center'>
            <p>Creado por Nikolas Santis</p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          footer {
            bottom: 0;
          }
        `}
      </style>
    </footer>
  )
}
