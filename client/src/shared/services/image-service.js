import { get, post } from './api-client';

const ENDPOINT = '/image';

function getImages() {
  return get(ENDPOINT);
}

function createImage(user) {
  return post(ENDPOINT, user);
}

const ImageService = {
  getImages,
  createImage
};

export default ImageService;
