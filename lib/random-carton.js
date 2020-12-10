const bLetter = Array(15).fill(undefined).map((_n, i) => (i + 1).toString())
const iLetter = Array(15).fill(undefined).map((_n, i) => (i + 16).toString())
const nLetter = Array(15).fill(undefined).map((_n, i) => (i + 31).toString())
const gLetter = Array(15).fill(undefined).map((_n, i) => (i + 46).toString())
const oLetter = Array(15).fill(undefined).map((_n, i) => (i + 61).toString())

function getMinAndMax (letter) {
  switch (letter) {
    case 'b': {
      return {
        min: 1,
        max: 15
      }
    }
    case 'i': {
      return {
        min: 16,
        max: 30
      }
    }
    case 'n': {
      return {
        min: 31,
        max: 45
      }
    }
    case 'g': {
      return {
        min: 46,
        max: 60
      }
    }
    case 'o': {
      return {
        min: 61,
        max: 75
      }
    }
  }
}

function random (numbersPicked, letter) {
  const minAndMax = getMinAndMax(letter)
  let repeated = false
  let randomNumber = 0
  while (!repeated) {
    randomNumber = Math.floor(Math.random() * (minAndMax.max - minAndMax.min + 1))
    if (numbersPicked.includes(randomNumber.toString()) === false) {
      repeated = true
      return randomNumber
    }
  }
}

function getRandomForNumbers (max, arrLetter, letter) {
  let numbersRam = []
  for (let i = 0; i < max; i++) {
    const getNumber = random(numbersRam, letter)
    numbersRam = [...numbersRam, arrLetter[getNumber].toString()]
  }
  return numbersRam
}

const carton = () => {
  const numbersB = getRandomForNumbers(5, bLetter, 'b')
  const numbersI = getRandomForNumbers(5, iLetter, 'i')
  const numbersN = getRandomForNumbers(5, nLetter, 'n')
  const numbersG = getRandomForNumbers(5, gLetter, 'g')
  const numbersO = getRandomForNumbers(5, oLetter, 'o')
  return {
    b: numbersB,
    i: numbersI,
    n: numbersN.map((n, index) => {
      if (index === 2) {
        return 'libre'
      }
      return n
    }),
    g: numbersG,
    o: numbersO
  }
}

const cartonsIds = Array(200).fill(undefined).map((_n, i) => (i + 1).toString())

export { carton, cartonsIds }
