var gpio = require('rpi-gpio');

gpio.setup(18, gpio.DIR_IN, readInput);

function readInput(err) {
    if (err) throw err;
    gpio.read(18, function(err, value) {
        if (err) throw err;
        console.log('The value is ' + value);
    });
}