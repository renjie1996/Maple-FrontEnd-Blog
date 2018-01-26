function runCommand( cmd, args, callback ) {
  var child = spawn( cmd, args )
  var response = ''
  child.stdout.on('data', function( buffer ){ response += buffer.toString() })
  child.stdout.on('end', function(){ callback( response ) })
}


module.exports = {
  runCommand
}