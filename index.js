const prompt = require( "prompt" );
prompt.start();
prompt.get([{ name: "primeiroNome", required: true },
            { name: "primeiroNome", required: true }
], function (_, result) {
    console.log( "Nome: " + result.name);
});