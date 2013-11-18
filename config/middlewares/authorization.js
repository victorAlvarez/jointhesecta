
/*
 *  Generic require login routing middleware
 */

exports.requiresLogin = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/login')
  }
  next()
};


/*
 *  User authorizations routing middleware
 */

exports.user = {
    hasAuthorization : function (req, res, next) {
      if (req.profile.id != req.user.id) {
        return res.redirect('/users/'+req.profile.id)
      }
      next()
    }
}


/**
 * Mensaje authorizations routing middleware
 */
exports.mensaje = {
    hasAuthorization: function(req, res, next) {
        if (req.mensaje.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};
