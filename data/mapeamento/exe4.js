const valorDia = {
  diasTrabalhados: 22,
  valorRecebido: 1000,
  fator: 5,
};

function divisao(diasTrabalhados, valorRecebido) {
  let valorFixo = 5,
    resumoDias = 5;
  const result = valorFixo / resumoDias;
  return console.log(valorRecebido / result);
}

divisao(valorDia.diasTrabalhados, valorDia.valorRecebido);
