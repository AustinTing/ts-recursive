
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


// Get the sum of all salaries.
interface Person {
  name: string;
  salary: number
}

interface Departments {
  [propDepartmentName: string] : Person[] | Departments
}

interface Company {
  [propDepartmentName: string] : Person[] | Departments
}

let company: Company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
}

type getSumSalaries = (input: Company | Departments[] | Person[])=> number
const sumSalaries : getSumSalaries = (input: Company | Departments[] |Person[])=> {
  if (Array.isArray(input)){
    if(input.length === 0) return 0
    if (input[0] != null && Object.prototype.hasOwnProperty.call(input[0], 'salary')){
      // Person array
      const person : Person = <Person>input[0]
      const [,...tail]: Person[] = <Person[]>input
      return person.salary + sumSalaries(tail)
    }
    const departmentsArr: Departments[] = <Departments[]>input
    const head = departmentsArr[0]
    const [,...tail] = departmentsArr
    return sumSalaries(head) + sumSalaries(tail)
  }
  const departmentsArr: Departments[] = <Departments[]>Object.values(input)
  const head = departmentsArr[0]
  const [,...tail] = departmentsArr
  return sumSalaries(head) + sumSalaries(tail)
} 
console.log(sumSalaries(company))

