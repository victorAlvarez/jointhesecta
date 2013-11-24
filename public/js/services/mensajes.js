//Mensaje service used for mensajes REST endpoint

window.angular.module('jst.services.mensajes', [])
    .factory('Mensaje', ['$resource',
        function ($resource) {
            return $resource(
                'mensajes/:mensajeId',
                {
                    mensajeId: '@_id'
                },
                {
                    update: {method: 'PUT'}
                }
            );
        }]);
