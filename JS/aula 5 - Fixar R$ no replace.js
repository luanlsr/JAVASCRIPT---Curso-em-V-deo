var n1 = 1485.45

n1.toFixed(2).replace('.',',')
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log(n1);
//transforma número em valor monetário 