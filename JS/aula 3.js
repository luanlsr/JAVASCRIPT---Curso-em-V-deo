// var n1 = parseInt(window.prompt('Digite o primeiro número')) //recebe uma string e converte em numero inteiro
// var n2 = parseInt(window.prompt('Digite o segundo número'))//recebe uma string e converte em numero inteiro
// var n1 = parseFloat(window.prompt('Digite o primeiro número')) //recebe uma string e converte em numero float
// var n2 = parseFloat(window.prompt('Digite o segundo número'))//recebe uma string e converte em numero float
var n1 = Number(window.prompt('Digite o primeiro número')) //recebe uma string e converte em numero 
var n2 = Number(window.prompt('Digite o segundo número'))//recebe uma string e converte em numero 
var soma = n1 + n2
//window.alert('A soma dos números digitados é: ' + soma + "!")

// number + number adição
// string + string concatenação

window.alert(`A soma entre ${n1} e ${n2} é igual a ${soma}`) // concatenação com placeholder

//conversão em strings
// String(n)
// n.toString

// var nome = 'Luan'
// var idade = 29
// var nota = 10

// console.log(`O aluno ${nome} com a idade de ${idade} anos, tirou a nota ${nota}`);//template strings com place Holder ${}