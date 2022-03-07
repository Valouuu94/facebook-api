import { launch } from './server.js';
const {
  PROTOCOL = 'http',
  HOST = 'localhost',
  PORT = 8080,
} = process.env;

launch({
  protocol: PROTOCOL,
  host: HOST,
  port: PORT,
});

