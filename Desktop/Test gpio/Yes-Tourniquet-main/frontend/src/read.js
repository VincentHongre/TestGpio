var gpio = require('rpi-gpio');
var passages = 0;

console.log('Ready');

gpio.on('change', function(channel, value) {
	
	console.log('Channel ' + channel + ' value is now ' + value);
	
	passages = passages + 1;
	console.log(passages);
});


gpio.setup(18, gpio.DIR_IN, gpio.EDGE_BOTH);


