import { get, post } from './api-client';

const ENDPOINT = '/cluster';

function getClusters(params = '') {
  return get(ENDPOINT, params);
}

function createClusters(user) {
  return post(ENDPOINT, user);
}

function getLoadThreshold() {
  return get(ENDPOINT + '/load-threshold');
}

const ClusterService = {
  getClusters,
  createClusters,
  getLoadThreshold
};

export default ClusterService;
