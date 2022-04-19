// Manipular error 
// new Error('message', fileName, LineNumber);
// todos parametros são opcionais

const MeuErro = new Error('Mensagem invalida');
MeuErro.name = 'InvalidMessage';
throw MeuErro;
