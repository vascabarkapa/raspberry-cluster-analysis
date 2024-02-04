import { get, post } from './api-client';

const ENDPOINT = '/image';

function getImages(params = '') {
  return get(ENDPOINT, params);
}

function createImage(user) {
  return post(ENDPOINT, user);
}

function getNumberOfFaces() {
  return get(ENDPOINT + '/number-of-faces');
}

function getAverageImageStats() {
  return get(ENDPOINT + '/average-faces');
}

const ImageService = {
  getImages,
  createImage,
  getNumberOfFaces,
  getAverageImageStats
};

export default ImageService;
