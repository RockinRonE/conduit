import angular from 'angular';

//Create home module where functionality can attach to
let authModule = angular.module('app.auth', []);

//include ui-router config settings
import AuthConfig from './auth.config';
authModule.config(AuthConfig); 

//controllers
import AuthCtrl from './auth.controller';
authModule.controller('AuthCtrl', AuthCtrl);

export default authModule; 