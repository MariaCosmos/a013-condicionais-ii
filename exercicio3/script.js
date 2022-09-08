//código a ser reescrito

/*if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}*/

//mesmo código utilizando if ternário

const nome = prompt("insira seu nome")

nome === "José" ? console.log("Oi, Zé!") : console.log(`Olá, ${nome}`)


const idade = prompt("insira sua idade")

idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista")
