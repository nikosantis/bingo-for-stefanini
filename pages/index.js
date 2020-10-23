import Page from '../components/page'
import Header from '../components/header'
import LastNumber from '../components/last-number'
import ButtonSort from '../components/button-sort'
import Numbers from '../components/numbers'
import ButtonReset from '../components/button-reset'

export default function Home () {
  return (
    <Page>
      <Header />
      <main>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <LastNumber />
              <ButtonSort />
              <Numbers numbersCalled={['1']} />
              <ButtonReset />
            </div>
          </div>
        </div>
      </main>
    </Page>
  )
}
