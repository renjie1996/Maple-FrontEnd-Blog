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


// var http = require('http')
// var createHandler = require('github-webhook-handler')
// var handler = createHandler({ path: '/webhook', secret: 'mytoken' })

// http.createServer(function (req, res) {
//   handler(req, res, function (err) {
//     res.statusCode = 404
//     res.end('no such location')
//   })
// }).listen(5151, () => console.log('listening on port 5151'))

// handler.on('error', function (err) {
//   console.error('Error:', err.message)
// })

// handler.on('push', function (event) {
//   console.log('Received a push event for %s to %s',
//     event.payload.repository.name,
//     event.payload.ref)
// })

// handler.on('issues', function (event) {
//   console.log('Received an issue event for %s action=%s: #%d %s',
//     event.payload.repository.name,
//     event.payload.action,
//     event.payload.issue.number,
//     event.payload.issue.title)
// })