const HomeModel = require('../models/HomeModel');

HomeModel.create({
    title: 'Título da Home2',
    description: 'Descrição da Home2',
    image: 'https://picsum.photos/200/300',
})
.then(dados => console.log(dados))
.catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    console.log(req.session.usuario);
    res.render('index');
    return;
}
exports.tratarPost = (req, res) => {
    res.send(req.body);
    return; 
}