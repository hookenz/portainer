import angular from 'angular';

import { containersModule } from './containers';

export const viewsModule = angular.module('portainer.docker.react.views', [
  containersModule,
]).name;
