
var async = require('async')

module.exports = function (app, passport, auth) {

  // user routes
  var users = require('../app/controllers/users')
  app.get('/signin', users.signin)
  app.get('/signup', users.signup)
  app.get('/signout', users.signout)
  app.post('/users', users.create)
  app.post('/users/session', passport.authenticate('local', {failureRedirect: '/signin', failureFlash: 'Email o password incorrectos'}), users.session)
  app.get('/users/me', users.me)
  app.get('/users/:userId', users.show)
  
  app.param('userId', users.user)
  
  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)

  //Mensajes Routes
  var mensajes = require('../app/controllers/mensajes');
  app.get('/mensajes', mensajes.all);
  app.post('/mensajes', auth.requiresLogin, mensajes.create);
  app.get('/mensajes/:mensajeId', mensajes.show);
  app.put('/mensajes/:mensajeId', auth.requiresLogin, auth.mensaje.hasAuthorization, mensajes.update);
  app.del('/mensajes/:mensajeId', auth.requiresLogin, auth.mensaje.hasAuthorization, mensajes.destroy);

  //Finish with setting up the mensajeId param
  app.param('mensajeId', mensajes.mensaje);
  
}
