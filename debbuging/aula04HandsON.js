
validarArray = (arr, numero) => {
    try{
    if(!arr) throw new ReferenceError("Envie o array");
    if(!numero) throw new ReferenceError("Envie o Numero");
    if( typeof arr !== 'object') throw new TypeError("o array precisa ser do tipo objeto");
    if( typeof numero != 'number') throw new TypeError("o numero precisa ser do tipo numero");
    if(arr.length != numero) throw new RangeError('Tamanho inválido');

    return arr+' no tamanho '+numero;
    }catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um reference error");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else if(e instanceof TypeError){
            console.log("Este erro é um reference error");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else if(e instanceof RangeError){
            console.log("Este erro é um reference error");
            console.log(e.name);
            console.log(e.stack);
            console.log(e.message);
        }else {
            console.log("tipo de erro nao esperado "+e)
        }
    }
}

// teste 01
// console.log(validarArray());
// teste 02
// console.log(validarArray(5,5));
//  Teste 03 
// console.log(validarArray([],'a'));
// teste 04 
// let arr = [1,2,3,4,5];
// let numero = 3;
// console.log(validarArray(arr,numero));

// teste 05
let arr = [1,2,3,4,5];
let numero = 5;
console.log(validarArray(arr,numero));
