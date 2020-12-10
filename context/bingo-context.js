import { createContext, useReducer, useContext, useCallback } from 'react'

const BingoContextState = createContext()
const BingoContextDispatch = createContext()

const initialState = {
  numbers: [],
  lastNumber: '',
  loading: false,
  finished: false,
  runConfetti: false
}

const RESET = 'RESET'
const LOADING = 'LOADING'
const GET_NUMBER = 'GET_NUMBER'
const CONFETTI = 'CONFETTI'

function random (numbersPicked, finished) {
  let repeated = false
  let randomNumber = 0
  const min = 1
  const max = 75
  if (finished) return false
  while (!repeated) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (numbersPicked.includes(randomNumber.toString()) === false) {
      repeated = true
      return randomNumber
    }
  }
}

function getLetter (number) {
  if (number <= 15) return 'B'
  if (number > 15 && number <= 30) return 'I'
  if (number > 30 && number <= 45) return 'N'
  if (number > 45 && number <= 60) return 'G'
  if (number > 60 && number <= 75) return 'O'
}

function reducer (state, action) {
  switch (action.type) {
    case RESET: {
      return {
        ...initialState
      }
    }
    case LOADING: {
      return {
        ...state,
        loading: true
      }
    }
    case CONFETTI: {
      return {
        ...state,
        runConfetti: action.payload
      }
    }
    case GET_NUMBER: {
      let pickedNumbers = [...state.numbers]
      const getNumber = random(state.numbers, state.finished)
      const letter = getLetter(getNumber)
      pickedNumbers = [...state.numbers, getNumber.toString()]
      const isFinished = pickedNumbers.length === 75
      return {
        ...state,
        numbers: [...pickedNumbers],
        lastNumber: `${letter} - ${getNumber.toString()}`,
        loading: false,
        finished: isFinished
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function BingoProvider (props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const reset = useCallback(() => {
    dispatch({ type: RESET })
  }, [])

  const sorting = useCallback(() => {
    dispatch({ type: LOADING })
    setTimeout(() => dispatch({ type: 'GET_NUMBER' }), 1000)
  }, [])

  const launchConfetti = useCallback((run) => dispatch({ type: CONFETTI, payload: run }), [])

  return (
    <BingoContextState.Provider value={state}>
      <BingoContextDispatch.Provider value={{ sorting, reset, launchConfetti }} {...props} />
    </BingoContextState.Provider>
  )
}

function useBingoState () {
  const context = useContext(BingoContextState)
  if (!context) {
    throw new Error('useBingoState must be used within a BingoProvider')
  }
  return context
}

function useBingoDispatch () {
  const context = useContext(BingoContextDispatch)
  if (!context) {
    throw new Error('useBingoDispatch must be used within a BingoProvider')
  }
  return context
}

export {
  BingoProvider,
  useBingoState,
  useBingoDispatch
}
