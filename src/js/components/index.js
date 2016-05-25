import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// Componenets (and directives)
import ListErrors from './list-errors.component';
componentsModule.component('listErrors', ListErrors);

export default componentsModule;
