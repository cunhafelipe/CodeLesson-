const agencia = require("./dados/car.json");
const contador = require("./contador2");

contador(agencia);

for (const agencias of agencia) {
  console.log(
    `A marca do veiculo é: ${agencias.marca}, e seu modelo é: ${agencias.modelo}`
  );
}
