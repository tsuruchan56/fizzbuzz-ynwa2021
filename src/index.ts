export const printOneToHundred = () => {

  let str = '';
  for(let i = 1; i <= 100; i++){
    str += `${tofizzbuzz(i)},`;
  }
  return (lastElementSlice(str));

}

export const tofizzbuzz = (number: number) => {

    let result: string ;
    if(number % 15 == 0 ){
      result = 'Fizz Buzz';
    } else if(number % 5 == 0 ){
      result = 'Buzz';
    } else if(number % 3 == 0 ){
      result = 'Fizz';
    }else{
      result = number.toString();
    }
    return result;

}

export const lastElementSlice = (cut: string) => {
  
  return cut.slice(0,-1);

}

console.log(printOneToHundred())