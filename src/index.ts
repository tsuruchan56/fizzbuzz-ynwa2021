export const outputFizzBuzz = ():Array< number | string > => {

  const array = [];
  for(let i = 1; i <= 100; i++){
      array.push(chengeFizzBuzz(i))
  }
  return array;

}

export const chengeFizzBuzz = (number: number): string => {

  if(number % 15 == 0 ) return 'Fizz Buzz';
  if(number % 5 == 0 ) return 'Buzz';
  if(number % 3 == 0 ) return 'Fizz';
  return number.toString();

}

export const resultFizzBuzz = ():string => {

  const addcomma = outputFizzBuzz()
  return addcomma.join(',');

}

console.log(resultFizzBuzz())