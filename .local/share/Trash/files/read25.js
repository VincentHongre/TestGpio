var gpio = require('rpi-gpio');

console.log('Ready');

gpio.on('change', function(channel, value) {
  
	console.log('Channel ' + channel + ' value is now ' + value);
});

gpio.setup(22, gpio.DIR_IN, gpio.EDGE_BOTH);
gpio.setup(18, gpio.DIR_IN, gpio.EDGE_BOTH);
