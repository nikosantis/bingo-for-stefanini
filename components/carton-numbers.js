import CartonNumber from './carton-number'

export default function CartonNumbers ({ numbers }) {
  return (
    <div className='numbers'>
      <div className='numbers-row'>
        <div className='numbers-letter'>
          <span>
            B
          </span>
        </div>
        {numbers.b.map((x, index) => {
          return (
            <CartonNumber key={index} number={x} />
          )
        })}
      </div>
      <div className='numbers-row'>
        <div className='numbers-letter'>
          <span>
            I
          </span>
        </div>
        {numbers.i.map((x, index) => {
          return (
            <CartonNumber key={index} number={x} />
          )
        })}
      </div>
      <div className='numbers-row'>

        <div className='numbers-letter'>
          <span>
            N
          </span>
        </div>
        {numbers.n.map((x, index) => {
          if (x === 'libre') {
            return (
              <div key={index} className='nn'>X</div>
            )
          }
          return (
            <CartonNumber key={index} number={x} />
          )
        })}
      </div>
      <div className='numbers-row'>

        <div className='numbers-letter'>
          <span>
            G
          </span>
        </div>
        {numbers.g.map((x, index) => {
          return (
            <CartonNumber key={index} number={x} />
          )
        })}
      </div>
      <div className='numbers-row'>

        <div className='numbers-letter'>
          <span>
            O
          </span>
        </div>
        {numbers.o.map((x, index) => {
          return (
            <CartonNumber key={index} number={x} />
          )
        })}
      </div>
      <style jsx>
        {`
            .numbers {
              width: 100%;
              display: flex;
              flex-direction: row;
              margin-bottom: 50px;
            }
            .numbers-row {
              flex: 1;
              display: flex;
              flex-direction: column;
              border-left: 1px solid #ccc;
              border-bottom: 1px solid #ccc;
            }
            .numbers-row:last-child {
              border-right: 1px solid #ccc;
            }
            .numbers-letter {
              display: flex;
              justify-content: center;
              align-item: center;
              border-right: 1px solid var(--ns-green);
              background: var(--ns-green);
              padding: 20px;
            }
            @media (min-width: 768px) {
              .numbers-letter {
                padding: 50px;
              }
            }
            @media (min-width: 992px) {
              .numbers-letter {
                padding: 30px 15px;
              }
            }
            .numbers-letter span {
              color: var(--ns-fg);
              font-weight: bold;
            }
            .nn {
              display: flex;
              flex: 1;
              justify-content: center;
              align-item: center;
              border-right: 1px solid #ccc;
              background-color: var(--ns-yellow);
              border-bottom: 1px solid #ccc;
              padding: 20px;
            }
            @media (min-width: 768px) {
              .nn {
                padding: 50px;
              }
            }
            @media (min-width: 992px) {
              .nn {
                padding: 30px 15px;
              }
            }
          `}
      </style>
    </div>
  )
}
