angular.module('ovh-api-services').service('OvhApiOrderCartServiceOption', ($injector) => ({
  EnterpriseCloudDatabases() {
    return $injector.get('OvhApiOrderCartServiceOptionEnterpriseCloudDatabases');
  },
  Microsoft() {
    return $injector.get('OvhApiOrderCartServiceOptionMicrosoft');
  },
  MicrosoftExchange() {
    return $injector.get('OvhApiOrderCartServiceOptionMicrosoftExchange');
  },
  Vps() {
    return $injector.get('OvhApiOrderCartServiceOptionVps');
  },
  v6() {
    return $injector.get('OvhApiOrderCartServiceOptionV6');
  },
}));
