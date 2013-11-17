window.app = angular.module('JoinTheSecta', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'jst.controllers', 'jst.directives', 'jst.services']);

// Dependencias
// Controladores
window.angular.module('jst.controllers', [
    'jst.controllers.header', 'jst.controllers.index', 'jst.controllers.whoweare', 'jst.controllers.phylosofy',
    'jst.controllers.modules', 'jst.controllers.contact', 'jst.controllers.hosting'
]);
// Servicios
window.angular.module('jst.services', [
    'jst.services.global'
]);