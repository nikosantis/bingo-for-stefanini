let numbersB = []
let numbersI = []
let numbersN = []
let numbersG = []
let numbersO = []

const finishedB = false
const finishedI = false
const finishedN = false
const finishedG = false
const finishedO = false

function random (numbersPicked, finished, min, max) {
  let repeated = false
  let randomNumber = 0
  if (finished) return false
  while (!repeated) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (numbersPicked.includes(randomNumber.toString()) === false) {
      repeated = true
      return randomNumber.toString()
    }
  }
}

function getRandomForNumbers (numbersPicked, finished, min, max) {
  for (let i = 0; i < 5; i++) {
    const getNumber = random(numbersPicked, finished, min, max)
    numbersPicked = [...numbersPicked, getNumber]
  }
  return numbersPicked
}

numbersB = [...getRandomForNumbers(numbersB, finishedB, 1, 15)]
numbersI = [...getRandomForNumbers(numbersI, finishedI, 16, 30)]
numbersN = [...getRandomForNumbers(numbersN, finishedN, 31, 45)]
numbersG = [...getRandomForNumbers(numbersG, finishedG, 46, 60)]
numbersO = [...getRandomForNumbers(numbersO, finishedO, 61, 75)]

const randomCarton = {
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

export { randomCarton }
