const { spawn } = require('child_process');

function runCommand(cmd, args, callback) {
  const child = spawn( cmd, args )
  let response = ''
  child.stdout.on('data', buffer => { response += buffer.toString() })
  child.stdout.on('end', () => { callback( response ) })
};

module.exports = {
  runCommand,
}