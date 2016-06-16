import angular from 'angular';

// Create settings module where our functionality can attach
let settingsModule = angular.module('app.settings', []);

// Include our UI-router config settings
import SettingsConfig from './settings.config';
settingsModule.config(SettingsConfig); 

// Controllers
import SettingsCtrl from './settings.controller';
settingsModule.controller('SettingsCtrl', SettingsCtrl);

export default settingsModule; 