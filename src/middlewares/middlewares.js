exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'VariavelLocal';
    next();
}