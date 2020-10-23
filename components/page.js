import Head from 'next/head'

export default function Page ({ children }) {
  return (
    <div className='bingo'>
      <Head>
        <title>Stefanini Bingo by Nikolas Santis</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}

      <style jsx>
        {`
          .bingo {
            width: 100vw;
            min-height: 100vh;
          }
        `}
      </style>
      <style jsx global>
        {`
          html,
          body {
            width: 100vw;
            min-height: 100vh;
            background: var(--sn-bg);
            color: var(--sn-fg);
          }
        `}
      </style>
    </div>
  )
}
