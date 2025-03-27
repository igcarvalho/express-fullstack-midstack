# 📦 express-fullstack-midstack

Estrutura inicial organizada para aplicações web utilizando **Node.js**, **Express** e **EJS**.  
Ideal para projetos que não são tão básicos, mas também não complexos demais — um "meio termo" funcional e escalável.

---

## 🚀 Funcionalidades

- Servidor Express configurado
- Estrutura em MVC (Model-View-Controller)
- Views com EJS
- Controllers separados
- Rotas organizadas
- Frontend básico integrado
- Desenvolvimento com `nodemon`

---

## 📁 Estrutura do Projeto

express-fullstack-midstack/ │ ├── node_modules/ ├── public/ ├── src/ │ ├── controllers/ │ │ ├── homeController.js │ │ └── contatoController.js │ └── views/ │ └── index.ejs ├── routes.js ├── server.js ├── package.json ├── package-lock.json └── .gitignore

yaml
Copiar
Editar

---

## 🛠️ Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/express-fullstack-midstack.git
cd express-fullstack-midstack
npm install
▶️ Como rodar o projeto
Durante o desenvolvimento:

bash
Copiar
Editar
npm run start
# ou
nodemon server.js
Acesse no navegador: http://localhost:3000

📌 Notas
Requer Node.js instalado na máquina

Estrutura organizada para escalar o projeto facilmente

O arquivo .gitignore já está configurado para ignorar node_modules

