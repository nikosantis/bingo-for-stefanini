import { useState } from 'react'

export default function CartonNumber ({ number }) {
  const [clicked, setClicked] = useState(false)

  return (
    <div className='number' onClick={() => setClicked(!clicked)}>
      <span>{number}</span>

      <style jsx>
        {`
          .number {
            display: flex;
            flex: 1;
            justify-content: center;
            align-item: center;
            border-bottom: 1px solid #ccc;
            background-color: ${clicked ? '#e74645' : ''};
            cursor: pointer;
            padding: 20px;
          }
          @media (min-width: 768px) {
            .number {
              padding: 50px;
            }
          }
          @media (min-width: 992px) {
            .number {
              padding: 30px 15px;
            }
          }
        `}
      </style>
    </div>
  )
}
