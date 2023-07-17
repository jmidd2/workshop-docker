#!/usr/bin/env node

/**
 * Module dependencies.
 */
import http from 'node:http';
import app from './app.js';

/**
 * Get port from environment and store in Express.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
  const { address } = server.address();
  const host =
    address === '::' || address === '127.0.0.1' ? 'localhost' : address;

  console.log(`Server listening at http://${host}:${port}`);
});

process.on('SIGTERM', () => {
  console.debug('SIGTERM signal received: closing HTTP server...');
  server.close(() => {
    console.debug('HTTP server closed.');
  });
});
