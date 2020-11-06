import { cartons } from '../lib/cartons'
import Page from '../components/page'
import CartonNumbers from '../components/carton-numbers'

export default function Carton ({ carton }) {
  const dataCarton = carton[0]
  return (
    <Page>
      <main>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5 col-12'>
              <h1 className='mb-5'>Carton nº {dataCarton.carton}</h1>
              <CartonNumbers numbers={dataCarton.data} />
            </div>
          </div>
        </div>

        <style jsx>
          {`
            main {
              padding: 30px 0;
            }
          `}
        </style>
      </main>
    </Page>
  )
}

export async function getStaticProps ({ params }) {
  const res = cartons.filter(x => x.carton === params.carton)
  return { props: { carton: res } }
}

export async function getStaticPaths () {
  const ids = cartons.map(x => {
    return {
      params: { carton: x.carton }
    }
  })
  return {
    paths: [...ids],
    fallback: true
  }
}
