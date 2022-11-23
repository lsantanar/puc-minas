const prompt = require( "prompt" );

const schema = {
  properties: {
    name: {
      description: "Informe seu nome",
      message: "Utilize apenas letras",
      pattern: /^[a-zA-Z\s\-]+$/,
      required: true,
    },
    lastname: {
      description: "Informe seu sobrenome",
      message: "Utilize apenas letras",
      pattern: /^[a-zA-Z\s\-]+$/,
      required: true,
    },
    email: {
      description: "Informe seu email",
      message: "Preencha um email válido",
      required: true,
    },
    cpf: {
      description: "Informe seu CPF",
      message: "Preencha um CPF válido",
      pattern: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      required: true,
    },
  },
};
prompt.start();

prompt.get(schema, function (err, result) {
  console.log("Resumo:");
  console.log("  Nome: " + result.name);
  console.log("  Sobrenome: " + result.lastname);
  console.log("  E-mail: " + result.email);
  console.log("  CPF: " + result.cpf);
});