function showMyName(name: string): void {
  console.log(name)
}

showMyName('John')

function square(a: number): number {
  return a * a
}

square(10)

function sum(title: string, ...numbers: number[]): string {
  return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0)
}

sum('Numbers', 1, 6, 10)

const executeFunc = (func: (arg1: string, arg3: number, arg2: string[]) => boolean) => {
  const title: string = 'Lorem Ipsum'
  func(title, 24, ['Sport', 'Movies'])
}

executeFunc((title: string, age: number, hobbies: string[]) => { return true })
