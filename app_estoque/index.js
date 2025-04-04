const express = require('express');
const estoque = require('./estoque');
const app     = express();

app.get('/', (req, res)=>{
    let html = '<h1>app_estoque</h1>';
    html += '<h3>Rotas disponíveis</h3>';
    html += '<p>/adicionar/:id/:nome/:qtd - Adiciona um novo produto ao estoque</p>';
    html += '<p>/listar - Lista todos os produtos do estoque</p>';
    html += '<p>/remover/:id - Remove um produto do estoque</p>';
    html += '<p>/editar/:id/:qtd - Altera a quantidade de um produto do estoque</p>';

    res.send(html);
});

// /adicionar/:id/:nome/:qtd
app.get('/adicionar/:id/:nome/:qtd', (req, res)=>{
    const id   = Number(req.params.id);
    const nome = req.params.nome;
    const qtd  = Number(req.params.qtd);

    const item = {
        id: id,
        nome: nome,
        qtd: qtd
    }

    res.send(estoque.adicionar(item));
});

// /listar
app.get('/listar', (req, res)=>{
   res.send(estoque.listar());
});

// /remover/:id
app.get('/remover/:id', (req, res)=>{

});

// /editar/:id/:qtd
app.get('/editar/:id/:qtd', (req, res)=>{
   const id  = Number(req.params.id);
   const qtd = Number(req.params.qtd);
   
   res.send(estoque.editar(id, qtd));
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});