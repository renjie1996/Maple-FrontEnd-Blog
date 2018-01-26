const { spawn } = require('child_process');

function runCommand(cmd, args, callback) {
  console.log(cmd, args)
  const child = spawn( cmd, args )
  const response = ''
  child.stdout.on('data', buffer => { response += buffer.toString() })
  child.stdout.on('end', () => { callback( response ) })
};


module.exports = {
  runCommand,
}