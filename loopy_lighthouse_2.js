function  loopyLighthouse(range, multiples, words){
  let retArr = [];
  for(let i = range[0]; i <= range[1]; i++){
    let retVal = "";
    for(let j = 0; j < multiples.length; j++){
      if(i % multiples[j] === 0){
        retVal += words[j];
      }
    }
    if(retVal === ""){
      retVal = i;
    }
    console.log(retVal);
    retArr.push(retVal);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);