angular
  .module('ovh-api-services')
  .service('OvhApiCloudProjectAiCapabilitiesServing', ($injector) => ({
    Region: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingRegion'),
    PresetImage: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingPresetImage'),
    Flavor: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingFlavor'),
    Framework: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingFramework'),
    Backend: () => $injector.get('OvhApiCloudProjectAiCapabilitiesServingBackend'),
  }));
