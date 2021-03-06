angular.module('ovh-api-services').service('OvhApiDedicatedHousingV6', ($resource, $cacheFactory) => {
  const otherCache = $cacheFactory('OvhApiDedicatedHousingV6');
  const queryCache = $cacheFactory('OvhApiDedicatedHousingV6Query');

  const dedicatedHousingResource = $resource('/dedicated/housing/:serviceName', {
    serviceName: '@serviceName',
  }, {
    query: { method: 'GET', cache: queryCache, isArray: true },
    getServiceInfos: {
      url: '/dedicated/housing/:serviceName/serviceInfos',
      method: 'GET',
      cache: otherCache,
    },
  });

  dedicatedHousingResource.resetAllCache = function () {
    dedicatedHousingResource.resetOtherCache();
    dedicatedHousingResource.resetQueryCache();
  };

  dedicatedHousingResource.resetOtherCache = function () {
    otherCache.removeAll();
  };

  dedicatedHousingResource.resetQueryCache = function () {
    queryCache.removeAll();
  };

  return dedicatedHousingResource;
});
