
// From https://javascript.info/recursion
// Power
type getNum = (x: number, n: number) => number
const pow: getNum = (x: number, n: number) => {
  if (n === 0) return 1
  return x * pow(x, n-1)
}

console.log(pow(2, 1))
console.log(pow(2, 2))
console.log(pow(2, 3))


