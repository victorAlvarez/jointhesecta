window.app = angular.module('JoinTheSecta', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'jst.controllers', 'jst.directives', 'jst.services']);

// bundling dependencies
window.angular.module('jst.controllers', [
    'jst.controllers.header', 'jst.controllers.index', 'jst.controllers.whoweare', 'jst.controllers.phylosofy',
    'jst.controllers.modules', 'jst.controllers.contact'
]);

window.angular.module('jst.services', [
    'jst.services.global'
]);