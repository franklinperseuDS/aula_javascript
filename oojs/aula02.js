// Exemplo de classe

class Animal{
    constructor( type = 'Animal'){
        this.type = type
    }

    get type(){
        return this._type
    }

    set type(val){
        this._type = val.toUpperCase()
    }

    makeSound() {
        console.log('Making animal sound');
    }
}


class CAT extends Animal{
    constructor(){
        super('cat');
    }

    makeSound() {
        super.makeSound()
        console.log('Meow!!!')
    }
}


let a = new Animal()
console.log(a.type)

let b = new catBtn()
console.log(b.type)