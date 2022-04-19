// exercicio 01 
const somarValores = (arr) =>  arr.reduce((prev,curr) => prev + curr)
const meuArray = [1,2,3]

console.log(somarValores(meuArray))


// exercicio 02 ;




const saldoDisponivel = 100
const lista = [{
    name: 'sabao em po',
    preco: 30,
},{
    name: 'cereal',
    preco: 20,
},{
    name: 'toalha',
    preco: 40,
}
]

const CalculaSaldo = (arr, saldo) => arr.reduce(function(prev,curr){
    console.log({prev})
    console.log({curr})
    return prev - curr.preco;
},saldo);

console.log(CalculaSaldo(lista,saldoDisponivel))
