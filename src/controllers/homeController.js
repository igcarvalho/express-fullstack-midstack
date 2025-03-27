exports.paginaInicial = (req, res) => {
    res.render('index');
}
exports.tratarPost = (req, res) => {
    res.send('Login efetuado com sucesso!');
}