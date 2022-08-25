const usuarios = [
  {
    nome: "Felipe",
    idade: Number("21"),
    email: "felipe@hotmail.com",
    senha: "felipe21",
    confirmacaoSenha: "felipe21",
    cargo: "Desenvolvedor Junior",
    skills: [
      {
        html: true,
        css: true,
        react: false,
        javascript: false,
      },
    ],
  },
  {
    nome: "Amanda",
    idade: Number("22"),
    email: "amanda@hotmail.com",
    senha: "amanda22",
    confirmacaoSenha: "amanda21",
    cargo: "Telemarketing",
    skills: [
      {
        comunicacao: true,
        atendimento: true,
        html: false,
        css: false,
      },
    ],
  },
  {
    nome: "Miguel",
    idade: Number("1"),
    email: "miguel@hotmail.com",
    senha: "miguel01",
    confirmacaoSenha: "miguel01",
    cargo: "Aprendiz",
    skills: [
      {
        andar: true,
        chorar: true,
        cozinhar: false,
        html: false,
      },
    ],
  },
];

const usuario = usuarios[1];

const verificacao = () => {
  if (usuario.senha === usuario.confirmacaoSenha) {
    console.log("Sua senha está correta! Vamos lá?");

    console.log(
      `Bem vindo ${usuario.nome} sua senha de cadastro é: ${usuario.senha} e você tem um cargo atual de: ${usuario.cargo}`
    );
  } else {
    throw Error("As senhas estão diferentes!");
  }
};

console.log(verificacao());
