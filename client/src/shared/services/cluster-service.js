import {get, post} from "./api-client";

const ENDPOINT = "/cluster";

function getClusters() {
  return get(ENDPOINT);
}

function createClusters(user) {
  return post(ENDPOINT, user);
}

const ImageService = {
  getClusters, createClusters
}

export default ImageService;