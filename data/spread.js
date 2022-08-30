/**
 * Spread -
 * Copia todas as propriedades de um objeto
 */

function verificarGlobal() {
  if (user.unidade === "Global") {
    return {
      ...superAdmin,
      ...admin,
    };
  } else {
    console.log("Cuida da sua unidade");
  }
}

const user = {
  email: "rafael@torreson.com",
  nome: "Rafael Torreson",
  unidade: "sbc",
};

const admin = {
  role: "admin",
  ...user,
};

const superAdmin = {
  super: "global",
  ...admin,
};
