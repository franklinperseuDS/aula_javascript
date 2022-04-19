class ContaBancaria{
        constructor(agencia,numero,tipo){
            this.agencia = agencia
            this.numero = numero
            this.tipo = tipo
            this._saldo =  0
        }

        get saldo(){
            return this._saldo;
        }

        set saldo(saldo){
            this._saldo = saldo        
        }

        sacar(valor){
            if (valor > this._saldo){
                return 'Operação negada'
            }
            this._saldo -= valor
            return this._saldo
        }
        
        depositar(valor){
            this._saldo += valor
            return this._saldo
        }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero);
        this.tipo = 'conta corrente';
        this._cartaoCredito = cartaoCredito;
        
    }

    get cartaoDeCredito(){
        return this._cartaoCredito;
    }
    set cartaoDeCredito(cartao){
        this._cartaoCredito = cartao;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo ='Conta Poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo ='Conta Universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação invalida';
        }
        this._saldo = this._saldo - valor
    }

}