angular.module('ovh-api-services').service('OvhApiOrderRouter', ($injector) => ({
  v6: angular.noop,
  New() {
    return $injector.get('OvhApiOrderRouterNew');
  },
}));
