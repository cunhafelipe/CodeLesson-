const agenciaSemi = require("./dados/semino.json");
const contadorSemi = require("./contadorsemi");

contadorSemi(agenciaSemi);

for (const agenciasSemi of agenciaSemi) {
  console.log(
    `A marca disponível no momento é: ${agenciasSemi.marca}, e seu modelo é: ${agenciasSemi.modelo}`
  );
}
