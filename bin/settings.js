'use strict';

console.log('Loading settings..');
const SECRET_SETTINGS = require('./secret_settings');

const SESSION_NAME = SECRET_SETTINGS.SESSION_NAME;
const SESSION_SECRET = SECRET_SETTINGS.SESSION_SECRET;
const REDIS_PORT = SECRET_SETTINGS.REDIS_PORT;
const REDIS_HOST = SECRET_SETTINGS.REDIS_HOST;
const REDIS_PASSWORD = SECRET_SETTINGS.REDIS_PASSWORD;
const ZOOPHY_SERVICES_URI = SECRET_SETTINGS.ZOOPHY_SERVICES_URI;
const SERVER_PORT = SECRET_SETTINGS.SERVER_PORT;

const SESSION_CONFIG = {
  SESSION_NAME: SESSION_NAME,
  SESSION_SECRET: SESSION_SECRET
};

const API_CONFIG = {
  ZOOPHY_URI: ZOOPHY_SERVICES_URI
};

const REDIS_CONFIG = {
  PORT: REDIS_PORT,
  HOST: REDIS_HOST,
  PASSWORD: REDIS_PASSWORD
};

const SERVER_CONFIG = {
  PORT: SERVER_PORT
}

const SETTINGS = {
  SESSION_CONFIG: SESSION_CONFIG,
  API_CONFIG: API_CONFIG,
  REDIS_CONFIG: REDIS_CONFIG,
  SERVER_CONFIG: SERVER_CONFIG
};

module.exports = SETTINGS;
