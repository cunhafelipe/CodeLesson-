const superMercado = {
  nome: "Joanin",
  unidade: "Ribeirão Pires",
  number: "4823-6626",
};

const userAdmin = {
  cargo: "lider",
  ...superMercado,
};

const maxAdmin = {
  max: "gerente",
  ...userAdmin,
};

function verficacaoGerente() {
  if (superMercado.unidade === "gerente") {
    return {
      ...maxAdmin,
      ...userAdmin,
    };
  } else {
    console.log("Unidade inválida.");
  }
}
