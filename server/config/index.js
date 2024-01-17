import { config } from 'dotenv';
config();

const { PORT, ENVIRONMENT, CONNECTION_STRING, ACCESS_TOKEN_SECRET, API_URL, FRONT_URL } = process.env

export const port = PORT || 5000;
export const environment = ENVIRONMENT;
export const connectionString = CONNECTION_STRING;
export const accessTokenSecret = ACCESS_TOKEN_SECRET;
export const apiUrl = API_URL;
export const frontUrl = FRONT_URL;
export const prefix = '/api';
export const specs = "/docs";