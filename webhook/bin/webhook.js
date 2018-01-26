const { createServer } = require('http');
const { spawn } = require('child_process');
const HOOK_PORT = 5151;
const createHandler = require('github-webhook-handler');

const handler = createHandler({
  path: '/webhook',
  secret: 'mytoken' // maybe there is no token
});

createServer((req, res) => {
  handler(req, res, e => {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(HOOK_PORT, () => console.log(`listening on port ${HOOK_PORT}`));


handler.on('error', err => console.error('Error:', err.message));
handler.on('push', event => console.log(event));