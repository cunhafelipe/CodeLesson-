const candidatos = [
  {
    nome: 'Felipe',
    idade: Number('21'),
    dataNacimento: new Date(),
    status: Boolean(true),
    skills: [
      {
        html: true,
        css: true,
        javascript: false,
        database: false,
      },
    ],
  },
  {
    nome: 'Rafael',
    idade: Number('23'),
    dataNacimento: new Date(),
    status: Boolean(false),
    skills: [
      {
        javascript: true,
        database: true,
        rh: false,
        cozinhar: false,
      },
    ],
  },
  {
    nome: String('Karol'),
    idade: Number('29'),
    dataNacimento: new Date(),
    status: Boolean(true),
    skills: [
      {
        javascript: false,
        database: false,
        rh: false,
        cozinhar: true,
      },
    ],
  },
];

const candidato = candidatos[1]
// [] = array || vetor
// {} = object || JSON

// type="text" = String
// type="number" = Number
// type="date" = Date
// status = Booleano
// any = any
