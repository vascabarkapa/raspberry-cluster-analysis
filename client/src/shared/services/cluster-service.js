import { get, post } from './api-client';

const ENDPOINT = '/cluster';

function getClusters(params = '') {
  return get(ENDPOINT, params);
}

function createClusters(user) {
  return post(ENDPOINT, user);
}

const ClusterService = {
  getClusters,
  createClusters
};

export default ClusterService;
