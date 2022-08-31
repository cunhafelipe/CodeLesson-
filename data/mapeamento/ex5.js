const city = require("./dados/city.json");
const contador = require("./contador");

contador(city);

for (const cidades of city) {
  console.log(
    `Nome da cidade ${cidades.nome}, e o estado é: ${cidades.estado}`
  );
}
