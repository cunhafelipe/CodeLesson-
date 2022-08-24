/**
 * Exercicio 1
 * Montar um objeto com as seguintes propriedades:
 *  Nome, Email, Senha, Confirmacao de senha, data de nascimento, Permissão
 * */

// VAR é declarada somente no arquivo atual
// LET é uma variavel que pode mudar de valor a qualquer momento
// CONST é uma variavel que pode ser gravada globalmente

const usuario = {
  nome: 'Felipe',
  dataNascimento: new Date(),
  idade: 17,
  email: 'felipe@gmail.com',
  senha: '1234',
  confirmacaoSenha: '1234',
  permissao: 'Administrador',
  nota: '9',
};

/**
 * Exemplo de atribuição de valor
 *
 * const data = 'data'
 */

const verificacao = () => {
  if (
    usuario.nota >= 6 &&
    usuario.idade >= 18 &&
    usuario.senha === usuario.confirmacaoSenha
  ) {
    console.log('Passou em todas as verificacoes');

    console.log(`Bem vindo ${usuario.nome} seu email é: ${usuario.email}`);

    console.log(
      `Bem vindo ${usuario.nome} sua senha cadastrada é: ${usuario.senha} e você tem uma permissão de: ${usuario.permissao}`
    );
  } else {
    throw Error('Deu erro no que? Não sei')
  };
};

console.log(verificacao());