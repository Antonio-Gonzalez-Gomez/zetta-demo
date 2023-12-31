//Server intended for local use
//Run "node local_server.js" to execute
var zetta = require('zetta');
var LED = require('zetta-led-mock-driver');
var Photocell = require('zetta-photocell-mock-driver');
var duskToDawnLight = require('./dusk_to_dawn');
zetta()
  .name('Antonio-Gonzalez')
  .use(LED)
  .use(Photocell)
  .use(duskToDawnLight)
  .listen(1337, function(){
     console.log('Zetta is running at http://127.0.0.1:1337');
});