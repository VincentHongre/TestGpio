var gpio = require('rpi-gpio');
var passages = 0;

console.log('Ready');

gpio.on('change', function(channel, value) {
	
	console.log('Channel ' + channel + ' value is now ' + value);
	
	passages = passages + 1;
	console.log(passages);
});


gpio.setup(18, gpio.DIR_IN, gpio.EDGE_BOTH);


/*/</div>
        <img src={Video1} alt="loading..." className="Animation" />

        {(passages >= 0 && passages <=4) && (
          <img src={animation} alt="loading..." className="Animation" />
        )
        }
        
        {(passages >= 5 && passages <=10) && (
          <img src={Boulanger} alt="loading..." className="Animation" />
        )
        } /*/
