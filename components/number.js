import cx from 'classnames'
import { memo } from 'react'
import { useBingoState } from '../context/bingo-context'

function Number ({ num }) {
  const state = useBingoState()

  return (
    <div
      key={num} className={cx('number', {
        active: state.numbers.includes(num)
      })}
    >
      <span>{num}</span>

      <style jsx>
        {`
          .number {
            display: flex;
            justify-content: center;
            align-item: center;
            border-right: 1px solid #ccc;
            padding: 15px;
          }
          .number:last-child {
            border-right: none;
          }
          .number span {
            color: var(--ns-fg);
            font-weight: bold;
          }
          .number.active {
            background: var(--ns-red);
          }
          .number.active span {
            color: #fff;
          }
        `}
      </style>
    </div>
  )
}

export default memo(Number)
