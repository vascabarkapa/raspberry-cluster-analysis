import mongooseLoader from './mongoose.js';
import expressLoader from './express.js';

export default async (server) => {
  await mongooseLoader();
  expressLoader(server);
}