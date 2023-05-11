function concat(){
  let con_array = [];
 
  for(let i = 0; i < arguments.length; i++){
    let hold_arr = arguments[i];
    for(let j = 0; j < hold_arr.length; j++){
      
      con_array.push(hold_arr[j]);
    }
  }
  return con_array;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);