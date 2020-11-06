import CartonNumber from './carton-number'

export default function CartonNumbers ({ numbers }) {
  console.log(numbers)
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
          if (x === null) {
            return (
              <div className='nn'>NN</div>
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
              border-right: 1px solid #ccc;
            }
            .numbers-letter {
              display: flex;
              justify-content: center;
              align-item: center;
              padding: 30px 15px;
              border-right: 1px solid #ccc;
              background: pink;
            }
            .numbers-letter span {
              color: var(--sn-fg);
              font-weight: bold;
            }
            .nn {
              display: flex;
              flex: 1;
              justify-content: center;
              align-item: center;
              border-right: 1px solid #ccc;
              padding: 25px 15px;
              border-bottom: 1px solid #ccc;
            }
          `}
      </style>
    </div>
  )
}
