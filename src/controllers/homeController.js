// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     title: 'Título da Home2',
//     description: 'Descrição da Home2',
//     image: 'https://picsum.photos/200/300',
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index', {
        title: 'Home',
        description: 'Descrição da Home',
        image: 'https://picsum.photos/200/300',
    });
    return;
}
exports.tratarPost = (req, res) => {
    res.send(req.body);
    return; 
}