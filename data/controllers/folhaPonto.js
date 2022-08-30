const contador = require("../contador");
const folhaPonto = require("../dados/folhaPonto.json");

contador(folhaPonto);
let dados = [];
for (let i = 0; i < folhaPonto[0].ponto.horas.length; i++) {
  const data = folhaPonto[0].ponto[i];
  dados.push(data);
}

for (const funcionario of folhaPonto) {
  console.log(
    `Funcionario ${
      folhaPonto[0].nomeFuncionario
    } trabalhou um total de ${JSON.stringify(dados)}`
  );
}
