
import { carton, cartonsIds } from '../lib/random-carton'
import Page from '../components/page'
import CartonNumbers from '../components/carton-numbers'
import Footer from '../components/footer'

export default function Carton ({ carton, id }) {
  return (
    <Page>
      <main>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5 col-12'>
              <h1 className='mb-5'>Carton nº {id}</h1>
              <CartonNumbers numbers={carton} />
            </div>
          </div>
        </div>

        <style jsx>
          {`
            main {
              padding: 30px 0;
            }
            h1 {
              font-size: 2rem;
              text-align: center;
            }
          `}
        </style>
      </main>
      <Footer />
    </Page>
  )
}

export async function getStaticProps ({ params }) {
  const res = carton()
  return { props: { carton: res, id: params.carton } }
}

export async function getStaticPaths () {
  const idNumbers = cartonsIds.map(id => {
    return {
      params: { carton: id }
    }
  })
  return { paths: [...idNumbers], fallback: false }
}
