function range(start, stop, step){
  let return_array = [];
  if(start != undefined & stop != undefined & step != undefined &
    start < step & step > 0)
  {
    for(let i = start; i <= stop; i += step){
      return_array.push(i);
    }
  }
  return return_array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));