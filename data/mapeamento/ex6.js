const contador = require("./contador");

const celulares = [
  { tipo: "motorola" },
  { tipo: "samsung" },
  { tipo: "xiaomi" },
  { tipo: "apple" },
];

contador(celulares);

for (const celular of celulares) {
  console.log(`A marca do celular é: ${celular.tipo}`);
}
