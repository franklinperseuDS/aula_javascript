//  Throw
// ex: 01
function verificaPalindromo(string){
    if (!string) return "String invalida"

    return string === string.split('').reverse().join('');
}

console.log(verificaPalindromo('cat'))
console.log(verificaPalindromo(''))

// EX 02
function verificaPalindromoThrow(string){
    if (!string) throw "String invalida"

    return string === string.split('').reverse().join('');
}

console.log(verificaPalindromoThrow('cat'))
console.log(verificaPalindromoThrow(''))