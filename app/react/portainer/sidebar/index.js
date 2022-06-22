import angular from 'angular';

import { VersionInfoAngular } from './VersionInfo';

angular.module('portainer.app').component('versionInfo', VersionInfoAngular).name;
