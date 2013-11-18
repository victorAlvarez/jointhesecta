/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Mensaje = mongoose.model('Mensaje'),
    _ = require('underscore');


/**
 * Find Mensaje by id
 */
exports.mensaje = function(req, res, next, id) {
    Mensaje.load(id, function(err, mensaje) {
        if (err) return next(err);
        if (!mensaje) return next(new Error('Fallo al cargar mensaje ' + id));
        req.mensaje = mensaje;
        next();
    });
};

/**
 * Create a mensaje
 */
exports.create = function(req, res) {
    var mensaje = new Mensaje(req.body);
    mensaje.user = req.user;

    mensaje.save(function(err) {
        if (err) {
            return res.send('mensajes/nuevo', {
                errors: err.errors,
                mensaje: mensaje
            });
        } else {
            res.jsonp(mensaje);
        }
    });
};

/**
 * Update a mensaje
 */
exports.update = function(req, res) {
    var mensaje = req.mensaje;

    mensaje = _.extend(mensaje, req.body);

    mensaje.save(function(err) {
        res.jsonp(mensaje);
    });
};

/**
 * Delete an mensaje
 */
exports.destroy = function(req, res) {
    var mensaje = req.mensaje;

    mensaje.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(mensaje);
        }
    });
};

/**
 * Show an mensaje
 */
exports.show = function(req, res) {
    res.jsonp(req.mensaje);
};

/**
 * List of Mensajes
 */
exports.all = function(req, res) {
    Mensaje.find().sort('-created').populate('user', 'name username').exec(function(err, mensajes) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(mensajes);
        }
    });
};
