let i = 100;
while(i <= 200){
  let message = "";
  if(i % 3 === 0){
    message += "Loopy" 
  }
  if(i % 4 === 0){
    message += "Lighthouse";
  }
  if(message === ""){
    message += i;
  }
  console.log(message);
  i++
}