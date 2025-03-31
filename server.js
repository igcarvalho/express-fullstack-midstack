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

  app.on('pronto', () => {
    app.listen(3000, () => {
      console.log('Acessar http://localhost:3000');
      console.log('Servidor executando na porta 3000');
    });
  })























  
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









