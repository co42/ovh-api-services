angular.module('ovh-api-services').service('OvhApiMePaymentMethod', ($injector, $log) => ({
  v6() {
    $log.warn('OvhApiMePaymentMethodV6 is deprecated and will be deleted at next major release.');
    return $injector.get('OvhApiMePaymentMethodV6');
  },
}));
