export function printOneToHundred(){

  let str: string = '';
  for(let i = 1; i <= 100; i++){
    str += `${tofizzbuzz(i)},`;
  }
  return str.slice(0,-1);

}

export function tofizzbuzz (number: number){

  let result = [];
    if(number % 15 == 0){
        result.push('Fizz Buzz');
      } else if(number % 5 == 0){
        result.push('Buzz');
      } else if(number % 3 == 0 ){
        result.push('Fizz');
      }else{
        result.push(number);
      }
      return result.join(",")

    }

console.log(printOneToHundred())
