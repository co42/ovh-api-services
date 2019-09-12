angular.module('ovh-api-services').service('OvhApiVpsTasks', $injector => ({
  v6() {
    return $injector.get('OvhApiVpsTasksV6');
  },
}));
