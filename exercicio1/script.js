const num = prompt("insira um número")

if(num % 2 === 0){
  if(num % 3 === 0){
    console.log("seu número é divisível por 2 e 3")
  }else{
    console.log("seu número é divisível por 2")
  }
}else if(num % 3 === 0){
  console.log("seu número é divisível por 3!")
}else{
  console.log("seu número não é divisível por 2 nem por 3")
}

if (num % 2 === 0 || num % 3 === 0){
  console.log("seu numero é divisível por 2 ou por 3!")
}else{
  console.log("seu numero não é divisível por 2 nem por 3!")
}