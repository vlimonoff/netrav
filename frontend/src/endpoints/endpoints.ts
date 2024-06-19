const API_URL = 'http://127.0.0.1:8000';

const ARTISTS_API = '/api/artists/';
const ART_MOVEMENTS = '/api/artmovements/';
const ASSOCIATIONS = '/api/associations/';

export const endpoints = {
  ARTISTS: `${API_URL}${ARTISTS_API}`,
  ART_MOVEMENTS: `${API_URL}${ART_MOVEMENTS}`,
  ASSOCIATIONS: `${API_URL}${ASSOCIATIONS}`,
};
