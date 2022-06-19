import angular from 'angular';

import { r2a } from '@/react-tools/react2angular';
import { AzureSidebar } from '@/react/azure/AzureSidebar';

export const componentsModule = angular
  .module('portainer.azure.react.components', [])
  .component('azureSidebar', r2a(AzureSidebar, ['environmentId'])).name;
