const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');


  app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

  app.set('views',path.resolve(__dirname, 'src', 'views'));
  app.set('view engine', 'ejs');
  app.use(routes);
  
  app.listen(3000);
  console.log('Acessar http://localhost:3000');
  console.log(' app listening on port 3000!');






















  
// //        Criar    Ler     Atualizar    Deletar
// // CRUD - Create, Read, Update, Delete
// //       POST, GET, PUT, DELETE

// app.get('/', (req, res) => {
//   res.send(`
//     <form action="/" method="POST">
//       Nome do Cliente: <input type="text" name="name"><br>
//       Senha: <input type="password" name="senha">
//       <button>Enviar</button>
//     </form>
//   `);
// });

// app.get('/testes/:idUsuario?/:parametros', (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });

// app.post('/', (req, res) => {
//   console.log(req.body);
//     res.send(`O que você me enviou foi: ${req.body.name} `);
// }
// );

// app.get('/users', (req, res) => {
//   res.send([
//     {id: 1, name: 'Igor'},
//     {id: 2, name: 'Solange'},
//     {id: 3, name: 'Laura'},
//   ]);
// })









