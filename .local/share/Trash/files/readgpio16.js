
var gpio = require('rpi-gpio');




export class GPIO16 {
	
	gpio.setup(16, gpio.DIR_IN, gpio.EDGE_BOTH);
 
	var passages = 0;
	
  
  gpio.on('change', function(channel, value) {
	
	console.log('Channel ' + channel + ' value is now ' + value);
	
	passages = passages + 1/3;
	console.log(passages);
	}

}
