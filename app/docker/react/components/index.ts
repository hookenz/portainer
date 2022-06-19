import angular from 'angular';

import { r2a } from '@/react-tools/react2angular';
import { ContainersDatatable } from '@/react/docker/containers/ListView/ContainersDatatable';

export const componentsModule = angular
  .module('portainer.docker.react.components', [])
  .component(
    'containersDatatable',
    r2a(ContainersDatatable, [
      'isAddActionVisible',
      'isHostColumnVisible',
      'isRefreshVisible',
      'tableKey',
      'environment',
      'filters',
    ])
  ).name;
