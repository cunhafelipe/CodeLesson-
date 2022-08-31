function contador(entidade) {
  console.log(
    "As possibilidades nessa agência de carros 0km são: ",
    Object.keys(entidade).length
  );
}

module.exports = contador;
