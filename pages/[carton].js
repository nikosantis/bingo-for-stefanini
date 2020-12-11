import { cartons } from '../lib/cartons'
import { cartonsIds } from '../lib/cartons_ids'
import Page from '../components/page'
import CartonNumbers from '../components/carton-numbers'
import Footer from '../components/footer'

export default function Carton ({ carton, cartonId }) {
  return (
    <Page>
      <main>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5 col-12'>
              <h1 className='mb-5'>Carton nº {cartonId}</h1>
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
  const getCartons = cartons.filter(x => x.carton === params.carton)
  return { props: { cartonId: params.carton, carton: getCartons[0].data } }
}

export async function getStaticPaths () {
  const idNumbers = cartonsIds.map(id => {
    return {
      params: { carton: id }
    }
  })
  return { paths: [...idNumbers], fallback: false }
}
