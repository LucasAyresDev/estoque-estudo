import express from "express";

const app = express();

// permite ler dados do formulário
app.use(express.urlencoded({ extended: true }));

// rota para mostrar o HTML (teste simples)
app.get("/", (req, res) => {
  res.send(`
    <h1>Servidor rodando</h1>
    <a href="/adicionar-produto">Adicionar produto</a>
  `);
});

// rota que recebe o formulário
app.post("/adicionar-produto", (req, res) => {
  console.log("Dados recebidos:", req.body);

  res.send("Produto recebido! Veja o console.");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
