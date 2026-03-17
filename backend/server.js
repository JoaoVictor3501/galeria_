const express = require("express");
const cors = require("cors");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
const porta = 3001;

app.use(cors());

app.get("/imagens", async (req, res) => {
  try {
    const resposta = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=12"
    );

    const dados = await resposta.json();

    res.json(dados);
  } catch (erro) {
    console.log("Erro:", erro);
    res.status(500).json({ erro: "Erro ao buscar dados" });
  }
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});