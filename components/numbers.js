import { useMemo } from 'react'
import Number from './number'

export default function Numbers () {
  const tablet = useMemo(() => {
    return {
      b: Array(15).fill(undefined).map((_n, i) => (i + 1).toString()),
      i: Array(15).fill(undefined).map((_n, i) => (i + 16).toString()),
      n: Array(15).fill(undefined).map((_n, i) => (i + 31).toString()),
      g: Array(15).fill(undefined).map((_n, i) => (i + 46).toString()),
      o: Array(15).fill(undefined).map((_n, i) => (i + 61).toString())
    }
  }, [])

  return (
    <div className='numbers'>
      <div className='numbers-row'>
        <div className='numbers-letter'>
          <span>
            B
          </span>
        </div>
        {
          tablet.b.map(num => (
            <Number key={num} num={num} />
          ))
        }
      </div>
      <div className='numbers-row'>
        <div className='numbers-letter'>
          <span>I</span>
        </div>
        {
          tablet.i.map(num => (
            <Number key={num} num={num} />
          ))
        }
      </div>
      <div className='numbers-row'>
        <div className='numbers-letter'>
          <span>N</span>
        </div>
        {
          tablet.n.map(num => (
            <Number key={num} num={num} />
          ))
        }
      </div>
      <div className='numbers-row'>
        <div className='numbers-letter'>
          <span>G</span>
        </div>
        {
          tablet.g.map(num => (
            <Number key={num} num={num} />
          ))
        }
      </div>
      <div className='numbers-row'>
        <div className='numbers-letter'>
          <span>O</span>
        </div>
        {
          tablet.o.map(num => (
            <Number key={num} num={num} />
          ))
        }
      </div>

      <style jsx>
        {`
          .numbers {
            width: 100%;
            display: flex;
            flex-direction: column;
            margin-bottom: 50px;
          }
          .numbers-row {
            display: grid;
            grid-template-columns: repeat(16, 1fr);
            border-left: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
          }
          .numbers-row:first-child {
            border-top: 1px solid #ccc;
          }
          .numbers-letter {
            display: flex;
            justify-content: center;
            align-item: center;
            padding: 15px;
            border-right: 1px solid #ccc;
            background: var(--ns-green);
          }
          .numbers-letter span {
            color: var(--ns-fg);
            font-weight: bold;
          }
        `}
      </style>
    </div>
  )
}
