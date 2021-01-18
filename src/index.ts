export const outputOneToHundredFizzBuzzRules = ():Array< string > => {

  const array = []
  for(let i = 1; i <= 100; i++){
      array.push(convertNumberToFizzBuzzRules(i));
  }
  return array;

}

export const convertNumberToFizzBuzzRules = (number: number): string => {

  if(number % 15 == 0 ) return 'Fizz Buzz';
  if(number % 5 == 0 ) return 'Buzz';
  if(number % 3 == 0 ) return 'Fizz';
  return number.toString();

}

export const buildFizzBuzzString = ():string => {
  
  return  outputOneToHundredFizzBuzzRules().join(',');
 
}

console.log(buildFizzBuzzString());