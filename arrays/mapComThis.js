const par = {
    valor: 2,
};

const impar = { valor:  3};


const meuArray = [1,2,3,4]

function meuMapComThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.valor;
    }, thisArg)
}

var meuMapCThis = (arr,thisArg) =>
     arr.map((item) => {
      return   (item * thisArg.valor);
    },thisArg);
     

console.log(meuMapCThis(meuArray,par))

console.log(meuMapComThis(meuArray,impar))