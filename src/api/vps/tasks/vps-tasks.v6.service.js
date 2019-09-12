angular.module('ovh-api-services')
  .service('OvhApiVpsTasksV6', $resource => $resource('/vps/:serviceName/tasks/:taskId'));
