//Mensaje service used for mensajes REST endpoint
angular.module('mean.mensajes').factory("Mensaje", ['$resource', function($resource) {
    return $resource('mensajes/:mensajeId', {
        mensajeId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);