require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
app.emit('pronto');
})
.catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middlewares');



  app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
  secret: 'kdsoidajsiud723',
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING, 
    collectionName: 'sessions' 
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, 
  }
});

app.use(sessionOptions);
app.use(flash());
 
  app.set('views',path.resolve(__dirname, 'src', 'views'));
  app.set('view engine', 'ejs');

  app.use(middlewareGlobal);
  app.use(routes);

  const http = require('http');

let server;

app.on('pronto', () => {
  const PORT = process.env.PORT || 3000;
  server = http.createServer(app);
  server.listen(PORT, () => {
    console.log(`Acessar http://localhost:${PORT}`);
    console.log(`Servidor executando na porta ${PORT}`);
  });
});

// Encerrar corretamente quando o nodemon reiniciar
process.on('SIGTERM', () => {
  console.log('Desligando servidor...');
  if (server) {
    server.close(() => {
      console.log('Servidor finalizado com sucesso.');
      process.exit(0);
    });
  }
});

process.on('SIGINT', () => {
  console.log('Encerrando com Ctrl+C...');
  if (server) {
    server.close(() => {
      console.log('Servidor encerrado.');
      process.exit(0);
    });
  }
});
























  
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









