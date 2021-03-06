import { cartons } from '../lib/cartons'
import { cartonsIds } from '../lib/cartons_ids'
import Page from '../components/page'
import CartonNumbers from '../components/carton-numbers'
import Footer from '../components/footer'
import Logo from '../components/logo'

export default function Carton ({ carton, cartonId }) {
  return (
    <Page>
      <main>
        <header>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-12'>
                <div className='logo-box'>
                  <Logo height={60} />
                </div>
              </div>
              <div className='col-lg-6 col-12'>
                <div className='title'>
                  <h1>Carton de Bingo Nº {cartonId}</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5 col-12'>
              <CartonNumbers numbers={carton} />
            </div>
          </div>
        </div>

        <style jsx>
          {`
            header {
              padding: 20px 0;
              margin-bottom: 20px;
            }
            .title {
              display: flex;
              justify-content: center;
            }
            h1 {
              font-size: 2rem;
              text-align: center;
              margin: 0;
            }
            .logo-box {
              display: flex;
              justify-content: center;
              margin-bottom: 20px;
            }
            @media (min-width: 768px) {
              .logo-box {
                padding: 30px 0;
              }
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
