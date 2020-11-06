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
            border-right: 1px solid #ccc;
            padding: 25px 15px;
            border-bottom: 1px solid #ccc;
            background-color: ${clicked ? 'red' : ''};
          }
        `}
      </style>
    </div>
  )
}
