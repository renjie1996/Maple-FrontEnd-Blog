const { createServer } = require('http');
const HOOK_PORT = 5151;
const createHandler = require('github-webhook-handler');
const { runCommand } = require('./runbash');

const handler = createHandler({
  path: '/webhook',
  secret: 'mytoken' // maybe there is no token;
});

createServer((req, res) => {
  handler(req, res, e => {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(HOOK_PORT, () => console.log(`listening on port ${HOOK_PORT}`));

// 执行pull命令
// 执行
handler.on('error', err => console.error('Error:', err.message));
handler.on('push', event => {
  console.log(`Received a push event for ${event.payload.repository.name} to ${event.payload.ref}`);
  runCommand('sh', [`${__dirname}/cicd.sh`], txt => {
    console.log('切出子进程进行自动pull');
    console.log(txt);
  })
});

// issue
handler.on('issues', event => {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
})

