# 🚗 API de Veículos com Express

Este é um projeto simples de API REST para gerenciar veículos, desenvolvido com **Node.js** e **Express**.  
A API permite realizar operações **CRUD** (Create, Read, Update, Delete) para manipular informações de veículos.

---

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## 📌 Como Executar o Projeto

### 1️⃣ Clonar o repositório  

git clone https://github.com/seu-usuario/seu-repositorio.git

### 2️⃣ Instalar as dependências

npm install

### 3️⃣ Executar o servidor

node index.js

🌐 Rotas da API
🔹 Listar todos os veículos
GET /veiculos
📌 Retorna uma lista de veículos cadastrados.

🔹 Buscar veículo por ID
GET /veiculos/:id
📌 Retorna os detalhes do veículo com o ID especificado.

🔹 Cadastrar um novo veículo
POST /veiculos
📌 Adiciona um novo veículo à lista.

🔹 Body (JSON):

{

  "id": 1,
  
  "marca": "Toyota",
  
  "modelo": "Corolla",
  
  "ano": 2022
  
}

🔹 Atualizar um veículo
PUT /veiculos/:id
📌 Atualiza as informações de um veículo já cadastrado.

🔹 Body (JSON):

{

  "id": 1,
  
  "marca": "Toyota",
  
  "modelo": "Corolla",
  
  "ano": 2023
}

🔹 Remover um veículo
DELETE /veiculos/:id
📌 Remove um veículo com o ID especificado.
