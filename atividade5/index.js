const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

const PORT = 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) =>{

    res.render('index.html');

});

app.post('/agendar_consulta', (req, res) =>{

    let dados_consulta = req.body;
    let erro_form = false;
    let sucesso_form = false
    let data_atual = new Date();
    data_atual.setHours(0,0,0,0);
    campos_invalidos = [];

    if(dados_consulta.nome.length == 0) {

        erro_form = true;
        campos_invalidos.push("CAMPO NOME NÃO FOI PREENCHIDO CORRETAMENTE!");
    }

    if(dados_consulta.sobrenome.length == 0) {

        erro_form = true;
        campos_invalidos.push("CAMPO SOBRENOME NÃO FOI PREENCHIDO CORRETAMENTE!");
    }

    if(dados_consulta.cpf.length == 0 || dados_consulta.cpf.length < 11 || dados_consulta.length > 11) {

        erro_form = true;
        campos_invalidos.push("CAMPO CPF NÃO FOI PREENCHIDO CORRETAMENTE!");

    }

    if(dados_consulta.data_nascimento.length == 0) {

        erro_form = true;
        campos_invalidos.push("CAMPO DATA DE NASCIMENTO NÃO FOI PREENCHIDO CORRETAMENTE!");
    }

    if(dados_consulta.telefone.length == 0 || dados_consulta.telefone.length < 12 || dados_consulta.telefone.length > 12) {

        erro_form = true;
        campos_invalidos.push("CAMPO TELEFONE NÃO FOI PREENCHIDO CORRETAMENTE! PADRÃO: XX XXXXXXXX");
    }

    if(dados_consulta.cep.length < 8 || dados_consulta.cep.length > 8) {

        erro_form = true;
        campos_invalidos.push("CAMPO CEP NÃO FOI PREENCHIDO CORRETAMENTE!");
    }

    if(dados_consulta.endereco.length == 0) {

        erro_form = true;
        campos_invalidos.push("CAMPO ENDEREÇO NÃO FOI PREENCHIDO CORRETAMENTE!");

    }

    if(dados_consulta.data_consulta.length == 0) {

        erro_form = true;
        campos_invalidos.push("CAMPO DATA DA CONSULTA NÃO FOI PREENCHIDO CORRETAMENTE!");
    }

    else {

        let data_consulta = new Date(dados_consulta.data_consulta);

        if (data_consulta <= data_atual) {

            erro_form = true;
            campos_invalidos.push("DATA DA CONSULTA NÃO PODE SER MENOR OU IGUAL A DATA ATUAL!");

        }
    }


    if(dados_consulta.hora_consulta.length ==  0) {

        erro_form = true;
        campos_invalidos.push("CAMPO HORA DA CONSULTA NÃO FOI PREENCHIDO CORRETAMENTE!");
    }

    if (!erro_form) {

        sucesso_form = true;
        
    }

    res.render('index.html', {erro_form, sucesso_form, dados_consulta, campos_invalidos});

});

app.listen(PORT, ()=> {

    console.log('app rodando na porta ' + PORT);

});
